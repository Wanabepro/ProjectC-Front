import type { Meta, StoryObj } from "@storybook/react-vite";

import { UploadVideo } from ".";

const meta: Meta<typeof UploadVideo> = {
  title: "features/UploadVideo",
  component: UploadVideo,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof UploadVideo>;

export default meta;

export const Main: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "100vw", height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
};
