// const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');

module.exports = {
    devServer: {
        open: true,
        host: '0.0.0.0',
        disableHostCheck: true,
        port: 3000,
        https: false,
        hotOnly: false,
    },
    outputDir: path.resolve(__dirname, 'docs'),
    publicPath: './',
    productionSourceMap: false,
    filenameHashing: false,
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置
            return {
                devtool: false,
                entry: './src/demo/app.js',
                plugins: [
                ],
                output: {
                    filename: 'index.js',
                },
            }
        } else {
            return {
                entry: './src/demo/app.js',
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            postcss: {
                test: /\.css$/,
                use: ['style-loader', 'postcss-loader'],
            }
        }
    }
}
