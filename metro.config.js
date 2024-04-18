const { getDefaultConfig } = require('expo/metro-config');

const deafultconfig = getDefaultConfig(__dirname);
deafultconfig.resolver.assetExts.push('cjs')

module.exports = deafultconfig;
