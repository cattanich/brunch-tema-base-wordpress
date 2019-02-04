// See http://brunch.io for documentation.

// exports.files = {
//   javascripts: {joinTo: 'sitio.js'},
//   stylesheets: {joinTo: 'sitio.css'}
// };

module.exports = {
    paths: {
        public: '.'
    },
    // npm: {
    //     styles: {
    //         slick: ["slick/slick.css"]
    //     },
    // },
    files: {
        javascripts: {
            joinTo: {
                'scripts/vendor.js': /^node_modules/,
                'scripts/sitio.js': /^app/
            }
        },
        stylesheets: {
            joinTo: {
                // "styles/sitio.css": /^app/,
                // "styles/vendor.css": /^(?!app)/
                "styles/sitio.css": /sitio.scss/,
                "styles/vendor.css": /vendor.scss/
            }
        },
    },
    modules: {
        autoRequire: {
            // outputFileName : [ entryModule ]
            'scripts/sitio.js': ['initialize']
        }
    },
    plugins: {
        postcss: {
            processors: [
                require('autoprefixer')(['last 5 versions']),
            ]
        },
        css: {
            modules: true
        },
        assetsmanager: {
            copyTo: {
                'styles/fonts': ['node_modules/@fortawesome/fontawesome-free/webfonts/*']
            }
        }



    }


};