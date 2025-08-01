import type { Meta, StoryObj } from "@storybook/react-vite";
import FormField from "../../../components/inputs/textInput/textInput";
import "../../../index.css";
const meta = {
  title: "Components/Inputs/TextInput",
  component: FormField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: { type: "text" },
      description: "Label text for the input field",
    },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url"],
      description: "Input type",
    },
    id: {
      control: { type: "text" },
      description: "Unique identifier for the input field",
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text",
    },
    actionComponent: {
      control: false,
      description: "Action component to display",
    },
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Email",
    type: "email",
    id: "email",
    placeholder: "Enter your email",
  },
};

export const Password: Story = {
  args: {
    title: "Password",
    type: "password",
    id: "password",
    placeholder: "Enter your password",
  },
};

export const WithActionComponent: Story = {
  args: {
    title: "Email",
    type: "email",
    id: "email",
    placeholder: "Enter your email",
    actionComponent: <button type="button">Forgot Password ?</button>,
  },
};
