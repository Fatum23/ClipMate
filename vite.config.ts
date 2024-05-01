import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [react()],

  build: {
    rollupOptions: {
      input: {
        main: "./src/app/main.html",
      },
    },
  },

  resolve: {
    alias: [
      {
        find: "@app",
        replacement: fileURLToPath(new URL("./src/app/", import.meta.url)),
      },
      {
        find: "@pages",
        replacement: fileURLToPath(new URL("./src/pages/", import.meta.url)),
      },
      {
        find: "@widgets",
        replacement: fileURLToPath(new URL("./src/widgets/", import.meta.url)),
      },
      {
        find: "@entities",
        replacement: fileURLToPath(new URL("./src/entities/", import.meta.url)),
      },
      {
        find: "@features",
        replacement: fileURLToPath(new URL("./src/features/", import.meta.url)),
      },
      {
        find: "@types",
        replacement: fileURLToPath(
          new URL("./src/shared/types/", import.meta.url)
        ),
      },
      {
        find: "@utils",
        replacement: fileURLToPath(
          new URL("./src/shared/utils/", import.meta.url)
        ),
      },
    ],
  },

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}));
