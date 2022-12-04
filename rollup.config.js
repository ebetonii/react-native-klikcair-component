import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";

const packageJSON = require("./package.json");

export default {
  input: "src/index.ts",
  external: ["react", "react-native"],
  output: [
    {
      file: packageJSON.main,
      format: "cjs",
      sourcemap: true,
      name: "react-lib",
    },
    {
      file: packageJSON.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    postcss(),
    terser(),
  ],
};
