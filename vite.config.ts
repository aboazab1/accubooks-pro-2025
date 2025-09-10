import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

/**
 * AccuBooks Pro 2025 - Vite Configuration
 * 
 * Professional accounting management system
 * Build configuration for React + TypeScript + Vite
 * 
 * Created by: Abdelrahman Adel Alazab
 * Email: abdelrahmanalazab4@gmail.com
 * Phone: 0573532943
 * Location: Riyadh, Saudi Arabia
 * 
 * © 2025 AccuBooks Pro - All Rights Reserved
 */

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
