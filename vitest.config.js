/// <reference types="vite/client" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    setupFiles: ["___TESTS___/setup.js"],
    include: ["___TESTS___/**/*.test.js"],
  }
})