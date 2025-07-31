import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{tsx,ts}"],
    setupFiles: ["./src/__tests__/testConfig.ts"],
    globals: true,
  },
});
