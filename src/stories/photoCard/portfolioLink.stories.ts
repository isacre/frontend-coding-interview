import type { Meta, StoryObj } from "@storybook/react-vite";
import PortfolioLink from "../../components/photoCard/portfolioLink/portfolioLink";

const meta = {
  title: "Components/PhotoCard/PortfolioLink",
  component: PortfolioLink,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    link: {
      control: { type: "text" },
      description: "Portfolio link URL",
    },
    text: {
      control: { type: "text" },
      description: "Link text",
    },
  },
} satisfies Meta<typeof PortfolioLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    link: "https://example.com",
    text: "Portfolio",
  },
};

export const CustomText: Story = {
  args: {
    link: "https://photographer-portfolio.com",
    text: "See More Work",
  },
};
