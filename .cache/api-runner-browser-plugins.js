module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Juno","short_name":"Juno","start_url":".","background_color":"#000000","theme_color":"#000000","display":"standalone","icons":[{"src":"favicon.ico","sizes":"64x64 32x32 24x24 16x16 192x192","type":"image/x-icon"},{"src":"assets/logos/logo_512x512.png","type":"image/png","sizes":"512x512"}],"legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":null},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
