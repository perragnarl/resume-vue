module.exports = {
    configureWebpack: {
      module: {
        rules: [
          {
            test: /\.(svg)(\?.*)?$/,
            use: [
              {
                loader: 'svg-sprite-loader',
                options: {
                  name: '[name]-[hash:7]',
                  prefixize: true
                }
              },
              'svg-fill-loader'
            ]
          }
        ]
      }
    },
    chainWebpack: config => {
        config.module.rule('svg').test(() => false).use('file-loader')
    }
  }