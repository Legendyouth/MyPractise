window.onload = function() {
    var handelSlidesPerView = function() {
        var clientWidth = document.documentElement.clientWidth;
        var result = {};
        if(clientWidth > 768) {
            result = {
                checkedUs: 5
            }
        }
        else {
            result = {
                checkedUs: 2
            }
        }
        return result;
    }
    var courseDetail = {
        // outline: 主tab active为默认展开项，list为子tab的集合，label为子tba的名称，active为默认高亮，details < title标题，contens为内容
        // employment是列表底部的一个描述，必须两个参数都有，因为没做更多判断，太麻烦了
        data: [
            {
                outline: '基础课程',
                active: true,
                list: [
                    {
                        label: 'HTML4/CSS2',
                        active: true,
                        details: [
                            {
                                title: '站点架构',
                                contents: [
                                    '站点搭建',
                                    '站点文件管理',
                                    '各类文件的创建管理'
                                ]
                            },
                            {
                                title: '商业网站架构规范',
                                contents: [
                                    '远程站点与本地站点设计规范',
                                    '站点资源管理规范',
                                    '各类网页文件应用规范'
                                ]
                            },
                            {
                                title: '样式文件的行业应用规范',
                                contents: [
                                    '外部链接样式应用规范',
                                    '外部导入样式应用规范',
                                    '内部样式应用',
                                    '行内标签样式'
                                ]
                            },
                            {
                                title: 'HTML结构',
                                contents: [
                                    'Doctype声明',
                                    '完整的HTML结构',
                                    'HTML中注释的方法',
                                    '常用块级元素及行内元素',
                                    '可置换元素及不可置换元素',
                                    '常用元素的应用规范',
                                    '盒模型'
                                ]
                            },
                            {
                                title: 'CSS样式及选择器标准规范',
                                contents: [
                                    'CSS样式基本概念',
                                    'CSS样式基本语法及格式',
                                    'CSS选择器样式的分类定义和应用规范',
                                    '样式应用的优先级',
                                    'CSS新增选择器'
                                ]
                            },
                            {
                                title: '布局模式',
                                contents: [
                                    '静态布局',
                                    '流式布局',
                                    '自适应布局'
                                ]
                            }
                        ]
                    },
                    {
                        label: 'JavaScript入门',
                        details: [
                            {
                                title: 'JavaScript简介',
                                contents: [
                                    '核心',
                                    '文档对象模型',
                                    '浏览器对象模型',
                                    'ECMA-262',
                                    '变量',
                                    '标识符',
                                    '命名规范',
                                    '关键字、保留字'
                                ]
                            },
                            {
                                title: '数据类型',
                                contents: [
                                    '基本数据类型',
                                    '复杂数据类型',
                                    '类型检测',
                                    '类型转换'
                                ]
                            },
                            {
                                title: '表达式',
                                contents: [
                                    '表达式的概念',
                                    '表达式的应用及语法'
                                ]
                            },
                            {
                                title: '操作符',
                                contents: [
                                    '一元操作符',
                                    '加性操作符',
                                    '乘性操作符',
                                    '赋值操作符',
                                    '一元操作符',
                                    '关系操作符',
                                    '布尔操作符',
                                    '位操作符',
                                    '相等操作符',
                                    '条件操作符',
                                    '逗号操作符'
                                ]
                            },
                            {
                                title: '语句',
                                contents: [
                                    'if语句',
                                    'switch语句',
                                    'for语句',
                                    'while语法',
                                    'do-while语句'
                                ]
                            },
                            {
                                title: '函数',
                                contents: [
                                    '函数的定义',
                                    '函数的用法',
                                    '函数重载',
                                    '函数命名规范'
                                ]
                            }
                        ]
                    },
                    {
                        label: 'Photoshop',
                        details: [
                            {
                                title: 'Photoshop',
                                contents: [
                                    '图像美化',
                                    '移动端icon制作',
                                    '人像美化',
                                    'gif制作'
                                ]
                            }
                        ]
                    }
                ],
                employment: {
                    jobs: 'Web前端开发工程师/前端页面布局与重构工程师/网站开发工程师/前端开发/页面设计',
                    salary: '4 - 6K'
                }
            },
            {
                outline: '初级课程',
                list: [
                    {
                        label: 'JavaScript初级(上)',
                        details: [
                            {
                                title: 'String类型',
                                contents: [
                                    '创建String类型的几种方式',
                                    'String类型的属性及方式的使用'
                                ]
                            },
                            {
                                title: 'Number类型',
                                contents: [
                                    '创建Number类型的方法',
                                    'Number类型的属性方法'
                                ]
                            },
                            {
                                title: 'Math对象',
                                contents: [
                                    'Math对象详解',
                                    'Math对象的实际应用'
                                ]
                            },
                            {
                                title: '实际案例讲解',
                                contents: [
                                    '驼峰',
                                    '获取随机数',
                                    'indexOf方法的封装',
                                    '对称字符串',
                                    '字符串元素计数'
                                ]
                            }
                        ]
                    },
                    {
                        label: 'JavaScript初级(中)',
                        details: [
                            {
                                title: '数组',
                                contents: [
                                    '创建数组的几种方式',
                                    '数组的概念及应用场景',
                                    '数组的方法及属性',
                                    '遍历数组的方法',
                                    '循环效率',
                                    '数组检测',
                                    '数组转换',
                                    '堆(堆栈)、队列'
                                ]
                            },
                            {
                                title: '实际案例',
                                contents: [
                                    '排序',
                                    '质数',
                                    '数组去重的几种方式',
                                    '数组扁平化与多维数组转换'
                                ]
                            },
                            {
                                title: '日期对象',
                                contents: [
                                    '日期对象的创建',
                                    '日期对象的方法及使用场景'
                                ]
                            },
                            {
                                title: 'DOM',
                                contents: [
                                    '文档对象模型',
                                    '节点查找及使用',
                                    'DOM树',
                                    '渲染机制'
                                ]
                            }
                        ]
                    },
                    {
                        label: 'JavaScript初级(下)',
                        details: [
                            {
                                title: '事件',
                                contents: [
                                    '事件的概念',
                                    'DOM0级事件',
                                    '事件的使用方式及应用场景'
                                ]
                            },
                            {
                                title: 'CSS、HTML属性',
                                contents: [
                                    '行内样式',
                                    'class样式',
                                    '元素属性'
                                ]
                            },
                            {
                                title: '操作节点',
                                contents: [
                                    '克隆',
                                    '追加',
                                    '替换',
                                    '删除',
                                    '遍历'
                                ]
                            },
                            {
                                title: '对象',
                                contents: [
                                    '对象基本概念及创建方式',
                                    '对象遍历及取值方式'
                                ]
                            },
                            {
                                title: 'with语句',
                                contents: [
                                    'with概念及性能问题',
                                    'with语句使用'
                                ]
                            },
                            {
                                title: 'label',
                                contents: [
                                    'label语句概念',
                                    'label配合循环的使用场景'
                                ]
                            },
                            {
                                title: 'DOM常用方法封装',
                                contents: [
                                    '添加',
                                    '删除',
                                    '检测'
                                ]
                            },
                            {
                                title: '获取元素样式',
                                contents: [
                                    'IE',
                                    '标准浏览器'
                                ]
                            },
                            {
                                title: '元素宽高及位置',
                                contents: [
                                    'client',
                                    'scroll',
                                    'inner',
                                    'outer',
                                    'offset'
                                ]
                            },
                            {
                                title: 'BOM',
                                contents: [
                                    'BOM概念',
                                    'BOM的一些常用方法及属性'
                                ]  
                            },
                            {
                                title: '性能',
                                contents: [
                                    '作用域',
                                    '循环',
                                    'DOM',
                                    '代码压缩',
                                    '时间复杂度',
                                    '空间复杂度',
                                    '可维护代码',
                                    '代码约定',
                                    '常见错误分析及使用'
                                ]  
                            }
                        ]
                    }
                ],
                employment: {
                    jobs: 'HTML5大前端工程师/高级HTML5大前端工程师/网站开发工程师/移动前端开发工程师',
                    salary: '6 - 10K'
                }
            },
            {
                outline: '进阶课程',
                list: [
                    {
                        label: 'HTML5 + CSS3',
                        active: true,
                        details: [
                            {
                                title: 'HTML5',
                                contents: [
                                    'HTML5简介',
                                    '新增标签使用',
                                    '新增API使用'
                                ]
                            },
                            {
                                title: 'CSS3',
                                contents: [
                                    'CSS3新增属性',
                                    '帧动画、过渡动画',
                                    '渐变',
                                    'flex'
                                ]
                            },
                            {
                                title: 'canvas',
                                contents: [
                                    'canvas概念',
                                    'canvas方法及属性',
                                    '简单绘制图形',
                                    '配合用户行为绘制图形',
                                    '小游戏、动画绘制'
                                ]
                            },
                            {
                                title: '移动端布局',
                                contents: [
                                    '视口',
                                    '相对单位',
                                    '抓包工具',
                                    '终端调试工具'
                                ]
                            }
                        ]
                    },
                    {
                        label: 'JavaScript高级(上)',
                        details: [
                            {
                                title: '事件高级',
                                contents: [
                                    '事件高级概念',
                                    'DOM2、3级事件',
                                    '冒泡',
                                    '捕获',
                                    '事件处理程序',
                                    '事件对象',
                                    '事件委托'
                                ]
                            },
                            {
                                title: '作用域',
                                contents: [
                                    '作用域概念',
                                    '执行环境',
                                    '延长作用域'
                                ]
                            },
                            {
                                title: '基本类型和引用类型',
                                contents: [
                                    '动态属性',
                                    '复制变量值',
                                    '传递参数',
                                    '检测类型'
                                ]
                            },
                            {
                                title: '垃圾收集',
                                contents: [
                                    '标记清除',
                                    '引用计数',
                                    '性能问题',
                                    '管理内存'
                                ]
                            },
                            {
                                title: '闭包、递归',
                                contents: [
                                    '闭包概念',
                                    '闭包应用场景',
                                    '闭包缺陷',
                                    '递归概念',
                                    '递归应用场景'
                                ]
                            },
                            {
                                title: '函数式编程',
                                contents: [
                                    '高阶函数',
                                    '规约函数',
                                    '映射函数',
                                    '操作符函数'
                                ]
                            }
                        ]
                    },
                    {
                        label: 'JavaScript高级(中)',
                        details: [
                            {
                                title: '对象',
                                contents: [
                                    '全局对象',
                                    '全局属性',
                                    '全局函数',
                                    '构造函数',
                                    '对象属性和方法',
                                    '工厂模式',
                                    '单例模式',
                                    '观察者模式',
                                    '享元模式'
                                ]
                            },
                            {
                                title: '原型及原型链',
                                contents: [
                                    'this指向',
                                    'call()',
                                    'apply()',
                                    '原型模式',
                                    '继承'
                                ]
                            },
                            {
                                title: '运动框架',
                                contents: [
                                    '匀速运动',
                                    '缓冲运动',
                                    '多物体运动',
                                    '链式运动',
                                    '任意值变化',
                                    '同时运动'
                                ]
                            }
                        ]
                    },
                    {
                        label: 'JavaScript高级(下)',
                        details: [
                            {
                                title: '多媒体',
                                contents: [
                                    'video',
                                    'audio',
                                    '原生js制作视频、音频播放器'
                                ]
                            },
                            {
                                title: '移动端事件',
                                contents: [
                                    'touch概念',
                                    '基本事件',
                                    '多点触摸',
                                    '事件封装'
                                ]
                            },
                            {
                                title: '拖拽',
                                contents: [
                                    '事件绑定',
                                    '坐标',
                                    '继承实现'
                                ]
                            },
                            {
                                title: '表单',
                                contents: [
                                    '事件',
                                    '实时检测',
                                    '公共方法'
                                ]
                            }
                        ]
                    }
                ],
                employment: {
                    jobs: 'HTML5大前端工程师/高级HTML5大前端工程师/网站开发工程师/移动前端开发工程师',
                    salary: '8 - 12K'
                }
            },
            {
                outline: '服务端开发',
                list: [
                    {
                        label: '服务端开发',
                        active: true,
                        details: [
                            {
                                title: 'nodejs',
                                contents: [
                                    '开发环境搭建',
                                    'nodejs概念',
                                    '基础api学习',
                                    '常用模块',
                                    '模块与包管理工具',
                                    'CommonJS模块',
                                    'URL网址解析',
                                    'QueryString参数处理',
                                    'HTTP模块',
                                    'HTTP小爬虫',
                                    'request方法',
                                    '事件events模块',
                                    '文件fs模块',
                                    'Stream流模块',
                                    '原生路由与参数接收',
                                    'Yarn 与 PM2'
                                ]
                            },
                            {
                                title: '数据库',
                                contents: [
                                    'sql语句',
                                    'mysql/sql-server/oracle',
                                ]
                            },
                            {
                                title: 'NoSQL',
                                contents: [
                                    'MongoDB介绍与环境搭建',
                                    '数据库常用命令',
                                    'Collection聚集集合',
                                    '聚集集合查询',
                                    'NodeJS连接MongoDB',
                                    'cassandra',
                                    'CouchDB'
                                ]
                            },
                            {
                                title: 'Koa2',
                                contents: [
                                    'Koa2开始',
                                    '路由',
                                    '请求数据获取',
                                    '静态资源加载',
                                    'cookie/session',
                                    '模板引擎',
                                    '文件上传',
                                    '设计理念',
                                    '数据库MySQL',
                                    'JSONP实现',
                                    '测试与debug'
                                ]
                            },
                            {
                                title: 'Express',
                                contents: [
                                    '安装和创建基于Express的项目',
                                    'Express 4.1x 初始化项目详解',
                                    '路由简介',
                                    '模板引擎EJS',
                                    '模板引擎Pug（Jade）',
                                    '设计理念',
                                    'API',
                                    '使用方法'
                                ]
                            },
                            {
                                title: 'Npx',
                                contents: [
                                    '概念',
                                    '使用方式'
                                ]
                            },
                            {
                                title: 'Nvm',
                                contents: [
                                    '概念',
                                    '使用方式'
                                ]
                            },
                            {
                                title: '测试框架mocha',
                                contents: [
                                    '搭建框架',
                                    '断言assert',
                                    '项目测试',
                                    '运行多个测试',
                                ]
                            },
                            {
                                title: 'socket 即时通信项目',
                                contents: [
                                    'Socket简介和通讯流程',
                                    '基于net模块实现socket',
                                    'WebSocket',
                                    'Socket.io'
                                ]
                            }
                        ]
                    }
                ],
                employment: {
                    jobs: '高级HTML5大前端工程师/全栈工程师/移动前端App开发工程师/微信开发工程师/小程序开发工程师/数据可视化开发工程师',
                    salary: '10 - 15K'
                }
            },
            {
                outline: '前端工程化',
                list: [
                    {
                        label: '前端工程化',
                        active: true,
                        details: [
                            {
                                title: 'gulp',
                                contents: [
                                    '简介',
                                    '基础api学习',
                                    'gulp.src',
                                    'globs',
                                    'options',
                                    'options.buffer',
                                    'options.read',
                                    'options.base',
                                    'gulp.dest',
                                    'gulp.task',
                                    'gulp.watch',
                                    '配合项目练习使用'
                                ]
                            },
                            {
                                title: 'webpack',
                                contents: [
                                    '概念',
                                    'loader',
                                    '插件',
                                    '多页面应用程序',
                                    'configuration',
                                    'modules',
                                    'targets',
                                    '配合项目练习使用'
                                ]
                            },
                            {
                                title: 'Yeoman.io',
                                contents: [
                                    '简介',
                                    '基础api学习',
                                    '配合项目练习使用'
                                ]
                            }
                        ]
                    }
                ],
                employment: {
                    jobs: 'HTML5大前端工程师/高级HTML5大前端工程师/网站开发工程师/移动前端开发工程师',
                    salary: '10 - 15K'
                }
            },
            {
                outline: '高级框架应用',
                list: [
                    {
                        label: '前端主流框架',
                        active: true,
                        details: [
                            {
                                title: 'Vue',
                                contents: [
                                    '简介',
                                    '基础api学习',
                                    'WebApp开发基础(Webstorage,移动端事件,UI组件, Zepto, IScroll, Swiper)',
                                    'MVVM模式',
                                    '前端组件化',
                                    '单文件组件',
                                    '组件间传值',
                                    'Vue实例',
                                    'E19Vue实例生命周期',
                                    'Vue的模版语法',
                                    '计算属性,方法与侦听器',
                                    '计算属性的 getter 和 setter',
                                    'Vue中的样式绑定',
                                    'Vue中的条件渲染',
                                    'Vue中的列表渲染',
                                    'Vue中的set方法',
                                    '父子组件间的数据传递',
                                    '组件参数校验与非 props 特性',
                                    '给组件绑定原生事件',
                                    '非父子组件间的传值',
                                    '在Vue中使用插槽',
                                    '作用域插槽',
                                    '动态组件与 v-once 指令',
                                    'Vue动画',
                                    'vux',
                                    '源码分析'
                                ]
                            },
                            {
                                title: 'React',
                                contents: [
                                    'React简介',
                                    'React开发环境准备',
                                    'React中的组件',
                                    'JSX语法',
                                    '拆分组件与组件之间的传值',
                                    'React developer tools 安装及使用',
                                    'PropTypes 与 DefaultProps 的应用',
                                    'props，state 与 render 函数的关系',
                                    '深入了解React虚拟DOM',
                                    '虚拟 DOM 中的 Diff 算法',
                                    'React 中 ref 的使用',
                                    'React的生命周期函数及使用场景',
                                    '使用Charles实现本地数据mock',
                                    'React 中实现 CSS 动画效果',
                                    'react-transition-group 实现动画',
                                    'Redux 概念简述和工作流程',
                                    'Action 和 Reducer 的编写',
                                    'ActionTypes 的拆分',
                                    '使用 actionCreator 统一创建 action',
                                    'UI组件和、容器组件及无状态组件',
                                    '使用Redux-thunk 中间件实现ajax数据请求',
                                    'Redux-saga 中间件使用',
                                    'React-redux 中间件使用'
                                ]
                            },
                            {
                                title: 'Angular',
                                contents: [
                                    'TypeScript 基础与进阶',
                                    '开发环境配置',
                                    'Hello World',
                                    '架构、模块与组件',
                                    '模板',
                                    '元数据、数据绑定与数据显示',
                                    '表单',
                                    '服务与指令',
                                    '依赖注入',
                                    '路由',
                                    'Ionic 3 框架'
                                ]
                            },
                            {
                                title: 'Avalon',
                                contents: [
                                    '简介',
                                    '基础api学习'
                                ]
                            }
                        ]
                    }
                ],
                employment: {
                    jobs: '高级HTML5大前端工程师/全栈工程师/移动前端App开发工程师/微信开发工程师/小程序开发工程师/数据可视化开发工程师',
                    salary: '12 - 18K'
                }
            },
            {
                outline: '模块框架',
                list: [
                    {
                        label: 'SeaJs',
                        active: true,
                        details: [
                            {
                                title: 'SeaJs',
                                contents: [
                                    'CMD 规范',
                                    '核心特性',
                                    '简单一致的模块格式',
                                    '依赖的自动管理',
                                    '脚本的异步并行加载',
                                    '调试插件的用法与实践',
                                    '模块系统概述',
                                    '模块路径规则',
                                    'require 书写约定',
                                    '加载器基本用法',
                                    '加载器配置',
                                    'sea.js 的引入方式'
                                ]
                            }
                        ]
                    },
                    {
                        label: 'RequireJs',
                        active: true,
                        details: [
                            {
                                title: 'RequireJs',
                                contents: [
                                    'RequireJs简介',
                                    '为什么使用RequireJS',
                                    '如何使用RequireJS',
                                    '异步模块定义(AMD)',
                                    'data-main属性',
                                    '配置函数',
                                    '用RequireJS定义模块'
                                ]
                            }
                        ]
                    }
                ],
                employment: {
                    jobs: 'HTML5大前端工程师/高级HTML5大前端工程师/网站开发工程师/移动前端开发工程师',
                    salary: '6 - 8K'
                }
            },
            {
                outline: 'Web容器',
                list: [
                    {
                        label: 'Nginx',
                        active: true,
                        details: [
                            {
                                title: 'Nginx',
                                contents: [
                                    '安装 Nginx',
                                    '运行和控制 Nginx - 命令行参数和信号',
                                    '配置符号',
                                    'HTTP Core模块',
                                    'HTTP Upstream 模块',
                                    'HTTP Auth Basic 模块',
                                    'nginx在windows上安装',
                                    'Mail SSL模块',
                                    'Mail Proxy模块',
                                    'SSL',
                                    'HTTP Headers 模块',
                                    'SSI模块'
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                outline: '版本控制工具',
                list: [
                    {
                        label: 'Git',
                        active: true,
                        details: [
                            {
                                title: 'Git',
                                contents: [
                                    '简介',
                                    '分布式',
                                    '安装git',
                                    '创建版本库',
                                    '时光穿梭机',
                                    '远程仓库',
                                    '分支管理',
                                    '标签管理',
                                    '使用github',
                                    '使用码云',
                                    '实战项目使用'
                                ]
                            }
                        ]
                    },
                    {
                        label: 'Svn',
                        active: true,
                        details: [
                            {
                                title: 'Svn',
                                contents: [
                                    '简介',
                                    '常用命令学习',
                                    '实战项目使用'
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                outline: '混合开发',
                list: [
                    {
                        label: '微信公众号开发',
                        active: true,
                        details: [
                            {
                                title: '微信公众号开发',
                                contents: [
                                    '初识微信公众号',
                                    '订阅号的基本功能',
                                    '使用百度BAE实现代码的快速上线',
                                    '使用Git完成线上代码部署',
                                    '公众号开发权限及功能接入',
                                    '微信JSSDK接口API',
                                    '微信场景项目开发与接入'
                                ]
                            }
                        ]
                    },
                    {
                        label: 'React-Native',
                        active: true,
                        details: [
                            {
                                title: 'React-Native',
                                contents: [
                                    '搭建环境',
                                    'props',
                                    'state',
                                    'flexbox',
                                    '原生模块',
                                    '原生UI组件',
                                    'Headless JS',
                                    '在iOS模拟器上运行',
                                    '打包APK'
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        renderMain: function(list) {
            var mainResult = '';
            mainResult += '<li>'
                + list.map(function(item, index1) {
                    return (
                        '<h3>' + item.title + '</h3>'
                        + item.contents.map(function(item1, index1) {
                            return '<span><img src="./src/images/tip.png">' + item1 + '</span>'
                        }).join('')
                    );
                }).join('')
            +'</li>';
            $('#course-detail-main-list').html(mainResult);
        },
        renderFooterBar: function(data) {
            if(data.employment) {
                $('.course-employment').show();
                $('#commonpage-course-employment').html(data.employment.jobs);
                $('#commonpage-course-salary').html(data.employment.salary);
            }
            else {
                $('.course-employment').hide();
            }
        },
        renderFn: function() {
            var list = this.data;
            var self = this;
            var nextMasterIndex = -1;
            var nextSubIndex = -1;
            if(list && list.length > 0) {
                var sidebarResult = '';
                
                list.forEach(function(item, index) {
                    sidebarResult += '<li calss="active" nav-index="' + index + '">'
                            + '<p>' + item.outline + '</p>'
                            + '<ol class="' + (item.active ? 'active' : '') + ' sidebar-sub-nav">'
                                + item.list.map(function(item1, index1) {
                                    return '<li class="' + (item1.active ? 'active' : '') + '" sub-index="' + index1 + '">' + item1.label + '</li>'
                                }).join('')
                            + '</ol>'
                        + '</li>'
                    
                })
                // 侧边栏
                $('#course-detail-sidebar-list').html(sidebarResult);
                // 内容
                this.renderMain(list[0].list[0].details);
                this.renderFooterBar(list[0]);
                var sidebarLis = $('#course-detail-sidebar-list > li');
                var sidebarSubLis =  $('.sidebar-sub-nav > li');
                // 主导航
                sidebarLis.each(function(index, item) {
                    $(item).on('click', function(event) {
                        if(event.target.nodeName === 'P') {
                            if(nextMasterIndex !== index) {
                                var navIdx = $(this).attr('nav-index');
                                sidebarSubLis.each(function(index1, item1) {
                                    $(item1).removeClass('active');
                                })
                                sidebarLis.each(function(index1, item1) {
                                    $(item1).children('ol').removeClass('active');
                                });
                                $(this).children('ol').children('li').eq(0).addClass('active');
                                if(!$(this).children('ol').hasClass('active')) {
                                    $(this).children('ol').addClass('active');
                                }
                                self.renderMain(list[navIdx].list[0].details);
                                self.renderFooterBar(list[navIdx]);
                                nextMasterIndex = index;
                                nextSubIndex = -1;
                            }
                        }
                    })
                })
                // 子导航
                sidebarSubLis.each(function(index, item) {
                    $(item).on('click', function() {
                        if (nextSubIndex !== index) {
                            sidebarSubLis.each(function(index1, item1) {
                                $(item1).removeClass('active');
                            })
                            $(this).addClass('active');
                            var navIdx = $(this).parents('li').attr('nav-index');
                            var subIdx = $(this).attr('sub-index');
                            self.renderMain(list[navIdx].list[subIdx].details);
                            nextSubIndex = index;
                        }
                    })
                })
            }
        }
    }

    var checkedUs = {
        data: [
            {
                time: '北京-第一期',
                salary: '12561'
            },
            {
                time: '北京-第二期',
                salary: '13456'
            },
            {
                time: '北京-第三期',
                salary: '13216'
            },
            {
                time: '北京-第四期',
                salary: '13678'
            },
            {
                time: '西安-第一期',
                salary: '8794'
            },
            {
                time: '西安-第二期',
                salary: '10569'
            },
            {
                time: '西安-第三期',
                salary: '10956'
            }
        ],
        renderFn: function() {
            var list = this.data;
            if(list && list.length > 0) {
                var result = '';
                list.forEach(function(item, index) {
                    result += '<div class="swiper-slide">'
                                + '<section>'
                                    + '<h3>' + item.time + '</h3>'
                                    + '<div>'
                                        + '<span><img src="./src/images/huo-icon.png">平均薪资</span>'
                                        + '<p>￥' + item.salary + '</p>'
                                    + '</div>'
                                + '</section>'
                            + '</div>';
                })
                $('#swiper-wrapper-checked').html(result);
                new Swiper('#swiper-container-checked', {
                    loop: true,
                    calculateHeight : true,
                    pagination : '.checked-us-pagination',
                    slidesPerView: handelSlidesPerView().checkedUs,
                    slidesPerGroup : 1
                });
            }
        }
    }
    var students = {
        data: [
            {
                list: [
                    {
                        url: './src/images/students/xy-1.png',
                        name: '沈*瑞',
                        company: '阿里巴巴',
                        salary: '16000',
                        address: '江苏连云港市'
                    },
                    {
                        url: './src/images/students/xy-9.png',
                        name: '王*伟',
                        company: '阿里巴巴',
                        salary: '16000',
                        address: '山东济南'
                    }
                ]
            },
            {
                list: [
                    {
                        url: './src/images/students/xy-10.png',
                        name: '张*强',
                        company: '神州租车',
                        salary: '14000',
                        address: '河南郑州'
                    },
                    {
                        url: './src/images/students/xy-2.png',
                        name: '郝*路',
                        company: '新美家居',
                        salary: '17000',
                        address: '河北省邯郸市'
                    }
                ]
            },
            {
                list: [
                    {
                        url: './src/images/students/xy-3.png',
                        name: '贺*',
                        company: '大鹏教育',
                        salary: '15000',
                        address: '山西省大同市'
                    },
                    {
                        url: './src/images/students/xy-11.png',
                        name: '李*盈',
                        company: '腾讯',
                        salary: '16000',
                        address: '陕西西安'
                    }
                ]
            },
            {
                list: [
                    {
                        url: './src/images/students/xy-12.png',
                        name: '张*柯',
                        company: '飞凡',
                        salary: '17000',
                        address: '江苏省南充市'
                    },
                    {
                        url: './src/images/students/xy-4.png',
                        name: '李*滨',
                        company: '盛大小代',
                        salary: '15000',
                        address: '河北省承德市'
                        
                    }
                ]
            },
            {
                list: [
                    {
                        url: './src/images/students/xy-5.png',
                        name: '李*丁',
                        company: '商越网络',
                        salary: '16000',
                        address: '山西吕梁市'
                    },
                    {
                        url: './src/images/students/xy-13.png',
                        name: '王*成',
                        company: '京东',
                        salary: '16000',
                        address: '四川重庆'
                    }
                ]
            },
            {
                list: [
                    {
                        url: './src/images/students/xy-14.png',
                        name: '陈*馨',
                        company: '百度',
                        salary: '16000',
                        address: '云南贵州'
                    },
                    {
                        url: './src/images/students/xy-6.png',
                        name: '吕*杰',
                        company: '阿里巴巴',
                        salary: '21000',
                        address: '河北石家庄'
                    }
                ]
            },
            {
                list: [
                    {
                        url: './src/images/students/xy-15.png',
                        name: '李*海',
                        company: '真有铺',
                        salary: '14000',
                        address: '山东济南'
                    },
                    {
                        url: './src/images/students/xy-7.png',
                        name: '尹*臣',
                        company: '中国信投',
                        salary: '18000',
                        address: '河北省承德市'
                    }
                ]
            },
            {
                list: [
                    {
                        url: './src/images/students/xy-8.png',
                        name: '张*',
                        company: '车轮互联',
                        salary: '21000',
                        address: '江苏省徐州市'
                    },
                    {
                        url: './src/images/students/xy-16.png',
                        name: '杨*婷',
                        company: '天源',
                        salary: '15000',
                        address: '浙江湖州'
                    }
                ]
            }
        ],
        replace: function(str) {
            var result = str.split('');
            switch(+result.length < 4) {
                case true: result.splice(1,1, '*');
                    break;
                default: result.splice((Math.floor((result.length - 1) / 2)), 2, '**');
            }
            return result.join('');
        },
        renderFn: function() {
            var list = this.data;
            var self = this;
            if(list && list.length > 0) {
                var result = '';
                list.forEach(function(item, index) {
                    result += '<div class="swiper-slide">'
                                + '<section>'
                                    + item.list.map(function(item1, index1) {
                                        return (
                                            '<div>'
                                                + '<ul>'
                                                    + '<li>'
                                                        + '<img src="' + item1.url + '" alt="">'
                                                        + '<div>'
                                                            + '<img src="./src/images/xy-border.svg" alt="">'
                                                        + '</div>'
                                                    + '</li>'
                                                    + '<li>'
                                                        + '<h3><i>' + self.replace(item1.name) + '</i><span>' + item1.company + '</span></h3>'
                                                        + '<span>月薪：<em>' + item1.salary + '</em></span>'
                                                        + '<p>地址：' + self.replace(item1.address) + '</p>'
                                                    + '</li>'
                                                + '</ul>'
                                            + '</div>');
                                    }).join('')
                                + '</section>'
                            + '</div>';
                })
                $('#swiper-wrapper-students').html(result);
                new Swiper('#swiper-container-students', {
                    loop: true,
                    calculateHeight : true,
                    pagination : '.students-pagination',
                    slidesPerView: handelSlidesPerView().checkedUs,
                    slidesPerGroup : 1
                });
            }
        }
    }
    // 课程列表
    courseDetail.renderFn();
    // 为什么选择我们的相关内容渲染
    checkedUs.renderFn();
    students.renderFn();
    // 立即行动按钮点击事件跳转客服
    $('#employment-situation-btn').on('click', function() {
        window.open('http://dht.zoosnet.net/LR/Chatpre.aspx?id=DHT41913876&lng=cn');
    })
};