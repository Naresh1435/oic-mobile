// Generated using webpack-cli https://github.com/webpack/webpack-cli
//https://guitar-front-end-h43oo.ondigitalocean.app
const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

console.log(__dirname);

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const config = {
  entry: __dirname+"/src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename : '[name].bundle.js',
    publicPath :'/'
  },
  resolve : {
    roots :[path.resolve(__dirname,'src')],
    extensions : ["*",".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js",".jsx" ,".json"],
},
  
  devtool:'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,"public/index.html"),
      filename : "index.html",
      inject : 'body',
    }),
    
    
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.((js|jsx)?$)/,
        exclude : /(node_modules|bower_components)/,
        use : [
            {
            loader: "babel-loader",
                options :{
                    presets : ['@babel/preset-env','@babel/preset-react']
                },
            }
            
        ]
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.mode = "development";
  }
  return config;
};
