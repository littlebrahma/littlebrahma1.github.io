module.exports = function () {

var root = './';
 var nodeModules = 'node_modules';
var source='src';
var assets='assets';
var temp='tmp';
 var config = {

alljs: [
      './assets/*.js'
    ],
     temp:temp,
     build: './src/assets',
     source: source,
     css: assets + '/css/',
     fonts: assets + '/fonts/*.*',
     html: source + '/**/*.html',
     images: assets + '/images/**/**/**/*.*',
     index: source + '/index.html',
     sass: assets + '/_sass/*.scss',
     js:assets + '/js',
    /**
     * browser sync
     */
    browserReloadDelay: 1000,
      packages: [
      './package.json'
    ],
    deploy:'./_site'
 }

 return config;

}