import type { Meta, StoryObj } from "@storybook/react";
import TagMessage from ".";

const meta: Meta<typeof TagMessage> = {
  title: "TagMessage",
  parameters: {
    backgrounds: {
      default: "light"
    }
  },
  component: TagMessage
};

export default meta;
type Story = StoryObj<typeof TagMessage>;

export const Primary: Story = {
  args: {
    typeMessage: "success"
  },
  render: (args) => (
    <div>
      <TagMessage {...args} />
    </div>
  )
};
