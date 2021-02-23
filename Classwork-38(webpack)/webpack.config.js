const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const pages = ["index", "index2", "index3", "index4"];

const getHtmlPlugins = (pages) => {
  return pages.map(
    (page) =>
      new HtmlWebpackPlugin({
        filename: `${page}.html`,
        template: `./${page}.html`,
      })
  );
};

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "./[name].bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|otf|jpg|jpeg)$/,
        use: "url-loader?limit=100000",
      },
    ],
  },
  plugins: getHtmlPlugins(pages),
};
