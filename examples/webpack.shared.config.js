const { VueLoaderPlugin } = require('vue-loader')

 // 导入自动生成HTMl文件的插件
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    path: process.cwd(),
    filename: 'build.js'
  },
  devServer: {
    hot: true, // 热更新开启
    historyApiFallback: true,
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.vue$/, use: ['vue-loader'] },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    // eslint-disable-next-line new-cap
    new htmlWebpackPlugin({
      template: '../cart/index.html', // 模板路径
      filename: 'index.html'// 自动生成的HTML文件的名称
    }),
    new VueLoaderPlugin()
  ]
}
