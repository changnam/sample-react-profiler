/* config-overrides.js */
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config.mode = 'development';
    config.optimization.minimize = false;
  
    config.module.rules = [...config.module.rules, 
        {
            // test: /\.m?js/,
            resolve: {
              fullySpecified: false
            },
            // optimization: {
            //   minimize: false
            // },
        }
      ]

    return config;
  }