import api from "shared/api";

import type { VideoData } from "entities/videoPreviews/types";

type GetVideoLinkArgs = { id: string; isMy: boolean };

const videoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getVideo: builder.query<VideoData, GetVideoLinkArgs>({
      query: ({ id, isMy }) => ({
        url: isMy ? `api/private/videos/${id}` : `api/public/videos/${id}`,
      }),
    }),
  }),
});

export const { useGetVideoQuery } = videoApi;
