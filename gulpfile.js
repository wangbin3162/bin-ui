'use strict'
// 单独打包css
const {src, dest, series} = require('gulp')
const stylus = require('gulp-stylus')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')

function compile () {
  return src('./src/styles/*.styl')
    .pipe(stylus())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('./lib/styles'))
}

function copyfont () {
  return src('./src/styles/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./lib/styles/fonts'))
}

exports.build = series(compile, copyfont)
