const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    mode: "development",
    entry: {
        "index": path.resolve(__dirname + '/src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[hash:8].js"
    },
    devServer: {

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    // placeholder 占位符
                    name: '[name]_[hash].[ext]',
                    outputPath: 'images/',
                    limit: 2048 //2kb
                }
            },
            {
                // loader执行顺序是从下到上 从右到左
                test: /\.scss$/,
                use: [
                    'style-loader', //负责挂载head部分
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2, //保证scss里面引入其他的scss 都会走底下的2个loader 保证js和scss文件里面引用 都走下面2个文件
                            // modules: true
                        }
                    },
                    'sass-loader', //翻译scss语法
                    'postcss-loader' //添加兼容性厂商前缀
                ]
            },
            {
                test: /\.(eot|ttf|svg|woff)$/,
                use: [
                    {
                        loader: 'file-loader', //单纯的转移字体文件夹到dist目录
                        options: {
                            outputPath: './font/',
                        }
                     }
                ]
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new CleanWebpackPlugin()
    ]
}
