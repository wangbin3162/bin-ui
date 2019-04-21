'use strict'

const {src, dest, series} = require('gulp')
const stylus = require('gulp-stylus')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')

function compile () {
  return src('./src/*.styl')
    .pipe(stylus())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('../../lib/style'))
}

function copyfont () {
  return src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(dest('../../lib/style/fonts'))
}

exports.build = series(compile, copyfont)
