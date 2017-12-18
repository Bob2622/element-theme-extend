const et = require('../index.js');
const shell = require('shelljs');
shell.exec('../bin/element-theme -i');

et.watch({
    browsers: ['ie > 9', 'last 2 versions'],
    out: './dist',
    config: './element-variables.css',
    theme: './element-theme-default',
    minimize: false
})
