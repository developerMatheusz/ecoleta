import type { Meta, StoryObj } from "@storybook/react";
import Notification from ".";

const meta: Meta<typeof Notification> = {
  title: "Notification",
  parameters: {
    backgrounds: {
      default: "light"
    }
  },
  component: Notification
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  args: {
    title: "Título",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.`,
    date: new Date()
  },
  render: (args) => (
    <div className="w-[500px]">
      <Notification {...args} />
    </div>
  )
};

export const PastDate: Story = {
  args: {
    title: "Título",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.`,
    date: new Date("2022-04-25T12:30:00")
  },
  render: (args) => (
    <div className="w-[500px]">
      <Notification {...args} />
    </div>
  )
};
