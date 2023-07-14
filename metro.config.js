// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const exclusionList = require('metro-config/src/defaults/exclusionList');

const config = getDefaultConfig(__dirname);
config.resolver.blacklistRE = exclusionList([
    /#current-cloud-backend\/.*/,
    /amplify\/backend\/function\/coreResolver\/ts\/.*/,
]);
config.resolver.assetExts = [...config.resolver.assetExts, 'ttf', 'otf'],

module.exports = config;
