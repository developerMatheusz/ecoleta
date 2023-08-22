import type { Meta, StoryObj } from "@storybook/react";
import Modal from ".";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  parameters: {
    backgrounds: {
      default: "light"
    }
  },
  component: Modal
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    title: "Título",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.`
  },
  render: (args) => (
    <div className="w-[500px]">
      <Modal {...args} />
    </div>
  )
};
