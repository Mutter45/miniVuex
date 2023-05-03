const { VueLoaderPlugin } = require('vue-loader')
const examples = [
  'cart'
]

const entry = {}
examples.forEach(function (name) {
  entry[name] = ['./examples/' + name + '/main.js']
})
module.exports = {
  mode: 'product',
  entry: entry,
  output: {
    path: __dirname,
    filename: '[name]/build.js'
  },
  devServer: {
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
    new VueLoaderPlugin()
  ]
}
