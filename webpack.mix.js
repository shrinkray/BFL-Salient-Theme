// webpack.mix.js

let mix = require('laravel-mix');
let autoprefixer;
autoprefixer = require("autoprefixer");
let  { CleanWebpackPlugin }  = require('clean-webpack-plugin');

mix
    .js('src/app.js', 'dist').setPublicPath('dist')
    .sass('src/app.scss', 'dist', {}, [
        require('autoprefixer')
    ])
    .sourceMaps()
    .browserSync({
        proxy: 'http://localhost:10888/',
        port: '10888'
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
        ]
    }
);