import type { Meta, StoryObj } from "@storybook/react";
import Breadcrump from ".";
import itemsMock from "./mock";

const meta: Meta<typeof Breadcrump> = {
  title: "Breadcrump",
  parameters: {
    backgrounds: {
      default: "light"
    }
  },
  component: Breadcrump
};

export default meta;
type Story = StoryObj<typeof Breadcrump>;

export const Default: Story = {
  args: {
    items: itemsMock
  },
  render: (args) => <Breadcrump {...args} />
};
