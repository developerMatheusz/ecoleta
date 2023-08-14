import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from ".";

const meta: Meta<typeof Tooltip> = {
  title: "Tooltip",
  parameters: {
    backgrounds: {
      default: "light"
    }
  },
  component: Tooltip
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    typeMessage: "success"
  },
  render: (args) => (
    <div className="w-96">
      <Tooltip {...args} />
    </div>
  )
};
