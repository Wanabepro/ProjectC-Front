import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      app: "/src/app",
      shared: "/src/shared",
      widgets: "/src/widgets",
      entities: "/src/entities",
      features: "/src/features",
      pages: "/src/pages",
    },
  },
});
