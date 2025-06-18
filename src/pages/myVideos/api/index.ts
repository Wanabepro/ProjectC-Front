import api from "shared/api";

import type { VideoPreview } from "entities/videoPreviews/types";

const videosListApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMyVideos: builder.query<VideoPreview[], void>({
      query: () => "api/private/videos",
      providesTags: ["VideosList"],
    }),
  }),
});

export const { useGetMyVideosQuery } = videosListApi;
