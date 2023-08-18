import type { Meta, StoryObj } from "@storybook/react";
import Icon from ".";
import Profile from "../../utils/icons/Profile";

const meta: Meta<typeof Icon> = {
  title: "Icon",
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  component: Icon
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: <Profile />,
    disabled: false
  },
  argTypes: {
    icon: {
      type: "symbol"
    }
  },
  render: (args) => <Icon {...args} />
};
