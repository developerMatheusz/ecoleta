import type { Meta, StoryObj } from "@storybook/react";
import CookieBar from ".";

const meta: Meta<typeof CookieBar> = {
  title: "CookieBar",
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  component: CookieBar
};

export default meta;
type Story = StoryObj<typeof CookieBar>;

export const Default: Story = {
  args: {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.`,
    loading: false
  },
  render: (args) => <CookieBar {...args} />
};

export const WithLoading: Story = {
  args: {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release
          of Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including versions
          of Lorem Ipsum.`,
    loading: true
  },
  render: (args) => <CookieBar {...args} />
};
