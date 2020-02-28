# pad

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 目录结构描述
``` bash
├── src                         
│   ├── assets                  // 资源文件
│   │   └── img 
│   ├── axios                   
│   │   ├── api                 // api统一配置
│   │   ├── http                // axios的配置与封装方法
│   │   └── request             // axios请求方法统一管理
│   ├── component               // 公用vue组件
│   ├── router                  // 路由
│   ├── utils                   // 工具
│   │   ├── common              // 公用js方法
│   │   ├── const               // 公用常量
│   │   └── validate            // 公用校验方法
│   ├── views                   // 视图层
│   ├──store                    // vuex状态管理
│   │   └── index.js
│   │──config
│   │   └── index.js
│   │   
│   ├── App.vue
│   └── main.js
├── node_modules
└── Readme.md 
```

## 代码风格
##### 一.vue文件代码风格参考
[https://youzan.github.io/vant/#/zh-CN/style-guide](https://note.youdao.com/)
##### 二.js代码风格规范
1. 采用2个字符缩进
2. 代码尾部省略';'
3. 采用单引号

##### 三.css代码风格规范
1. class命名采用横线连接 (kebab-case)
2. 使用less编辑css代码
3. css代码属性排列顺序
    1.     Positioning
    2.     Box model
    3.     Typographic
    4.     Visual
    5.     Misc