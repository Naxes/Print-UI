import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import { babel, getBabelOutputPlugin } from '@rollup/plugin-babel';

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
      },
    ],
    plugins: [
      terser(),
      resolve(),
      commonjs(),
      external(),
      babel({
        exclude: 'node_modules/**',
      }),
      getBabelOutputPlugin({
        presets: ['@babel/preset-react'],
      }),
      typescript({
        tsconfig: './tsconfig.json',
      }),
    ],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
