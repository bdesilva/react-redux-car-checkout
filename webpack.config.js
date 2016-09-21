var path = require('path'),
  webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
  public: path.join(__dirname, 'public')
};

module.exports = {
  cache: true,
  debug: true,
  devtool: 'eval-source-map',
  entry: ['babel-polyfill', './src/entry-point.js'],
  output: {
    path: PATHS.build,
    filename: 'build.min.js',
    publicPath: PATHS.public
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      include: [
        path.resolve(__dirname, 'src')
      ],
      test: /\.(js|jsx|es6)$/,
      exclude: /(node_modules|bower_components)/,
      query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'stage-0', 'react']
      }
    }, , {
      test: /\.json?$/,
      loader: 'json-loader'
    },{
      include: [
        path.resolve(__dirname, 'styles')
      ],
      test: /\.css$/,
      loader: 'style-loader'
    }, {
      include: [
        path.resolve(__dirname, 'styles')
      ],
      test: /\.css$/,
      loader: 'css-loader',
      query: {
        modules: true,
        localIdentName: '[name]__[local]___[hash:base64:5]'
      }
    }]
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.jsx', '.json', '.css']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('"production"')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
};