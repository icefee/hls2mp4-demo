import { defineConfig } from "vite";

export default defineConfig({
    optimizeDeps: {
        exclude: ["hls2mp4"]
    }
})