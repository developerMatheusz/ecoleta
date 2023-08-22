import type { Meta, StoryObj } from "@storybook/react";
import Label from ".";

const meta: Meta<typeof Label> = {
  title: "Label",
  parameters: {
    backgrounds: {
      default: "light"
    }
  },
  component: Label
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    name: "content",
    disabled: false,
    label: "Label"
  },
  render: (args) => <Label {...args} />
};
