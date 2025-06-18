import api from "shared/api";

const deleteVideoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    deleteVideo: builder.mutation<void, string>({
      query: (id) => ({
        url: `api/private/videos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["VideosList", "VideoInfo"],
    }),
  }),
});

export const { useDeleteVideoMutation } = deleteVideoApi;
