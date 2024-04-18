/// <reference types="vite/client" />
import { defineConfig } from "vite";
import { resolve } from "path";
import eslint from "vite-plugin-eslint";
import replace from "@rollup/plugin-replace";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      eslint({
        exclude: [/virtual:/, /node_modules/]
      }), 
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/app.js"),
      name: "Player",
      fileName: () => `player.js`,
    },
    commonjsOptions: {
      extensions: [".js"],
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
      plugins: [
        replace({
          "process.env.NODE_ENV": JSON.stringify("production"),
          preventAssignment: true,
        }),
      ],
    },
  },
});