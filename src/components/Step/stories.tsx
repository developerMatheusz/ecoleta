import type { Meta, StoryObj } from "@storybook/react";
import Step from ".";

const meta: Meta<typeof Step> = {
  title: "Step",
  parameters: {
    backgrounds: {
      default: "light"
    }
  },
  component: Step
};

export default meta;
type Story = StoryObj<typeof Step>;

export const Primary: Story = {
  args: {
    stepLevel: 1,
    totalSteps: 10
  },
  render: (args) => <Step {...args} />
};
