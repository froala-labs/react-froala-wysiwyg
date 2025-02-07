var webpack = require("webpack");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    basic: './src/basic.jsx',
    edit_inline: './src/edit_inline.jsx',
    full_editor: './src/full_editor.jsx',
    two_way_binding: './src/two_way_binding.jsx',
    manual_initialization: './src/manual_initialization.jsx',
    init_on_image: './src/init_on_image.jsx',
    init_on_button: './src/init_on_button.jsx',
    init_on_link: './src/init_on_link.jsx',
    init_on_input: './src/init_on_input.jsx',
    custombutton: './src/custombutton.jsx'
  },

  optimization: {
    concatenateModules: false
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
              presets: [
                ['@babel/preset-env', {
                  'targets': {
                    "ie": "11"
                  },
                  "corejs": 3,
                  "useBuiltIns": "entry"
                }],
                '@babel/preset-react']
          }
        }
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: "file-loader"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },

  resolve: {
    alias: {
      "react-froala-wysiwyg": '../../dist'
    },
    modules: ['node_modules']
  },

  output: {
    path: __dirname + '/dist/',
    filename: '[name].js',
    publicPath: '/'
  },

  plugins: [
    new webpack.ProvidePlugin({

    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: './src/index.html' },
        { from: './src/image.jpg' }
      ]
    })
  ]
};