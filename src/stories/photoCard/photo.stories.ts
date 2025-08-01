import type { Meta, StoryObj } from "@storybook/react-vite";
import Photo from "../../components/photoCard/photo/photo";

const meta = {
  title: "Components/PhotoCard/Photo",
  component: Photo,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    url: {
      control: { type: "text" },
      description: "Image URL",
    },
    alt: {
      control: { type: "text" },
      description: "Image alt text",
    },
    height: {
      control: { type: "number" },
      description: "Image height",
    },
    width: {
      control: { type: "number" },
      description: "Image width",
    },
  },
} satisfies Meta<typeof Photo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    alt: "Beautiful landscape",
    height: 75,
    width: 75,
  },
};

export const LargeSize: Story = {
  args: {
    url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    alt: "Beautiful landscape",
    height: 150,
    width: 150,
  },
};

export const InvalidUrl: Story = {
  args: {
    url: "https://invalid-url-that-will-fail.com/image.jpg",
    alt: "This will show error state",
  },
};
