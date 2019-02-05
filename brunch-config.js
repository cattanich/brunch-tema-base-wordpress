// See http://brunch.io for documentation.

module.exports = {
    paths: {
        public: '.'
    },
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
            // proxy: "http://localhost/digicatt/",
            // logLevel: "debug",
            port: 8888
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
                'styles/fonts': ['node_modules/@fortawesome/fontawesome-free/webfonts/*'],
                'images': ['node_modules/preloader-js/assets/images/*']
            }
        }
    }
};