import type { Meta, StoryObj } from "@storybook/react";
import Menu from ".";

const meta: Meta<typeof Menu> = {
  title: "Menu",
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  component: Menu
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {
    text: "Serviços e informações do Brasil"
  },
  render: (args) => <Menu {...args} />
};
