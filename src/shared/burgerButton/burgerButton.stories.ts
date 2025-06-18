import type { Meta, StoryObj } from "@storybook/react-vite";

import { BurgerButton } from ".";

const meta: Meta<typeof BurgerButton> = {
  title: "components/BurgerButton",
  component: BurgerButton,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof BurgerButton>;

export default meta;

export const Main: Story = {
  args: {
    onClick: () => {},
    isOpen: true,
  },
};
