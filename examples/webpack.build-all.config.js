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
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/dist|vue-hot-reload-api|vue-loader/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
}
