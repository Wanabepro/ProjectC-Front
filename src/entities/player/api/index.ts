import api from "shared/api";

type GetVideoLinkArgs = { id: string; isMy: boolean };

const videosListApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getVideoLink: builder.query<string, GetVideoLinkArgs>({
      query: ({ id, isMy }) => ({
        url: isMy ? `api/private/videos/${id}` : `api/public/videos/${id}`,
        responseHandler: "text",
      }),
    }),
  }),
});

export const { useGetVideoLinkQuery } = videosListApi;
