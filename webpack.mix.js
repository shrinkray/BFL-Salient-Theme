// webpack.mix.js

let mix = require('laravel-mix');
let autoprefixer;
autoprefixer = require("autoprefixer");
let  { CleanWebpackPlugin }  = require('clean-webpack-plugin');

mix.js('src/app.js', 'dist/bfl-scripts.js')
    .setPublicPath('dist')
    .sass('src/app.scss', 'dist/bfl-styles.css', {}, [require('autoprefixer')])
    .sourceMaps()
    .browserSync({
        proxy: 'http://localhost:10029/',
        port: '10029',
    })
    .webpackConfig({
        plugins: [
            new CleanWebpackPlugin({
                dry: true,
                verbose: false,
                cleanStaleWebpackAssets: true,
                protectWebpackAssets: true,
                cleanOnceBeforeBuildPatterns: ['dist/*', '!static-files*'],
            }),
        ],
    });