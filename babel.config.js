module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@core": "./src/core",
          "@features": "./src/features",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
