import type { Meta, StoryObj } from "@storybook/react-vite";

import { Main } from ".";

const meta: Meta<typeof Main> = {
  title: "pages/Main",
  component: Main,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Main>;

export default meta;

export const Login: Story = {
  args: {
    appearance: "login",
    onClick: () => {},
  },
};
export const Logout: Story = {
  args: {
    appearance: "logout",
    onClick: () => {},
  },
};
