const path = require('path');

module.exports = {
  configureWebpack: function(config)  {
    return {
      mode: 'development',
      output: {
        globalObject: 'this',
        library: 'dummylib',
        libraryExport: 'default',
        libraryTarget: 'umd',
      }
    }
  }
};
