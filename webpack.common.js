const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    another: "./src/js/another.js",
    tooltip: "./src/js/tooltip.js",
    
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: {
            list: [
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-gallery-src",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: [
              '**/*.DS_Store'
            ],
          },
        },
      ],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index", "tooltip"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/another.html",
      inject: true,
      chunks: ["another"],
      filename: "another.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-poziome.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-poziome.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe16mm.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-aluminiowe16mm.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety.html",
      inject: true,
      chunks: ["index"],
      filename: "rolety.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-panelowe.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-panelowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe16-uni.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-aluminiowe16-uni.html",
    }),
    
    
    
    
  ],
};
