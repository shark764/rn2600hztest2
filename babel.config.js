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
