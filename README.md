# ghos
基于浏览器环境的系统，it means Green Hopes Operation System.Green is Hope!People need Hopes,and the world needs Hopes.


###获取 install
```
git clone https://github.com/Greensoon/ghos.git
```

###依赖 install depend modules
```
cd ghos
npm install -g fis3
```

###启动 start server
```
fis3 server start

fis3 release -wL
```

###访问
http://127.0.0.1:8080/0.0.1



###功能 Funcs
```
1.自定义模块化
2.模块化优先级
3.自定义主题
4.可插入接口
```



###自定义模块化
```
不使用其他js库，使用自定义模块语法
```



###模块化优先级
`根据桌面展示的位置，不同模块组件拥有不同的优先级`



###自定义主题 customize theme
```
桌面主题可更换
```



###可插入接口 
```
支持通过系统接口编写桌面应用
```



###预计系统桌面应用：

```
1.我的电脑
2.垃圾桶
3.音乐
4.图片
5.计算器
```



###系统分析

```
System
├── Lib
├── Utils                     // 项目build目录
├── 预留                     // 生产环境日志目录
└── 预留                      // 生产目录
	└── 预留.js            // 服务端渲染文件

```
