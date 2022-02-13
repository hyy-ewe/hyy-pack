
const babel = require('@babel/core')


module.exports = function BabelLoader (source) {
  const res = babel.transform(source, {
    sourceType: 'module' // 允许使用import和export语法
  })
  return res.code
}
