import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";
import Profile from "../../utils/icons/Profile";

const meta: Meta<typeof Button> = {
  title: "Button",
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const WithIcon: Story = {
  args: {
    size: "medium",
    bg: "white",
    fullWidth: false,
    minimal: false,
    icon: <Profile />,
    text: "Entrar",
    disabled: false,
    loading: false
  },
  argTypes: {
    icon: {
      type: "symbol"
    }
  },
  render: (args) => (
    <div className="w-56">
      <Button {...args} />
    </div>
  )
};

export const Default: Story = {
  args: {
    size: "medium",
    bg: "white",
    fullWidth: false,
    minimal: false,
    text: "Entrar",
    disabled: false,
    loading: false
  },
  argTypes: {
    icon: {
      type: "symbol"
    }
  },
  render: (args) => (
    <div className="w-56">
      <Button {...args} />
    </div>
  )
};
