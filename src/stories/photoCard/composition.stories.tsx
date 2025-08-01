import type { Meta, StoryObj } from "@storybook/react-vite";
import PhotoCardComposition from "./photoCardComposition";
const meta = {
  title: "Components/PhotoCard/Composition",
  component: PhotoCardComposition,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    name: {
      control: { type: "text" },
      description: "Photo name",
    },
    alt: {
      control: { type: "text" },
      description: "Photo description",
    },
    avg_color: {
      control: { type: "color" },
      description: "Average color of the photo",
    },
    link: {
      control: { type: "text" },
      description: "Link to the photo",
    },
    text: {
      control: { type: "text" },
      description: "Text to display in the portfolio link",
    },
    url: {
      control: { type: "text" },
      description: "URL of the photo",
    },
  },
} satisfies Meta<typeof PhotoCardComposition>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Beautiful Landscape",
    alt: "A stunning landscape with mountains and lake",
    avg_color: "#4A90E2",
    link: "https://www.pexels.com/pt-br/foto/paisagem-de-montanhas-e-lago-1643383/",
    text: "Portfolio",
    url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
  },
};
