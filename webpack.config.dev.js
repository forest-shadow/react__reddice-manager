import path from 'path'

export default {
  devtools: 'eval-source-map',
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    path: path.resolve(__dirname, 'server'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'client'),
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  mode: 'development'
}