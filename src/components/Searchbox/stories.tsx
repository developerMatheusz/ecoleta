import type { Meta, StoryObj } from "@storybook/react";
import Searchbox from ".";

const meta: Meta<typeof Searchbox> = {
  title: "Searchbox",
  parameters: {
    backgrounds: {
      default: "light"
    }
  },
  component: Searchbox
};

export default meta;
type Story = StoryObj<typeof Searchbox>;

export const Default: Story = {
  args: {
    placeholder: "O que você procura?",
    initialValue: ""
  },
  render: (args) => <Searchbox {...args} />
};

export const WithArguments: Story = {
  args: {
    placeholder: "O que você procura?",
    initialValue: "Lorem ipsum dolor"
  },
  render: (args) => <Searchbox {...args} />
};
