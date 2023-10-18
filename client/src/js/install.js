const butInstall = document.getElementById('buttonInstall');

// // Logic for installing the PWA
// // TODO: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener('beforeinstallprompt', (event) => {});

// // TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener('click', async () => {});

// // TODO: Add an handler for the `appinstalled` event
// window.addEventListener('appinstalled', (event) => {});



window.addEventListener('beforeinstallprompt', (event) => {

    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
  });

butInstall.addEventListener('click', async () => {

  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  // Show prompt
  promptEvent.prompt();

  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;

  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  // Clear prompt
  window.deferredPrompt = null;
});



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
