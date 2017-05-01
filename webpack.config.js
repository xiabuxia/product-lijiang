
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:{ 
    a:'./src/js/index.js'
  },
  output: {
    filename: './dist/js/bundle.js',
  },
  module: {
    loaders: [{ 
      test: /\.js$/, 
      exclude: /node_modules/, 
      loader: "babel-loader",
      query: {
        presets: ['latest']
      },
    },
    {test: /\.css$/,loader: 'style-loader!css-loader'},
    {
      test: /\.(png|jpg|gif)$/i,
      loader: 'url-loader?limit=4192&name=dist/images/[hash:5].[name].[ext]',

    },
    {
      test: /\.html$/,
      loader: 'html-loader'
    }
  ]
}

}