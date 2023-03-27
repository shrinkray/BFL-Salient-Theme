const mix = require('laravel-mix');




mix
    // .disableNotifications()
    .js('js/custom-scripts.js', 'dist')
    .sass('scss/bfl.scss', 'dist', {}, [
        require('autoprefixer'),
    ])
    .sourceMaps()
    .browserSync({
        proxy: 'http://localhost:10088',
        port: '10088'
    })
