<<<<<<< HEAD
// const { getDefaultConfig } = require('expo/metro-config');
// const { mergeConfig } = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('@react-native/metro-config').MetroConfig}
//  */
// const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);
const {getDefaultConfig} = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Add these lines
defaultConfig.resolver.assetExts.push('cjs');
defaultConfig.resolver.unstable_enablePackageExports = false;

module.exports = defaultConfig;
=======
const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
>>>>>>> 549d4bc3353444a650e663d07d2044e18c6beabd
