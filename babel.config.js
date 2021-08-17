const path = require('path');
const pak = require('../rn-library-test-aug17/package.json');
// const pak = {
//   name: 'rn-library-test-aug17',
//   source: 'src/index',
// };

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@': './src',
            '@containers': './src/containers',
            '@components': './src/components',
            '@modules': './src/modules',
            '@styles': './src/styles',
            tests: ['./tests/'],

            // For development, we want to alias the library to the source
            [pak.name]: path.join(__dirname, '..', pak.name, pak.source),
          },
        },
      ],
      // [
      //   'babel-plugin-inline-import',
      //   {
      //     extensions: ['.svg'],
      //   },
      // ],
    ],
  };
};
