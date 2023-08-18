import type { Meta, StoryObj } from "@storybook/react";
import Spinner from ".";

const meta: Meta<typeof Spinner> = {
  title: "Spinner",
  parameters: {
    backgrounds: {
      default: "light"
    }
  },
  component: Spinner
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {
  args: {
    bg: "blue"
  },
  render: (args) => <Spinner {...args} />
};
