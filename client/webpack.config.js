const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      // set the main an install locations
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      // set the filename and path of the output
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        // set index.html as the template and the title
        template: './index.html',
        title: 'Finesse: The Text Editor'
      }),

      new InjectManifest({
        // set the source and destination of the service worker
        swSrc: './src-sw.js',
        swDest: 'src-sw.js'
      }),

      new WebpackPwaManifest({
        // provide information about the application
        fingerpringts: false,
        inject: true,
        name: 'Finesse: The Text Editor',
        short_name: 'Finesse',
        description: 'An Awesome Text Editor',
        background_color: '#DCEDFF',
        theme_color: '#EB5160',
        start_url: '/',
        publicPath: '/',
        icons: [
          {
            // create images of logo.png with the specified sizes to the destination of assets
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
        },
        ],
      }),

    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            // use babel loader to use ES6
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },

      ],
    },
  };
};

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackPwaManifest = require('webpack-pwa-manifest');
// const path = require('path');
// const { InjectManifest } = require('workbox-webpack-plugin');

// module.exports = () => {
//   return {
//     mode: 'development',
//     entry: {
//       main: './src/js/index.js',
//       install: './src/js/install.js'
//     },
//     output: {
//       filename: '[name].bundle.js',
//       path: path.resolve(__dirname, 'dist'),
//     },
//     plugins: [
//       new HtmlWebpackPlugin({
//         template: './index.html',
//         title: 'J.A.T.E'
//       }),
//       new InjectManifest({
//         swSrc: './src-sw.js',
//         swDest: 'src-sw.js',
//       }),
// new WebpackPwaManifest({
//         fingerprints: false,
//         inject: true,
//         name: 'Just Another Text Editor',
//         short_name: 'J.A.T.E',
//         description: 'Takes notes with JavaScript syntax highlighting!',
//         background_color: '#225ca3',
//         theme_color: '#225ca3',
//         start_url: '/',
//         publicPath: '/',
//         icons: [
//           {
//             src: path.resolve('src/images/logo.png'),
//             sizes: [96, 128, 192, 256, 384, 512],
//             destination: path.join('assets', 'icons'),
//           },
//         ],
//       }),
//     ],
// module: {
//       rules: [
//         {
//           test: /\.css$/i,
//           use: ['style-loader', 'css-loader'],
//         },
//         {
//           test: /\.m?js$/,
//           exclude: /node_modules/,
//           use: {
//             loader: 'babel-loader',
//             options: {
//               presets: ['@babel/preset-env'],
//               plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
//             },
//           },
//         },
//       ],
//     },
//   };
// };
