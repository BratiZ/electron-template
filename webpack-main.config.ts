import commonConfig from './webpack-common.config';

const mainConfig = {
    ...commonConfig,
    entry: './src/main/main.ts',
    target: 'electron-main',
    output: {
        filename: 'main.bundle.js',
    },
    plugins: []
}

export default mainConfig;
