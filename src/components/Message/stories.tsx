import type { Meta, StoryObj } from "@storybook/react";
import Message from ".";

const meta: Meta<typeof Message> = {
  title: "Message",
  parameters: {
    backgrounds: {
      default: "light"
    }
  },
  component: Message
};

export default meta;
type Story = StoryObj<typeof Message>;

export const Primary: Story = {
  args: {
    typeMessage: "success"
  },
  render: (args) => <Message {...args} />
};
