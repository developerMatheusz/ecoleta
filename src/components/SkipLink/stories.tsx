import type { Meta, StoryObj } from "@storybook/react";
import SkipLink from ".";

const meta: Meta<typeof SkipLink> = {
  title: "SkipLink",
  parameters: {
    backgrounds: {
      default: "light"
    }
  },
  component: SkipLink
};

export default meta;
type Story = StoryObj<typeof SkipLink>;

export const Primary: Story = {
  render: () => <SkipLink />
};
