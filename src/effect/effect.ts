import { Effect, Data } from 'effect'; // Correct: Imports the Effect namespace and type
import axios, { AxiosResponse } from 'axios';

class HttpError extends Data.TaggedError("Http Error")<{
  status: number,
  props?: string[]
  serverMessage?: string
  devMessage: string
  hasData: Boolean,
  data?: any,
}> { }

class UnknownError extends Data.TaggedError("Unknown Error")<{ status?: string, hint?: string }> { }

interface Post {
  userId: number;
  // id: number;
  // title: string;
  // body: string;
}

const selectHttpError = (response: ResponseObject) => {
  if (typeof response?.data === "object") {
    return new HttpError({
      status: response.status,
      props: Object.keys(response.data),
      devMessage: `These props are available on error.response.data object: ${Object.keys(response.data).join(', ')}`,
      serverMessage: response.data?.message || "server did not provide message prop on data",
      hasData: true,
      data: response.data
    });
  } else {
    return new HttpError({
      status: response.status,
      devMessage: "Server did not provide data object on error response",
      serverMessage: "No data object provided",
      hasData: false,
    });
  }
}

export const superApi = Effect.gen(function* () {
  const post = yield* Effect.tryPromise({
    try: async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${1}`);
      return response.data;
    },
    catch: (error: any) => {
      if (typeof error === "object" && typeof error?.response === "object") {
        return selectHttpError(error.response)
      } else {
        return new UnknownError({ hint: "Error did not send data from server" });
      }
    },
  });
  return post
})

superApi.pipe(
  Effect.catchTag('Http Error', (error) => Effect.succeed({ error: `API Error: ${error.message} with status ${error.status}` })),
  Effect.catchTag('Unknown Error', (error) => Effect.succeed({ error: `API Error: PrecisionError with count ${error}` })),
);

