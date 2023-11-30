import { defineConfig } from "tsup"
export default defineConfig({
  entry: ["./src/index.ts"],
  clean:true,
  format: "esm",
  target: "es2022",
  external: ["axios"],
  // experimentalDts:true,
  dts:true
})
