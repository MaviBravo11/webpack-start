const HtmlWebPackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin           = require("copy-webpack-plugin");

module.exports = {

    mode: 'development',

    output: {
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/i,  //cuando encuentre un .html
                loader: 'html-loader', //

                options: {
                    sources: false,
                    minimize: false //en true tengo el código en una linea 
                },
            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader'],

            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader']

            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Webpack APP',
            template: './src/index.html',
            /*        filename: './index.html', */
            inject: 'body'
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false

        }),
        new CopyPlugin ({
            patterns:[
             {from: 'src/assets/', to:'assets/' }
            ]
        })
    ]


}