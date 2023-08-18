import type { Meta, StoryObj } from "@storybook/react";
import ItemMenu from ".";

const meta: Meta<typeof ItemMenu> = {
  title: "ItemMenu",
  parameters: {
    backgrounds: {
      default: "light"
    }
  },
  component: ItemMenu
};

export default meta;
type Story = StoryObj<typeof ItemMenu>;

export const Default: Story = {
  args: {
    typeItem: "selectOne",
    values: ["Primeiro texto"],
    option: {
      label: "Primeiro texto",
      value: "Primeiro texto"
    },
    disabled: false,
    message: "Selecionar todos",
    selectAll: true
  },
  argTypes: {
    values: {
      type: "symbol"
    },
    option: {
      type: "symbol"
    },
    selectAll: {
      type: "symbol"
    }
  },
  render: (args) => <ItemMenu {...args} />
};
