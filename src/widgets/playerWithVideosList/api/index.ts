import api from "shared/api";

type Video = { title: string; id: string; storagePath: string };

const videosListApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getVideos: builder.query<Video[], void>({
      query: () => "api/public/videos",
      providesTags: ["VideosList"],
    }),
    getVideoLink: builder.query<string, string>({
      query: (storagePath) => ({
        url: `api/public/videos/${storagePath}`,
        responseHandler: "text",
      }),
    }),
  }),
});

export const { useGetVideosQuery, useLazyGetVideoLinkQuery } = videosListApi;
