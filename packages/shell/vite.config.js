import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      remotes: {
        userCard: "http://localhost:4173/assets/remoteEntry.js",
        contentBar: "http://localhost:4174/assets/remoteEntry.js",
      },
      // shared: ["react", "react-dom"],
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^19.1.0",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^19.1.0",
        },
      },
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  // server: {
  //   port: 3000,
  // },
});
