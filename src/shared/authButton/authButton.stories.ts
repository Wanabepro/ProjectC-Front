import type { Meta, StoryObj } from "@storybook/react-vite";

import { AuthButton } from ".";

const meta: Meta<typeof AuthButton> = {
  title: "components/AuthButton",
  component: AuthButton,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof AuthButton>;

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
