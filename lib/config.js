var path = require('path')
var fs = require('fs')

var pkg = {}

try {
  pkg = require(path.resolve(process.cwd(), 'package.json'))
} catch (err) {}

var config = Object.assign({
  browsers: ['ie > 9', 'last 2 versions'],
  out: './theme',
  config: './element-variables.scss',
  theme: 'element-theme-chalk',
  minimize: false
}, pkg['element-theme'])

exports.features = {
  bem: {
    shortcuts: {
      component: 'b',
      modifier: 'm',
      descendent: 'e'
    },
    separators: {
      descendent: '__',
      modifier: '--'
    }
  }
}

function fsExistsSync(path) {
    try{
        fs.accessSync(path, fs.F_OK);
    }catch(e){
        return false;
    }
    return true;
}

var themeModulePath = path.resolve(process.cwd(), './node_modules/' + config.theme)
var themeCustomPath = path.resolve(process.cwd(), config.theme)

exports.themePath = fsExistsSync(themeCustomPath) === true ? themeCustomPath : themeModulePath
exports.out = config.out
exports.config = config.config
exports.minimize = config.minimize
exports.browsers = config.browsers
exports.components = config.components
exports.themeName = config.theme
