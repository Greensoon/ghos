fis.set('now hash', (Math.ceil(Date.now() / 1000)).toString(16));
// fis.set('now path', (new Date()).toISOString().replace(/-|T|:|(\d{2}\.\d{3}Z)$/g, ''));
fis.set('root path', 'ghos');
fis.set('now path', '0.0.1');
fis.set('debug path', '/' + fis.get('root path') + '/debug/' + fis.get('now path'));
fis.set('prod path', '/' + fis.get('root path') + '/' + fis.get('now path'));
// fis.config.set('modules.postpackager', 'autoload');
fis.match('::packager', {
  spriter: fis.plugin('csssprites-group'),
  //postpackager: fis.plugin('loader')
});
fis.config.set('settings.spriter.csssprites-group', {
    //图片缩放比例
    scale: 1,
    //1rem像素值
    rem: 40,
    //图之间的边距
    margin: 10,
    //使用矩阵排列方式，默认为线性`linear` `matrix`
    layout: 'matrix',
    //合并图片存到/img/
    to: '/img'
});
// 让所有文件，都使用相对路径。
fis.match('**', {
  relative: true,
  release: '/' + fis.get('now path') + '/$0',
});
fis.match('_*.*', {
  //release: false,
});
fis.match('css/**', {
  release: false,
});
fis.match('css/{index,page-error}.less', {
  useSprite: true,
  release: '/' + fis.get('now path') + '/$0',
});
fis.match('js/**', {
  release: false,
});
fis.match('{js/index.js,js/sm-config.js}', {
  release: '/' + fis.get('now path') + '/$0',
});
fis.match('*.{js,less,css,png,jpg,gif}', {
  useHash: false,
});
fis.match('*.{js,less,css}', {
  query: '?t=' + fis.get('now hash'),
});
fis.match('*.less', {
  parser: fis.plugin('less'),
  postprocessor: fis.plugin("autoprefixer", {
    // https://github.com/ai/browserslist#queries
    "browsers": ['Firefox >= 20', 'Safari >= 6', 'Explorer >= 9', 'Chrome >= 12', "ChromeAndroid >= 4.0"],
    "flexboxfixer": true,
    "gradientfixer": true,
  }),
  rExt: '.css',
});