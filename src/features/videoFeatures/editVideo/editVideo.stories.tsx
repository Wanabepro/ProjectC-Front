import type { Meta, StoryObj } from "@storybook/react-vite";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import { http, HttpResponse } from "msw";

import { EditVideo } from ".";

const meta: Meta<typeof EditVideo> = {
  title: "features/EditVideo",
  component: EditVideo,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof EditVideo>;

export default meta;

const TestData = {
  id: "1",
  title: "Title",
  description: "Description",
  accessPublic: false,
  createdAt: "",
  owner: "eboba",
  imageUrl: "asdzxc",
};

export const Main: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { id: 1 },
      },
      routing: {
        path: "/edit-video/:id",
      },
    }),
    msw: {
      handlers: [http.get("/api/private/videos/info/1", () => HttpResponse.json(TestData))],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100vw", height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
};
