// vite.config.ts
import { defineConfig } from "file:///C:/Users/Kristian/Desktop/kanban/kanban-boards/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Kristian/Desktop/kanban/kanban-boards/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///C:/Users/Kristian/Desktop/kanban/kanban-boards/node_modules/vite-plugin-svgr/dist/index.mjs";
import dts from "file:///C:/Users/Kristian/Desktop/kanban/kanban-boards/node_modules/vite-plugin-dts/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [svgr(), dts({ insertTypesEntry: true }), react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxLcmlzdGlhblxcXFxEZXNrdG9wXFxcXGthbmJhblxcXFxrYW5iYW4tYm9hcmRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxLcmlzdGlhblxcXFxEZXNrdG9wXFxcXGthbmJhblxcXFxrYW5iYW4tYm9hcmRzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9LcmlzdGlhbi9EZXNrdG9wL2thbmJhbi9rYW5iYW4tYm9hcmRzL3ZpdGUuY29uZmlnLnRzXCI7XHJcbi8vIEB0cy1ub2NoZWNrXHJcbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwidml0ZXN0XCIgLz5cclxuXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCJcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiXHJcbmltcG9ydCBzdmdyIGZyb20gXCJ2aXRlLXBsdWdpbi1zdmdyXCJcclxuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW3N2Z3IoKSwgZHRzKHtpbnNlcnRUeXBlc0VudHJ5OiB0cnVlfSksIHJlYWN0KCldLFxyXG4gIHRlc3Q6IHtcclxuICAgIGdsb2JhbHM6IHRydWUsXHJcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcclxuICAgIHNldHVwRmlsZXM6ICcuL3NldHVwVGVzdHMudHMnXHJcbiAgfSwgXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFJQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sU0FBUztBQUVoQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksRUFBQyxrQkFBa0IsS0FBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQUEsRUFDeEQsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsWUFBWTtBQUFBLEVBQ2Q7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
