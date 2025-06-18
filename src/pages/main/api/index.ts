import api from "shared/api";

import type { VideoPreview } from "entities/videoPreviews/types";

const videosListApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getVideos: builder.query<VideoPreview[], void>({
      query: () => "api/public/videos",
      providesTags: ["VideosList"],
    }),
  }),
});

export const { useGetVideosQuery } = videosListApi;
