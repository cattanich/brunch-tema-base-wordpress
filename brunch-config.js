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
            options: {
                parser: require('postcss-scss'),
            },
            processors: require('autoprefixer')(['last 8 versions'])
        },
        browserSync: {
            proxy: "http://localhost/wpnewparcel/",
            // logLevel: "debug"
        },
        cleancss: {
            specialComments: 0,
            removeEmpty: true
        },
        // css: {
        //     modules: true
        // },
        assetsmanager: {
            copyTo: {
                'styles/fonts': ['node_modules/@fortawesome/fontawesome-free/webfonts/*']
            }
        }



    }


};