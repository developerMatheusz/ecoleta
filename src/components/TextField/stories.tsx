import type { Meta, StoryObj } from "@storybook/react";
import TextField from ".";
import Profile from "../../utils/icons/Profile";

const meta: Meta<typeof TextField> = {
  title: "TextField",
  parameters: {
    backgrounds: {
      default: "light"
    }
  },
  component: TextField
};

export default meta;
type Story = StoryObj<typeof TextField>;

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
  argTypes: {
    icon: {
      type: "symbol"
    }
  },
  render: (args) => (
    <div className="w-80">
      <TextField {...args} />
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
  argTypes: {
    icon: {
      type: "symbol"
    }
  },
  render: (args) => (
    <div className="w-80">
      <TextField {...args} />
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
  argTypes: {
    icon: {
      type: "symbol"
    }
  },
  render: (args) => (
    <div className="w-80">
      <TextField {...args} />
    </div>
  )
};
