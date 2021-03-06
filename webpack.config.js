// this file is run with npm run build
// it uses babel to compile everything in client/src into bundle.js
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './react-client/src'),
  output: {
    path: path.resolve(__dirname, './react-client/dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js[x]?/,
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
