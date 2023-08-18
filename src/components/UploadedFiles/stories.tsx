import type { Meta, StoryObj } from "@storybook/react";
import UploadedFiles from ".";

const meta: Meta<typeof UploadedFiles> = {
  title: "UploadedFiles",
  parameters: {
    backgrounds: {
      default: "light"
    }
  },
  component: UploadedFiles
};

export default meta;
type Story = StoryObj<typeof UploadedFiles>;

const generateFakeUploadedFiles = (count: number): File[] => {
  const fakeFiles: File[] = [];
  for (let i = 0; i < count; i++) {
    fakeFiles.push({
      name: `fake_file_${i + 1}.txt`,
      size: Math.random() * (5 * 1024 * 1024),
      lastModified: Date.now(),
      webkitRelativePath: "",
      type: "text/plain"
    });
  }
  return fakeFiles;
};

export const Default: Story = {
  args: {
    uploadedFiles: generateFakeUploadedFiles(3)
  },
  render: (args) => <UploadedFiles {...args} />
};
