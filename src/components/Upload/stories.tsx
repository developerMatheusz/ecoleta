import type { Meta, StoryObj } from "@storybook/react";
import Upload from ".";

const meta: Meta<typeof Upload> = {
  title: "Upload",
  parameters: {
    backgrounds: {
      default: "light"
    }
  },
  component: Upload
};

export default meta;
type Story = StoryObj<typeof Upload>;

export const Default: Story = {
  args: {
    typeMessage: "success",
    disabled: false
  },
  render: (args) => <Upload {...args} />
};

export const NoMessage: Story = {
  args: {
    disabled: false
  },
  render: (args) => <Upload {...args} />
};
