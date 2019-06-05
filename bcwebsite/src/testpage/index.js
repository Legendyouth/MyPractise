window.onload = function() {
    var chatUrl = 'http://dht.zoosnet.net/LR/Chatpre.aspx?id=DHT41913876&lng=cn';
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
        // employment是列表底部的一个描述，可参考major页
        data: [
            {
                outline: '测试基础',
                active: true,
                list: [
                    {
                        label: '软件基础测试',
                        active: true,
                        details: [
                            {
                                title: '知识点',
                                contents: [
                                    '软件工程与软件测试',
                                    '软件测试概念与意义',
                                    '软件测试生命周期',
                                    '软件测试流程',
                                    '软件测试过程模型',
                                    '软件测试常用方法',
                                    '掌握单元测试、集成测试、系统测试等测试过程，了解测试的基本工作',
                                    '了解白盒测试和黑盒测试等测试方法',
                                    '了解ISO9000和CMM/CMMI，理解并掌握质量模型，理解质量铁三角'
                                ]
                            }
                        ]
                    },
                    {
                        label: '软件测试计划',
                        details: [
                            {
                                title: '知识点',
                                contents: [
                                    '测试平台使用：jira',
                                    '软件需求分析',
                                    '测试计划编写',
                                    '测试用例设计与评审',
                                    '掌握系统测试计划写作要点，进行实战项目的系统测试计划写作，制定测试策略'
                                ]
                            }
                        ]
                    },
                    {
                        label: '软件测试执行',
                        details: [
                            {
                                title: '知识点',
                                contents: [
                                    '测试用例执行平台',
                                    'Bug识别、报告与跟踪'
                                ]
                            }
                        ]
                    },
                    {
                        label: '软件测试报告',
                        details: [
                            {
                                title: '知识点',
                                contents: [
                                    '测试报告',
                                    '测试总结'
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                outline: '测试环境管理',
                list: [
                    {
                        label: '数据库(mysql)测试',
                        details: [
                            {
                                title: '知识点',
                                contents: [
                                    '数据库mysql的安装',
                                    '数据库、表的创建',
                                    '数据库、表、数据的增删改查及存储过程',
                                    'navicat界面工具的使用',
                                    '通过测试的角度熟悉数据库集群下的数据库方面的测试技术'
                                ]
                            }
                        ]
                    },
                    {
                        label: '企业环境搭建',
                        details: [
                            {
                                title: '知识点',
                                contents: [
                                    'linux简介',
                                    'centos的安装',
                                    'Linux常用命令介绍',
                                    '中间件、数据库安装',
                                    '部署实际项目(jira)',
                                    'Linux Shell自动化运维',
                                    'Linux企业环境的部署，熟悉企业级系统架构',
                                    '熟悉Linux系统平台自动化测试的手段，性能监控方法'
                                ]
                            }
                        ]
                    }
                ]
            },
            ,
            {
                outline: '测试项目管理实战',
                list: [
                    {
                        label: '需求管理',
                        details: [
                            {
                                title: '知识点',
                                contents: [
                                    '理解需求管理相关知识，完成实例项目的需求跟踪矩阵，阅读项目开发文档，理解软件开发的整个过程'
                                ]
                            }
                        ]
                    },
                    {
                        label: '配置管理',
                        details: [
                            {
                                title: '知识点',
                                contents: [
                                    '掌握配置管理相关工作内容'
                                ]
                            }
                        ]
                    },
                    {
                        label: '缺陷管理',
                        details: [
                            {
                                title: '知识点',
                                contents: [
                                    '理解缺陷管理相关知识，能进行缺陷提交和分析'
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                outline: '测试开发基础',
                list: [
                    {
                        label: 'python知识框架搭建',
                        active: true,
                        details: [
                            {
                                title: '知识点',
                                contents: [
                                    'python基础知识',
                                    '面向对象编程',
                                    'python对外部文件的读写',
                                    '理解面向对象程序设计思想，掌握Python开发实战'
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                outline: 'UI自动化测试',
                list: [
                    {
                        label: 'web端自动化测试项目实战',
                        details: [
                            {
                                title: '知识点',
                                contents: [
                                    '自动化测试理论',
                                    'selenium简介及web测试环境搭建',
                                    '8种定位方式、复杂页面的元素的定位',
                                    '线性代码编写',
                                    '公共、业务模块封装',
                                    '引入unittest框架封装测试套并发送测试报告',
                                    '利用jenkins搭建无人值守测试平台',
                                    '熟练掌握互联网自动化测试工具的测试脚本开发，主流测试框架设计，以及持续集成的构建技术'
                                ]
                            }
                        ]
                    },
                    {
                        label: '移动端自动化测试项目实战',
                        details: [
                            {
                                title: '知识点',
                                contents: [
                                    '移动端自动化知识科普',
                                    'adb命令讲解',
                                    '移动端测试环境搭建及分析',
                                    '移动端线性脚本页面封装',
                                    '引入unittest框架封装测试套并发送测试报告',
                                    '利用jenkins搭建无人值守测试平台',
                                    '移动端性能测试(monkey、GT)',
                                    '掌握系统测试计划写作要点，进行实战项目的系统测试计划写作，制定测试策略',
                                    '掌握如何描述需要测试的特性、测试的方法、测试环境的规划、测试工具的设计和选择、测试用例设计方法、测试代码设计等测试方案内容',
                                    '熟练掌握移动端自动化测试工具的测试脚本开发，主流测试框架设计，以及持续集成的构建技术，移动端性能测试及压力测试'
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                outline: 'API测试',
                list: [
                    {
                        label: 'API手工及自动化测试项目实战',
                        details: [
                            {
                                title: '知识点',
                                contents: [
                                    'API测试概念简介',
                                    'HTTP协议、ISO七层协议、RESTful风格API概述',
                                    '抓包工具charles安装、破解、使用',
                                    '工具postman、RESTClient、Jmeter的使用',
                                    'API测试文档使用及API测试用例编写',
                                    '利用request模块完成API自动化测试',
                                    '利用jmeter完成API性能测试(原理、计划、业务建模、测试策略、结果分析)',
                                    '熟练掌握在大用户并发，海量数据情况下的接口自动化测试技术'
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                outline: '大数据测试',
                list: [
                    {
                        label: '大数据测试框架搭建',
                        details: [
                            {
                                title: '知识点',
                                contents: [
                                    '大数据测试基础和原理',
                                    '大数据项目过程模拟',
                                    '大数据测试环境搭建',
                                    '大数据测试工具使用',
                                    '推荐算法测试',
                                    '利用request模块完成API自动化测试',
                                    '利用jmeter完成API性能测试(原理、计划、业务建模、测试策略、结果分析)'
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                outline: 'Docker技术应用',
                list: [
                    {
                        label: '利用Docker完成测试环境搭建',
                        active: true,
                        details: [
                            {
                                title: '知识点',
                                contents: [
                                    'Docker理论基础',
                                    'Docker容器、镜像、注册中心常用命令讲解',
                                    'Docker基础环境搭建(Linux、mysql、tomcat)',
                                    '引入Dockerfile完成测试环境持续交付'
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                outline: '性能应用故障诊断',
                list: [
                    {
                        label: 'LoadRunner/Jmeter性能测试技术',
                        active: true,
                        details: [
                            {
                                title: '知识点',
                                contents: [
                                    '掌握性能测试工具的技术要点'
                                ]
                            }
                        ]
                    },
                    {
                        label: '性能分析技术',
                        details: [
                            {
                                title: '知识点',
                                contents: [
                                    '了解性能瓶颈的定位以及分析方法'
                                ]
                            }
                        ]
                    },
                    {
                        label: '服务器调优技术',
                        details: [
                            {
                                title: '知识点',
                                contents: [
                                    '了解流行的数据库，服务器的性能调优方法'
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
                    sidebarResult += '<li class="active" nav-index="' + index + '">'
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
                salary: '7930'
            },
            {
                time: '北京-第二期',
                salary: '8530'
            },
            {
                time: '北京-第三期',
                salary: '8320'
            },
            {
                time: '北京-第四期',
                salary: '8180'
            },
            {
                time: '西安-第一期',
                salary: '7320'
            },
            {
                time: '西安-第二期',
                salary: '7650'
            },
            {
                time: '西安-第三期',
                salary: '7590'
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
                $('#swiper-wrapper-salary').html(result);
                new Swiper('#swiper-container-salary', {
                    loop: true,
                    calculateHeight : true,
                    pagination : '.test-salary-pagination',
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
                        url: './src/images/students/xy-14.png',
                        name: '陈*馨',
                        company: '百度',
                        salary: '16000',
                        address: '云南贵州'
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
                        url: './src/images/students/xy-12.png',
                        name: '张*柯',
                        company: '飞凡',
                        salary: '17000',
                        address: '江苏省南充市'
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
                        url: './src/images/students/xy-16.png',
                        name: '杨*婷',
                        company: '天源',
                        salary: '15000',
                        address: '浙江湖州'
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
                        url: './src/images/students/xy-15.png',
                        name: '李*海',
                        company: '真有铺',
                        salary: '14000',
                        address: '山东济南'
                    }
                ]
            },
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
                        url: './src/images/students/xy-13.png',
                        name: '王*成',
                        company: '京东',
                        salary: '16000',
                        address: '四川重庆'
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
                        url: './src/images/students/xy-8.png',
                        name: '张*',
                        company: '车轮互联',
                        salary: '21000',
                        address: '江苏省徐州市'
                    },
                    {
                        url: './src/images/students/xy-10.png',
                        name: '张*强',
                        company: '神州租车',
                        salary: '14000',
                        address: '河南郑州'
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
                                                            + '<img src="./src/images/test-xy-border.png" alt="">'
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
                $('#swiper-wrapper-demeanour').html(result);
                new Swiper('#swiper-container-demeanour', {
                    loop: true,
                    calculateHeight : true,
                    pagination : '.demeanour-pagination',
                    slidesPerView: handelSlidesPerView().checkedUs,
                    slidesPerGroup : 1
                });
            }
        }
    }

    $('#test-understand-detail').on('click', function() {
        window.open(chatUrl);
    })
    $('#project-process-btn').on('click', function() {
        window.open(chatUrl);
    })
    // 测试开发课程介绍
    courseDetail.renderFn();
    // 选择我们
    checkedUs.renderFn();
    // 学生就业信息
    students.renderFn();
};