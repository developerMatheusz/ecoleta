import type { Meta, StoryObj } from "@storybook/react";
import NotificationPanel from ".";
import notificationMock from "./mock";

const meta: Meta<typeof NotificationPanel> = {
  title: "NotificationPanel",
  parameters: {
    backgrounds: {
      default: "light"
    }
  },
  component: NotificationPanel
};

export default meta;
type Story = StoryObj<typeof NotificationPanel>;

export const Default: Story = {
  args: {
    name: "Matheus Zanela",
    email: "matheuszanela@geogis.com.br",
    notification: notificationMock
  },
  argTypes: {
    notification: {
      type: "symbol"
    }
  },
  render: (args) => (
    <div className="w-[500px]">
      <NotificationPanel {...args} />
    </div>
  )
};
