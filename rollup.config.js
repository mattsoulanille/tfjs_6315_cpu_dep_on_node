import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import sourcemaps from 'rollup-plugin-sourcemaps';
import css from "rollup-plugin-import-css";
import serve from 'rollup-plugin-serve';

export default {
  input: 'index.ts',
  output: {
    file: 'index.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    nodeResolve({browser: true}),
    commonjs(),
    typescript({
      compilerOptions: {
        sourceMap: true,
      }
    }),
    sourcemaps(),
    css(),
    serve({
      contentBase: '.',
      open: true,
    }),
  ],
};
