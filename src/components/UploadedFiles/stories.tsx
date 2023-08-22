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
    const fakeFile = new File([new Blob()], `fake_file_${i + 1}.txt`, {
      type: "text/plain",
      lastModified: Date.now()
    });

    fakeFiles.push(fakeFile);
  }
  return fakeFiles;
};

export const Default: Story = {
  args: {
    uploadedFiles: generateFakeUploadedFiles(3)
  },
  argTypes: {
    uploadedFiles: {
      type: "symbol"
    }
  },
  render: (args) => <UploadedFiles {...args} />
};
