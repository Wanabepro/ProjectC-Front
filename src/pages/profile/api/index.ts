import api from "shared/api";

export type ProfileData = {
  username: string;
  email: string;
  password?: string;
};

const profileApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProfileData: builder.query<Omit<ProfileData, "password">, void>({
      query: () => "api/profile",
    }),
    updateProfileData: builder.mutation<void, ProfileData>({
      query: (data) => ({
        url: "api/profile",
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const { useGetProfileDataQuery, useUpdateProfileDataMutation } = profileApi;
