import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';
import path from 'path';

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    alias: {
      '@styles': path.resolve(__dirname, '../../src/app/styles'),
    },
    mainFiles: ['index'],
  };
}
