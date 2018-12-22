const path = require('path')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { preprocess } = require('preprocess')

const meta = require('./package.json');


function fillManifest (content, path) {
    return preprocess(content.toString(), {env: process.env, meta: meta}, {type: 'js'})
}

module.exports = {
    mode: 'none',
    entry: {
        background: './src/background.js',
        content: './src/content.js',
        sidebar: './src/Sidebar/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/extension')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: {
                    loader: require('styled-jsx/webpack').loader,
                    options: {
                        type: 'global'
                    }
                },
            },
            {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    resolve: {
    extensions: ['.mjs', '.js', '.jsx'],
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    alias: {
        react: path.resolve(__dirname, './node_modules/react'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom')
    }
    },
    plugins: [
        CopyWebpackPlugin([
            'src/content.css',
            { from: 'src/Sidebar/index.html', to: 'sidebar.html' },
            { from: 'icons', to: 'icons' },
            { from: 'vendor/selectorgadget_combined.*', to: 'vendor', flatten: true },
            { from: 'vendor/fontawesome', to: 'vendor/fontawesome' },
            { from: 'vendor/reset.css', to: 'vendor' },
            { from: 'manifest.json', to: 'manifest.json', transform: fillManifest },
        ]),
        new DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
}
