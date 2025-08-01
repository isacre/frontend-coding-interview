import type { Meta, StoryObj } from "@storybook/react-vite";
import LikeButton from "../../components/photoCard/likeButton/likeButton";

const meta = {
  title: "Components/PhotoCard/LikeButton",
  component: LikeButton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LikeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
