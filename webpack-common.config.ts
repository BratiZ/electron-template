import path from 'path';
import { Configuration } from 'webpack';

function srcPaths(src: string) {
    return path.join(__dirname, src);
}

const isEnvProduction = process.env.NODE_ENV === 'production';
const isEnvDevelopment = process.env.NODE_ENV === 'development';

// #region Common settings
const commonConfig: Configuration = {
    devtool: isEnvDevelopment ? 'source-map' : false,
    mode: isEnvProduction ? 'production' : 'development',
    output: { path: srcPaths('dist') },
    node: {
        __dirname: false,
        __filename: false
    },
    resolve: {
        alias: {
            _: srcPaths('src'),
            _main: srcPaths('src/main'),
            _models: srcPaths('src/models'),
            _public: srcPaths('public'),
            _renderer: srcPaths('src/renderer'),
            _utils: srcPaths('src/utils'),
        },
        extensions: ['.js', '.json', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpg|png|svg|ico|icns)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },

        ],
    },
};

export default commonConfig;
