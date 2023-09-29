import type { Meta, StoryObj } from "@storybook/react";
import Navbar from ".";

const meta: Meta<typeof Navbar> = {
  title: "Navbar",
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  component: Navbar
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    typeheader: "normal"
  },
  render: (args) => <Navbar {...args} />
};
