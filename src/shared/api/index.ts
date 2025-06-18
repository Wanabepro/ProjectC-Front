import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { keycloak } from "shared/keycloak";

const baseQuery = fetchBaseQuery({
  baseUrl: "/",
  prepareHeaders: (headers) => {
    const token = keycloak.token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const api = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
      try {
        await keycloak.updateToken(30);

        result = await baseQuery(args, api, extraOptions);
      } catch (error) {
        console.error("Failed to refresh token", error);
      }
    }
    return result;
  },
  endpoints: () => ({}),
  tagTypes: ["VideosList", "VideoInfo"],
});

export default api;
