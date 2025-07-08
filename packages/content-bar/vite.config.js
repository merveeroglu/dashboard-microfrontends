import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "contentBar",
      filename: "remoteEntry.js",
      exposes: {
        "./ContentBar": "./src/components/ContentBar.jsx",
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
    outDir: "dist",
    minify: false,
  },
  // server: {
  //   port: 3002,
  // },
});
