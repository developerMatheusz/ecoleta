import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MenuWithAvatar from ".";

const meta: Meta<typeof MenuWithAvatar> = {
  title: "MenuWithAvatar",
  parameters: {
    backgrounds: {
      default: "light"
    }
  },
  component: MenuWithAvatar
};

export default meta;
type Story = StoryObj<typeof MenuWithAvatar>;

export const Default: Story = {
  render: () => <MenuWithAvatar />
};
