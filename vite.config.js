import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/atelier-video/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        intro: resolve(__dirname, "intro/index.html"),
      },
    },
  },
});
