const path = require('path')
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');

module.exports = override(
  // 支持 antd 按需引入
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // 让项目支持 less，并且能对 ant design 的主题做修改
addLessLoader({
  javascriptEnabled: true,
  modifyVars: { '@primary-color': 'red' },
  }),
  // 配置别名
  addWebpackAlias({
    '@': path.resolve(__dirname, './src')
  })
);
