import { Data } from "effect"

export class HttpError extends Data.TaggedError("Http Error")<{
  status: number,
  props?: string[]
  serverMessage?: string
  devMessage: string
  hasData: Boolean,
  data?: any,
}> { }

export class UnknownError extends Data.TaggedError("Unknown Error")<{ status?: string, hint?: string }> { }

export const selectHttpError = (response: ResponseObject) => {
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