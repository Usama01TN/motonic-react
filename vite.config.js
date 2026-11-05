import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    // keep built JS/CSS apart from the template images in public/assets
    build: { assetsDir: "static" },
});
