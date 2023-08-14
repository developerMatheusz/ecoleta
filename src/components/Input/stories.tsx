import type { Meta, StoryObj } from "@storybook/react";
import Input from ".";
import Profile from "../../utils/icon/Profile";

const meta: Meta<typeof Input> = {
  title: "Input",
  parameters: {
    backgrounds: {
      default: "light"
    }
  },
  component: Input
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder",
    name: "content",
    initialValue: "",
    label: "Label",
    disabled: false,
    type: "text",
    icon: <Profile />
  },
  render: (args) => (
    <div className="w-80">
      <Input {...args} />
    </div>
  )
};

export const WithMessage: Story = {
  args: {
    placeholder: "Placeholder",
    name: "content",
    initialValue: "",
    label: "Label",
    disabled: false,
    typeMessage: "success",
    type: "text",
    icon: <Profile />
  },
  render: (args) => (
    <div className="w-80">
      <Input {...args} />
    </div>
  )
};

export const WithInitialValue: Story = {
  args: {
    placeholder: "Placeholder",
    name: "content",
    initialValue: "Lorem Ipsum is simply",
    label: "Label",
    disabled: false,
    typeMessage: "success",
    type: "text",
    icon: <Profile />
  },
  render: (args) => (
    <div className="w-80">
      <Input {...args} />
    </div>
  )
};
