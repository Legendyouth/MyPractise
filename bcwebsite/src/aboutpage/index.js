window.onload = function() {
    var aboutNavClass = {
        // PC端可以加多个，移动端的设计只能放最多四个，如果需要增加tab，移动端的布局需要调整
        data: [
            {
                label: '公司介绍',
                active: true,
            },
            {
                label: '校园风景'
            },
            {
                label: '乘车路线'
            },
            {
                label: '岗位招聘'
            }
        ],
        renderFn: function() {
            var list = this.data;
            if (list && list.length > 0) {
                var result = '';
                list.forEach(function(item, index) {
                    result += '<li class="' + (item.active ? 'active' : '') + '">'
                            + '<span>' + item.label + '</span>'
                        + '</li>';
                });
                $('#about-nav').html(result);
                $('#about-nav > li').each(function(index, item) {
                    $(item).on('click', function(event) {
                        $('#about-nav > li').each(function(index1, item1) {
                            $(item1).removeClass('active');
                        })
                        $('#about-main-list > li').each(function(index2, item2) {
                            $(item2).removeClass('active');
                        })
                        $('#about-nav > li').eq(index).addClass('active');
                        $('#about-main-list > li').eq(index).addClass('active')
                    })
                })
            }
        }
    };
    var recruitmentList = {
        data: [
            {
                majorPosition: 'WEB前端',
                duty: {
                    label: '职责描述',
                    details: [
                        '1. 负责公司产品各业务的Web前端技术研发',
                        '2. 参与产品Web、前端技术基础框架、组件化和平台化的设计与研发工作',
                        '3. Web界面技术优化',
                        '4. Web前沿技术研究和新技术调研'
                    ]
                },
                subPosition: 'WEB前端工程师',
                jobRequirements: {
                    label: '任职要求',
                    details: [
                        '1. 精通JavaScript、HTML、CSS等Web前端技术',
                        '2. 精通Vue、jQuery等前端框架或类库',
                        '3. 熟悉Web前端组件化、模块化开发模式和前端构建等工程化',
                        '4. 了解至少一种Server端语言（Node.JS/PHP/Python/Java等）',
                        '5. 热爱互联网，对互联网产品和技术有浓厚的兴趣，热衷于追求技术极致与创新'
                    ]
                },
                salary: {
                    label: '薪资范围',
                    details: '20K-30K'
                },
                address: {
                    label: '工作地址',
                    details: '北京中关村软件园'
                }
            },
            {
                majorPosition: '产品经理',
                duty: {
                    label: '职责描述',
                    details: [
                        '1. 结合课程定位及公司商业目标，制定课程产品目标及规划',
                        '2. 综合运用内容、产品、运营手段，设计具体的课程迭代方案，并协调各端、各部门资源，推动功能上线，对课程产品的业绩目标负责',
                        '3. 关注运营数据、用户调研与反馈等，与教研部门相互配合，持续优化课程，提升学生学习效果，打造整体体验业内第一的课程产品'
                    ]
                },
                subPosition: '产品经理',
                jobRequirements: {
                    label: '任职要求',
                    details: [
                        '1. 2年以上相关工作经验，有课程产品相关经验者优先，或有语言学相关教学教研经验者优先',
                        '2. 具有清晰的逻辑思维框架，善于分析问题背后的真实和核心原因，能建立所负责产品目标与公司整体目标间的关联',
                        '3. 优秀的数据分析能力，数据驱动，并善于从数据发现问题并迭代优化',
                        '4. 优秀的项目管理能力，能把控项目的整体节奏与风险，对所负责的工作有强烈的责任心和进取心',
                        '5. 结果导向，极强的资源协调能力和推动力，具备卓越的沟通能力和团队协作精神',
                        '6. 有一定的技术知识，了解Java语言或熟悉SQL语句有加分'
                    ]
                },
                salary: {
                    label: '薪资范围',
                    details: '20K-35K'
                },
                address: {
                    label: '工作地址',
                    details: '北京东城区'
                }
            },
            {
                majorPosition: '高级产品经理',
                duty: {
                    label: '职责描述',
                    details: [
                        '1. 负责公司核心的产品，基于目标拆解，落地到具体产品迭代，协调资源，和运营营销、教学教研团队配合，达成目标',
                        '2. 与开发团队密切合作，积极主动把控产品进度、推进产品上线，并对结果进行验收，确保产品质量',
                        '3. 跟踪产品数据和用户反馈，深入实际运营，反复总结打磨，快速产品迭代',
                        '4. 进行相关产品知识和经验总结、积累，并在团队内分享，带领团队提升'
                    ]
                },
                subPosition: '高级产品经理',
                jobRequirements: {
                    label: '任职要求',
                    details: [
                        '1. 至少2年以上 一线在线教育公司独立负责产品的能力和经验，至少一年以上带产品团队的经验。【必要条件】',
                        '2. 有课程辅导类产品经验，对K12在线教育有深刻理解。【必要条件】',
                        '3. 系统性思考，思路清晰，学习和单兵作战能力强'
                    ]
                },
                salary: {
                    label: '薪资范围',
                    details: '30K-50K'
                },
                address: {
                    label: '工作地址',
                    details: '朝阳区'
                }
            },
            {
                majorPosition: 'WEB前端开发',
                jobRequirements: {
                    label: '任职要求',
                    details: [
                        '1. 具有扎实的html、javascript、css等前端基础',
                        '2. 熟悉各种Web前端技术和标准(Javascript/ES6、HTML/HTML5、CSS/CSS3)，熟悉页面架构和布局，对表现与数据分离、Web语义化等有深刻理解',
                        '3. Reac或Vue前端框架的开发经验',
                        '4. 熟练掌握reactjs等主流框架进行SPA开发，熟练使用less或sass进行前端开发',
                        '5. 具备移动端Hybrid APP开发经验；熟悉java语言，了解javaweb开发'
                    ]
                },
                salary: {
                    label: '薪资范围',
                    details: '11K-20K'
                },
                address: {
                    label: '工作地址',
                    details: '北京海淀区青政大厦'
                }
            },
            {
                majorPosition: 'WEB前端',
                duty: {
                    label: '职责描述',
                    details: [
                        '1. 依据产品需求完成高质量的Web前端开发和维护',
                        '2. 对具体的产品进行性能优化'
                    ]
                },
                subPosition: 'WEB前端',
                jobRequirements: {
                    label: '任职要求',
                    details: [
                        '1. 2年以上pc前端开发经验，需统招本科学历；',
                        '2. 熟练应用JQuery、AngularJS等前端框架，熟练掌握jsp /js编程，有使用JQM、jqMobi前端框架开发经验优先，有自己开发过JS框架经验者优先',
                        '3. 精通web前端技术，包括HTML、XML、CSS、Javascript、Ajax等开发技术；'
                    ]
                },
                salary: {
                    label: '薪资范围',
                    details: '9K-18K'
                },
                address: {
                    label: '工作地址',
                    details: '北京海淀区永澄北路'
                }
            },
            {
                majorPosition: '软件测试工程师',
                duty: {
                    label: '职责描述',
                    details: [
                        '1. 分析业务测试需求，编写金融核心系统测试方案，制定测试计划',
                        '2. 编写金融核心系统测试文档和测试用例',
                        '3. 搭建项目测试环境、更新测试软件，部署测试系统'
                    ]
                },
                subPosition: '软件测试工程师',
                jobRequirements: {
                    label: '任职要求',
                    details: [
                        '1. 能够对测试功能的业务场景进行梳理和分析，进行测试场景的设计，能够独立思考',
                        '2. 能够结合灰盒测试方法，通过日志分析，独立定位问题',
                        '3. 掌握接口的基本测试方法',
                        '4. 掌握基本sql语句，可独立编写增删改查语句',
                        '5. 有开发基础优先',
                        '6. 具有较强的沟通能力、学习能力，有一定的项目测试经验，团队意识强'
                    ]
                },
                salary: {
                    label: '薪资范围',
                    details: '12K-18K'
                },
                address: {
                    label: '工作地址',
                    details: '北京丰台区'
                }
            },
            {
                majorPosition: 'WEB前端工程师',
                duty: {
                    label: '职责描述',
                    details: [
                        '1. 负责微信公众号及小程序业务研发工作',
                        '2. 负责搭建前端框架、通用组件方案制定、性能优化相关工作',
                        '3. 负责提升研发和运营效率的通用组件、工具和平台的前、后端开发工作'
                    ]
                },
                subPosition: 'WEB前端工程师',
                jobRequirements: {
                    label: '任职要求',
                    details: [
                        '1. 本科及以上学历，计算机、通信等相关专业',
                        '2. 熟练掌握 JavaScript，CSS，HTML，DOM、绘图、动画、协议、安全、网络、性能优化等前端技术，对主流前端框架（ React \ Vue \ Angular 等）至少一种有深入应用并深入理解其设计原理',
                        '3. 原生JS基础扎实，熟练使用Vue、Webpack、Npm、Git等工具或框架',
                        '4. 具有较强的分析和解决问题的能力，有较强的承压能力',
                        '5. 积极乐观主动，责任心强，工作认真细致，具备良好的服务意识和团队沟通与协作能力',
                        '6. 热爱前端技术，有较强的学习能力，有强烈的求知欲、好奇心和进取心 ，能及时关注和学习业界最新的前端技术'
                    ]
                },
                salary: {
                    label: '薪资范围',
                    details: '18K-35K'
                },
                address: {
                    label: '工作地址',
                    details: '北京朝阳区'
                }
            }
        ],
        renderFn: function() {
            var list = this.data;
            if (list && list.length > 0) {
                var result = '';
                list.forEach(function(item, index) {
                    JSON.stringify(item) !== '{}' && (result += '<li>'
                        + '<section>'
                            + (item.majorPosition ? '<h2>' + item.majorPosition + '</h2>' : '')
                            + (item.duty && item.duty.label ? '<p>' + item.duty.label + '：</p>' : '')
                            + (item.duty && item.duty.details ? '<ul>'
                                + item.duty.details.map(function(item1, index) {
                                    return '<li>' + item1 + '</li>'
                                }).join('')
                            + '</ul>' : '')
                        + '</section>'
                        + '<section>'
                            + (item.subPosition ? '<h3><span></span>' + item.subPosition + '</h3>': '')
                            + (item.jobRequirements && item.jobRequirements.label ? '<p>' + item.jobRequirements.label + '：</p>' : '')
                            + (item.jobRequirements && item.jobRequirements.details ? '<ul>'
                                + item.jobRequirements.details.map(function(item1, index) {
                                    return '<li>' + item1 + '</li>'
                                }).join('')
                            + '</ul>' : '')
                        + '</section>'
                        + '<section>'
                            + (item.salary && item.salary.label ? '<h3><span></span>' + item.salary.label + '</h3>' : '')
                            + (item.salary && item.salary.details ? '<p>' +item.salary.details+ '</p>' : '')
                        + '</section>'
                        + '<section>'
                            + (item.address && item.address.label ? '<h3><span></span>' + item.address.label + '</h3>' : '')
                            + (item.address && item.address.details ? '<p>' +item.address.details+ '</p>' : '')
                        + '</section>'
                    + '</li>');
                })
                $('#recruitment-list').html(result);
            }
        }
    }
    var busLine = {
        data: [
            {
                campus: {
                    name: '北京总部',
                    eName: 'Beijing Headquarters'
                },
                contact: {
                    iphoneLabel: '报名电话',
                    phone: '400-850-1113',
                    addressLabel: '通讯地址',
                    address: '北京昌平区市政培训中心'
                },
                busLine: {
                    title: '北京乘车路线',
                    stations: [
                        {
                            label: '北京站',
                            style: 'color-blue',
                            line: '地铁2号线-13号线-昌平线南邵站市政培训中心'
                        },
                        {
                            label: '北京南站',
                            style: 'color-red',
                            line: '地铁4号线-13号线-昌平线南邵站市政培训中心'
                        },
                        {
                            label: '北京西站',
                            style: 'color-orange',
                            line: '地铁9号线-6号线-8号线-昌平线南邵站市政培训中心'
                        }
                    ]
                },
                mapUrl: './src/images/beijing.png'
            },
            {
                campus: {
                    name: '西安分校',
                    eName: 'Xi`an Branch'
                },
                contact: {
                    iphoneLabel: '报名电话',
                    phone: '400-850-1113',
                    addressLabel: '通讯地址',
                    address: '西安市雁塔区金辉·环球中心B座19层'
                },
                busLine: {
                    title: '西安乘车路线',
                    stations: [
                        {
                            label: '西安站',
                            style: 'color-blue',
                            line: '611路/603路-地铁4号线'
                        },
                        {
                            label: '西安北站',
                            style: 'color-red',
                            line: '地铁2号线-地铁4号线'
                        },
                        {
                            label: '西安南站',
                            style: 'color-orange',
                            line: 'k920路/920路/918路-242路'
                        }
                    ]
                },
                mapUrl: './src/images/xian.png'
            }
        ],
        renderFn: function() {
            var list = this.data;
            if (list && list.length > 0) {
                var result = '';
                list.forEach(function(item, index) {
                    result += '<section class="bj-wrap">'
                            + '<header>'
                                + (item.campus && item.campus.name ? '<h3>' + item.campus.name + '</h3>' : '')
                                + (item.campus && item.campus.eName ? '<p>' + item.campus.eName + '</p>' : '')
                            + '</header>'
                            + '<div class="detail clear-fix">'
                                + '<section class="line">'
                                    + '<ol>'
                                        + '<li class="first">'
                                            + '<h3>' + item.contact.iphoneLabel + '：<span id="' + item.contact.id + '">'
                                            + (item.contact.phone ? item.contact.phone : '')+ '</span></h3>'
                                            + '<h3>' + item.contact.addressLabel + '：' + item.contact.address + '</h3>'
                                        + '</li>'
                                        + '<li>'
                                            + '<h4>' + item.busLine.title + '</h4>'
                                                + (item.busLine.stations.map(function(item1, index) {
                                                    return '<p class="' + item1.style + '">' + item1.label + "：" + item1.line + '</p>';
                                                }).join(''))
                                        + '</li>'
                                    + '</ol>'
                                + '</section>'
                                + '<section class="map">'
                                    + '<img src="' + item.mapUrl + '" alt="">'
                                + '</section>'
                            + '</div>'
                        + '</section>'
                });
                $('#bus-line').html(result);
            }
        }
    }
    // 子导航
    aboutNavClass.renderFn();
    // 招聘信息
    recruitmentList.renderFn();
    // 乘车路线
    busLine.renderFn();
};