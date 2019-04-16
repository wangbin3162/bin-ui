const markdownRender = require('markdown-it')()

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/bin-ui/' : '/',
  // 修改 pages 入口
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html', // 模板
      filename: 'index.html' // 输出文件
    }
  },
  // 扩展 webpack 配置
  chainWebpack: config => {
    // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule('js')
      .include
      .add('/src')
      .add('/packages')
      .add('/examples')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
        use: [
          [require('markdown-it-container'), 'demo', {
            validate (params) {
              return params.trim().match(/^demo\s*(.*)$/)
            },
            render: function (tokens, idx) {
              const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
              if (tokens[idx].nesting === 1) {
                const description = m && m.length > 1 ? m[1] : ''
                const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
                let descriptionHTML = description ? markdownRender.render(description) : ''
                // 2.使用自定义开发组件【DemoBlock】来包裹内容并且渲染成案例和代码示例
                return `<demo-block>
                          <div slot="source">${content}</div>
                          ${descriptionHTML}
                          <div slot="highlight">`
              } else {
                return '</div></demo-block>\n'
              }
            }
          }]
        ]
      })
  }
}
