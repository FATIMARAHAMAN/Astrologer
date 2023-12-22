const path = require('path');

module.exports = {
  mode: "development",
  resolve: {
    fallback: {
      "querystring": require.resolve("querystring-es3"),
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "util": require.resolve("util/"),
      "buffer": require.resolve("buffer/"),
      "assert": require.resolve("assert/"),
      fs: false,
      async_hooks: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
