import type { Meta, StoryObj } from "@storybook/react";
import SelectItem from ".";

const meta: Meta<typeof SelectItem> = {
  title: "SelectItem",
  parameters: {
    backgrounds: {
      default: "light"
    }
  },
  component: SelectItem
};

export default meta;
type Story = StoryObj<typeof SelectItem>;

export const Default: Story = {
  args: {
    disabled: false,
    options: [
      {
        label: "Primeiro texto",
        value: "Primeiro texto"
      },
      {
        label: "Segundo texto",
        value: "Segundo texto"
      },
      {
        label: "Terceiro texto",
        value: "Terceiro texto"
      },
      {
        label: "Quarto texto",
        value: "Quarto texto"
      }
    ],
    typeMessage: "success"
  },
  argTypes: {
    options: {
      type: "symbol"
    }
  },
  render: (args) => (
    <div className="w-80">
      <SelectItem {...args} />
    </div>
  )
};

export const Borderless: Story = {
  args: {
    disabled: false,
    options: [
      {
        label: "Primeiro texto",
        value: "Primeiro texto"
      },
      {
        label: "Segundo texto",
        value: "Segundo texto"
      },
      {
        label: "Terceiro texto",
        value: "Terceiro texto"
      },
      {
        label: "Quarto texto",
        value: "Quarto texto"
      }
    ]
  },
  argTypes: {
    options: {
      type: "symbol"
    }
  },
  render: (args) => (
    <div className="w-80">
      <SelectItem {...args} />
    </div>
  )
};
