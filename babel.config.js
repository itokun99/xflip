module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@core": "./src/core",
          "@core/packages": "./src/core/packages",
          "@features": "./src/features",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
