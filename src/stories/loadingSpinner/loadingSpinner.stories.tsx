import type { Meta, StoryObj } from "@storybook/react-vite";
import LoadingSpinner from "../../components/loadingSpinner";

const meta = {
  title: "Components/LoadingSpinner",
  component: LoadingSpinner,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InContainer: Story = {
  render: () => {
    return (
      <div
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <LoadingSpinner />
      </div>
    );
  },
};
