import type { Config } from 'payload/config';
import type { Configuration as WebpackConfig } from 'webpack';
import type { PluginOptions } from './types';
interface Args {
    config: Config;
    options: PluginOptions;
}
export declare const extendWebpackConfig: ({ config, options }: Args) => (webpackConfig: WebpackConfig) => WebpackConfig;
export {};
