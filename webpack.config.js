const {
    merge
} = require('webpack-merge');
const commonConfiguration = require('./webpack/common');
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

// module.exports = {
//     plugins: [
//         new NodePolyfillPlugin()
//     ]
// }

module.exports = {
    target: 'node',
}

module.exports = (_env, {
    mode
}) => {
    const properlyConfig = require(`./webpack/${mode}`);
    const mergedConfig = merge(commonConfiguration, properlyConfig);
    return mergedConfig;
}