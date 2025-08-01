import type { Meta, StoryObj } from "@storybook/react-vite";
import LogoAndTitle from "../../../components/page/logoAndTitle";

const meta = {
  title: "Components/Page/LogoAndTitle",
  component: LogoAndTitle,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "text" },
      description: "Size of the logo and title container",
    },
    title: {
      control: { type: "text" },
      description: "Title text to display",
    },
    alignItems: {
      control: { type: "select" },
      options: ["center", "flex-start", "flex-end"],
      description: "Alignment of the logo and title",
    },
  },
} satisfies Meta<typeof LogoAndTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Clever Real Estate",
    alignItems: "center",
    size: "75px",
  },
};

export const LargeSize: Story = {
  args: {
    title: "Clever Real Estate",
    alignItems: "center",
    size: "100px",
  },
};

export const LeftAligned: Story = {
  args: {
    title: "Clever Real Estate",
    alignItems: "flex-start",
    size: "75px",
  },
};

export const CustomTitle: Story = {
  args: {
    title: "Your Real Estate Partner",
    alignItems: "center",
    size: "75px",
  },
};
