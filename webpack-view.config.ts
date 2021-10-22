import path from 'path';
import commonConfig from './webpack-common.config';
import { Configuration, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const rendererConfig: Configuration = {
    ...commonConfig,
    entry: './src/view/renderer.tsx',
    target: 'electron-renderer',
    output: {
        ...commonConfig.output,
        filename: 'renderer.bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
        }),
        new DefinePlugin({
                global: {
                    GENTLY: false,
                },
            }
        )
    ],
}

export default rendererConfig;

