import type { Meta, StoryObj } from "@storybook/react-vite";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import { http, HttpResponse } from "msw";

import { Video } from ".";

import type { VideoData } from "entities/videoPreviews/types";

const meta: Meta<typeof Video> = {
  title: "pages/Video",
  component: Video,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Video>;

export default meta;

const testData: VideoData = {
  id: "1",
  videoUrl: "string",
  title: "Title",
  description: "Description ebat'",
  reactions: {
    LIKE: 128,
    DISLIKE: 112,
  },
  createdAt: new Date().toISOString(),
  owner: "owner",
  imageUrl: "string",
  accessPublic: true,
};

export const Main: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        path: "/video/:id",
      },
      location: {
        pathParams: {
          id: 1,
        },
        searchParams: {
          private: "true",
        },
      },
    }),
    msw: {
      handlers: [http.get("api/private/videos/1", () => HttpResponse.json(testData))],
    },
  },
};
