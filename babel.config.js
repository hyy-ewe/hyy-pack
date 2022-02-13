module.exports = function (api) {
  api.cache(true)
  return {
    "presets": [
      ['@babel/preset-env', {
        targets: {
          "ie": "8"
        },
      }],
      '@babel/preset-react',
    ],
    "plugins": [
      ["@babel/plugin-transform-template-literals", {
        "loose": true
      }],
      [
        "module-resolver", {
          "root": ["."],
        }
      ]
    ],
    "compact": true
  }
}