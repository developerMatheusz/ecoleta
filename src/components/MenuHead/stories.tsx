import type { Meta, StoryObj } from "@storybook/react";
import MenuHead from ".";

const meta: Meta<typeof MenuHead> = {
  title: "MenuHead",
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  component: MenuHead
};

export default meta;
type Story = StoryObj<typeof MenuHead>;

export const Default: Story = {
  args: {
    typeMessageFeedback: "border-red-600",
    isOpen: false,
    disabled: false
  },
  argTypes: {
    typeMessageFeedback: {
      type: "symbol"
    }
  },
  render: (args) => <MenuHead {...args} />
};
