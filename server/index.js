import express from 'express'
import path from 'path'

import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../webpack.config.dev.js'

let app = express()

const webpackCompiler = webpack(webpackConfig)
app.use(webpackMiddleware(webpackCompiler))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(3000, () => console.log('Running on http://localhost:3000'))