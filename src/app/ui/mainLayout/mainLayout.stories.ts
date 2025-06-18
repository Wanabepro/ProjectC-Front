import type { Meta, StoryObj } from "@storybook/react-vite";

import { MainLayout } from ".";
import * as BurgerButton from "shared/burgerButton/burgerButton.stories";
import * as AuthButton from "shared/authButton/authButton.stories";
import * as Navigation from "entities/navigation/navigation.stories";

const meta: Meta<typeof MainLayout> = {
  title: "layout/MainLayout",
  component: MainLayout,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof MainLayout>;

export default meta;

export const Main: Story = {
  args: {
    appearance: AuthButton.default.args?.appearance,
    onAuthClick: AuthButton.default.args?.onClick,
    onBurgerClick: BurgerButton.default.args?.onClick,
    isNavOpen: Navigation.default.args?.isOpen,
    navClassName: Navigation.default.args?.className,
  },
};
