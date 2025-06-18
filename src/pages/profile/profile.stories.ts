import type { Meta, StoryObj } from "@storybook/react-vite";

import { Profile } from ".";

const meta: Meta<typeof Profile> = {
  title: "pages/Profile",
  component: Profile,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Profile>;

export default meta;

export const Main: Story = {};
