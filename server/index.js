import express from 'express'
import path from 'path'

import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../webpack.config.dev.js'
import webpackHotMiddleware from 'webpack-hot-middleware'

let app = express()

const webpackCompiler = webpack(webpackConfig)
app.use(webpackMiddleware(webpackCompiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}))
app.use(webpackHotMiddleware(webpackCompiler))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(3000, () => console.log('Running on http://localhost:3000'))