/**
 * 本地预览文档
 */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpackBaseConfig = require('./webpack.base.conf.js')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'production'
const webpackConfig = merge(webpackBaseConfig, {
  mode: process.env.NODE_ENV,
  devtool: 'eval-source-map',
  // 入口
  entry: {
    main: './examples/main.js'
  },
  // 输出
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: isProd ? '/docs/bin-ui' : '/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    alias: {
      'bin-ui': '../../src/index',
      vue: 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    host: 'localhost',
    port: 8085,
    publicPath: '/',
    open: true,
    hot: true
  },
  optimization: {
    splitChunks: {},
    minimizer: []
  },
  performance: {
    hints: false
  },
  stats: {
    children: false
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader'
          },
          {
            loader: path.resolve(__dirname, './md-loader/index.js')
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './examples/index.html',
      filename: './index.html',
      favicon: './examples/favicon.ico'
    }),
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.FAAS_ENV': JSON.stringify(process.env.FAAS_ENV)
    }),
    new webpack.LoaderOptionsPlugin({
      vue: {}
    })
  ]
})

if (isProd) {
  webpackConfig.externals = {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    'highlight.js': 'hljs'
  }
  webpackConfig.plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  )
  webpackConfig.optimization.minimizer.push(
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: false
    }),
    new OptimizeCSSAssetsPlugin({})
  )
  webpackConfig.optimization.splitChunks = {
    cacheGroups: {
      vendor: {
        test: /\/src\//,
        name: 'bin-ui',
        chunks: 'all'
      }
    }
  }
}

module.exports = webpackConfig
