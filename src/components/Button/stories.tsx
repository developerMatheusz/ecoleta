import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";
import Profile from "../../utils/icon/Profile";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    size: "medium",
    bg: "white",
    fullWidth: false,
    minimal: false,
    icon: <Profile />,
    text: "Entrar"
  },
  argTypes: {
    icon: {
      type: "symbol"
    }
  },
  render: (args) => (
    <div className="w-44">
      <Button {...args} />
    </div>
  )
};
