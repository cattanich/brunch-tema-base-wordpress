// See http://brunch.io for documentation.

// exports.files = {
//   javascripts: {joinTo: 'sitio.js'},
//   stylesheets: {joinTo: 'sitio.css'}
// };

module.exports = {
    paths: {
        public: '.'
    },
    files: {
        javascripts: {
            joinTo: {
                'scripts/sitio.js': /^app/,
                'scripts/vendor.js': /^(?!app)/
            }
        },
        stylesheets: {
            joinTo: 'styles/sitio.css'
        }
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
                require('autoprefixer')(['last 8 versions']),
            ]
        }
    }
    // ,
    // npm: {
    //   enabled: true,
    //         globals: {
    //           $: 'jquery'
    //           // scrollify: 'jquery-scrollify'

    //         }
    //     }

};