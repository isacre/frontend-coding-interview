import type { Meta, StoryObj } from "@storybook/react-vite";
import Details from "../../components/photoCard/details/details";

const meta = {
  title: "Components/PhotoCard/Details",
  component: Details,
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
    actionComponent: {
      control: { type: "text" },
      description: "Optional action component",
    },
  },
} satisfies Meta<typeof Details>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Beautiful Landscape",
    alt: "A stunning landscape with mountains and lake",
    avg_color: "#4A90E2",
  },
};
