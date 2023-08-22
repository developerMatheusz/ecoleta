import type { Meta, StoryObj } from "@storybook/react";
import Avatar from ".";

const meta: Meta<typeof Avatar> = {
  title: "Avatar",
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  component: Avatar
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    size: "medium"
  },
  render: (args) => <Avatar {...args} />
};
