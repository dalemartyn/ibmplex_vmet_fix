"use strict";

const gulp = require('gulp');
const connect = require('gulp-connect');

function server() {
  return connect.server({
    host: '0.0.0.0',
    port: 4000
  });
};

exports.default = server;
