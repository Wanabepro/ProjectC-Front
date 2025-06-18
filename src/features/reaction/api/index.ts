import api from "shared/api";

import type { ReactionTypes } from "entities/reaction/types";

type GetVideoLinkArgs = { id: string; reaction: ReactionTypes };

const reactionsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    sendReaction: builder.mutation<void, GetVideoLinkArgs>({
      query: ({ id, reaction }) => ({
        url: `api/private/videos/${id}/reaction`,
        method: "PUT",
        body: {
          reaction,
        },
      }),
    }),
  }),
});

export const { useSendReactionMutation } = reactionsApi;
