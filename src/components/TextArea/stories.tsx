import type { Meta, StoryObj } from "@storybook/react";
import TextArea from ".";

const meta: Meta<typeof TextArea> = {
  title: "TextArea",
  parameters: {
    backgrounds: {
      default: "light"
    }
  },
  component: TextArea
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder",
    name: "content",
    initialValue: "",
    label: "Label",
    disabled: false
  },
  render: (args) => (
    <div className="w-80">
      <TextArea {...args} />
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
    typeMessage: "success"
  },
  render: (args) => (
    <div className="w-80">
      <TextArea {...args} />
    </div>
  )
};

export const WithInitialValue: Story = {
  args: {
    placeholder: "Placeholder",
    name: "content",
    initialValue:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    label: "Label",
    disabled: false,
    typeMessage: "success"
  },
  render: (args) => (
    <div className="w-80">
      <TextArea {...args} />
    </div>
  )
};
