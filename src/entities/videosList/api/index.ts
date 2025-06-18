import api from "shared/api";

type DeleteVideoArgs = { id: string; storagePath: string };

const videosListApi = api.injectEndpoints({
  endpoints: (builder) => ({
    deleteVideo: builder.mutation<unknown, DeleteVideoArgs>({
      query: ({ id, storagePath }) => ({
        url: `api/private/videos/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "text/plain",
        },
        body: storagePath,
      }),
      invalidatesTags: [{ type: "VideosList" }],
    }),
  }),
});

export const { useDeleteVideoMutation } = videosListApi;
