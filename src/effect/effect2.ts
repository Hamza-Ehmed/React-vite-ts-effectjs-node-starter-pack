import { Effect } from 'effect';
import axios from 'axios';
import { selectHttpError, UnknownError } from './errorDefinitions';

export const getJson = (link: string) =>
    Effect.gen(function* () {
        const post = yield* Effect.tryPromise({
            try: async () => {
                const response = await axios.get(link);
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
