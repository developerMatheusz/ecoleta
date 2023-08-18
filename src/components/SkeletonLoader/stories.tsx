import type { Meta, StoryObj } from "@storybook/react";
import SkeletonLoader from ".";

const meta: Meta<typeof SkeletonLoader> = {
  title: "SkeletonLoader",
  parameters: {
    backgrounds: {
      default: "light"
    }
  },
  component: SkeletonLoader
};

export default meta;
type Story = StoryObj<typeof SkeletonLoader>;

export const Default: Story = {
  render: () => <SkeletonLoader />
};
