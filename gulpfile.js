'use strict'
// 单独打包css
const {src, dest, series} = require('gulp')
const stylus = require('gulp-stylus')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')

// 打包默认的
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

// 打包common
function compileCommon () {
  return src('./src/styles/common/*.styl')
    .pipe(stylus())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('./lib/styles/common'))
}

// 打包common
function compileModule () {
  return src('./src/styles/modules/*.styl')
    .pipe(stylus())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('./lib/styles/modules'))
}

function copyfont () {
  return src('./src/styles/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./lib/styles/fonts'))
}

exports.build = series(compileCommon, compileModule, compile, copyfont)
