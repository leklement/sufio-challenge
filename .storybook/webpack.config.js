const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('ts-loader'),
    // options: {
    //   presets: [['react-app', { flow: false, typescript: true }]],
    // },
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.plugins = [
    new TsconfigPathsPlugin({configFile: path.resolve(__dirname, 'tsconfig.json')})
  ];
  return config;
};