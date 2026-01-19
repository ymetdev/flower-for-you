import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    proxy: {
      // เมื่อคุณเรียก fetch('/api/...') ใน localhost
      // Vite จะส่งคำขอไปที่ Server ปลายทางให้โดยอัตโนมัติ
      "/api": {
        target: "http://72.62.243.238:5000",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''), // ปลดคอมเมนต์ถ้าต้องการตัดคำว่า /api ออกก่อนส่งไป server
      },
    },
  },
});
