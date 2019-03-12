export const publicPath = process.env.NODE_ENV === 'production'
    ? '/'
    : '/';
export const outputDir = 'dist';
export const assetsDir = '';
export const indexPath = 'index.html';
export const filenameHashing = true;
export const pages = {
    //  index: {
    //      // page 的入口
    //      entry: 'src/index/main.js',
    //      // 模板来源
    //      template: 'public/index.html',
    //      // 在 dist/index.html 的输出
    //      filename: 'index.html',
    //      // 当使用 title 选项时，
    //      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //      title: 'Agent System',
    //      // 在这个页面中包含的块，默认情况下会包含
    //      // 提取出来的通用 chunk 和 vendor chunk.
    //      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    //     },
    //     // 当使用只有入口的字符串格式时，
    //     // 模板会被推导为 `public/subpage.html`
    //     // 并且如果找不到的话，就回退到 `public/index.html`。
    //     // 输出文件名会被推导为 `subpage.html`。
    //     subpage: 'src/subpage/main.js'
};
export const lintOnSave = process.env.NODE_ENV !== 'production';
export const runtimeCompiler = false;
export const transpileDependencies = [];
export const productionSourceMap = true;
export const crossorigin = undefined;
export const integrity = false;
export const configureWebpack = {};
export const css = {
    modules: false,
    // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
    extract: process.env.NODE_ENV === 'production',
    sourceMap: false,
    loaderOptions: {},
};
export const devServer = {
    proxy: {
        '/api': {
            target: '',
            ws: true,
            changeOrigin: true,
        },
    },
};
export const pluginOptions = {};