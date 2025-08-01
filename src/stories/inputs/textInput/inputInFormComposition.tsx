import React from "react";
import FormField from "../../../components/inputs/textInputWithLabel/textInput";
import Button from "../../../components/button";

export const Form: React.FC = () => {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "23px",
        width: "320px",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        window.alert("Form submitted");
      }}
    >
      <FormField
        title="Email"
        type="email"
        id="email"
        placeholder="Enter your email"
        required
      />
      <FormField
        title="Password"
        type="password"
        id="password"
        placeholder="Enter your password"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
