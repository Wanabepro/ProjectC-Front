import type { Meta, StoryObj } from "@storybook/react-vite";

import { FormButton } from ".";

const meta: Meta<typeof FormButton> = {
  title: "components/FormButton",
  component: FormButton,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof FormButton>;

export default meta;

export const Default: Story = {
  args: {
    text: "text",
    onClick: () => {},
  },
};
export const Disabled: Story = {
  args: {
    text: "text",
    disabled: true,
    onClick: () => {},
  },
};
