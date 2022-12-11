import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [svgr(), dts({insertTypesEntry: true}), react()],
})
