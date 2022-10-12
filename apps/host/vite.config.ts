import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000,
  },
  plugins: [
    react(),
    federation({
      name: "home",
      remotes: {
        remote: "/assets/remote.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
