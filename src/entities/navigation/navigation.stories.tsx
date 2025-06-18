import type { Meta, StoryObj } from "@storybook/react-vite";

import { Navigation } from ".";

const meta: Meta<typeof Navigation> = {
  title: "entities/Navigation",
  component: Navigation,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Navigation>;

export default meta;

export const Main: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "300px", height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    isOpen: true,
    className: "",
  },
};
