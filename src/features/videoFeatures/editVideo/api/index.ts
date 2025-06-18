import api from "shared/api";

type VideoInfo = {
  title: string;
  description: string;
  accessPublic: boolean;
  id: string;
  createdAt: string;
  owner: string;
  imageUrl: string | null;
};

const editVideoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getInfoByVideoId: builder.query<VideoInfo, string>({
      query: (id) => `api/private/videos/info/${id}`,
      providesTags: ["VideoInfo"],
    }),
  }),
});

export const { useGetInfoByVideoIdQuery } = editVideoApi;
