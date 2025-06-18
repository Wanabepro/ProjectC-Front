import type { Meta, StoryObj } from "@storybook/react-vite";

import { VideoPreview } from ".";

const meta: Meta<typeof VideoPreview> = {
  title: "entities/VideoPreview",
  component: VideoPreview,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof VideoPreview>;

export default meta;

export const Public: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "100%" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    id: "1",
    title: "New video",
    owner: "aboba",
    createdAt: "11.11.11",
    editable: true,
    accessPublic: true,
  },
};

export const Private: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "100%" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    id: "1",
    title: "New video",
    owner: "aboba",
    createdAt: "11.11.11",
    editable: true,
    accessPublic: false,
  },
};
