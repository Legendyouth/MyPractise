function _isIE8() {
    var userAgent = navigator.userAgent;
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        return fIEVersion;
    }
}
if (_isIE8() <= 8) {
    // 不想兼容i8
    var timer = setTimeout(function() {
        document.write('您的浏览器版本过低，请更新浏览器版本或更换浏览器进行预览');
        clearTimeout(timer);
    }, 500);   
} else {
    // 这个项目用的是swiper2，问题着实不少，并且由于开发周期和能力问题，写了一个别人无法维护的代码，很害羞

    // 服务器上会有缓存问题，可能为了避免高并发吧，所以目前提交代码，js都加时间戳了，和上次不一样就行，不然服务器不更新
    // 只要更改外链形式的文件，需要加时间戳，图片也是，不然客户端缓存，不更新，不建议更改meta标签禁止缓存

    // 修改代码顺手修改下注释，以免造成误解

    var config = {
        // http://www.beichengedu.com
        host: 'http://www.beichengedu.com',
        // 改了这里的电话可以修改大部分地方的，但是不包括关于我们乘车路线里面的
        phone: '400-850-1113',
        qq: '3090866807',
        // 这个是个工具的地址，叫什么商务通，每个html中需要加一段代码，就可以，这个链接是用来打开新聊天窗口的
        communication: 'http://dht.zoosnet.net/LR/Chatpre.aspx?id=DHT41913876&lng=cn'
    }
    var clientWidth = document.documentElement.clientWidth;
    var handelSlidesPerView = function () {
        var result = {};
        if (clientWidth > 768) {
            result = {
                classOpeningPlan: 3,
                projectIntroduction: 6
            }
        }
        else {
            result = {
                classOpeningPlan: 1,
                projectIntroduction: 2
            }
        }
        return result;
    }

    // 向上滚动
    var timer = null;
    var autoScroll = function(elementContainer, scrollHeight) {
        var count = 0;
        clearInterval(timer);
        timer = setInterval(function () {
            count += 1;
            elementContainer.style.top = -count + 'px';
            if (Math.abs(elementContainer.offsetTop) >= scrollHeight) {
                var rmElement = elementContainer.removeChild(elementContainer.firstElementChild);
                elementContainer.appendChild(rmElement);
                elementContainer.style.top = 0;
                count = 0;
            }
        }, 30);
    }
    var setBrowserIcon = {
        data: {
            url: './src/images/tab-logo.png'
        },
        renderFn: function () {
            var linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet icon';
            linkElement.href = this.data.url;
            linkElement.type = 'image/x-icon';
            document.getElementsByTagName('head')[0].appendChild(linkElement);
        }
    }
    var renderHeader = function () {
        var result = '<div class="common-header-wrap">'
                        + '<header class="header">'
                            + '<img src="./src/images/header.png?_t20190523" alt="">'
                            + '<div class="nav-btn" id="nav-btn">'
                                + '<span></span>'
                                + '<span></span>'
                                + '<span></span>'
                            + '</div>'
                            + '<div class="phone">'
                                + '<img src="./src/images/phone.png" alt="">'
                                + '<span id="head-phone"></span>'
                            + '</div>'
                        + '</header>'
                        + '<div class="mobile-nav" id="mobile-nav"></div>'
                        + '<nav class="nav" id="pc-head-nav"></nav>'
                    + '</div>'
                    + '<div class="offset-box"></div>'
                    + '<div class="swiper-container" id="swiper-container-banner">'
                        + '<div class="swiper-wrapper" id="swiper-wrapper-banner"></div>'
                        + '<div class="pagination banner-pagination"></div>'
                    + '</div>'
                    + '<a class="mobile-phone" id="mobile-phone">'
                        + '<img src="./src/images/phone.png" alt="">'
                        + '<span>'
                            + '咨询电话<i id="mobile-nav-phone"></i>'
                        + '</span>'
                    + '</a>'
                    + '<a class="mobile-qq" id="mobile-qq">'
                        + '<img src="./src/images/qq.png" alt="">'
                        + '<span>'
                            + '咨询Q Q<i id="mobile-nav-qq"></i>'
                        + '</span>'
                    + '</a>';
        $('#common-header-container').html(result);
        var navClass = {
            // 设置页面导航，名称和跳转的页面地址即可，flag为true则不进行拼接站内域名，直接跳转url的内容
            data: [
                {
                    label: '首页',
                    url: '/index.html'
                },
                {
                    label: 'H5大前端',
                    url: '/major.html'
                },
                {
                    label: '测试开发',
                    url: '/test.html'
                },
                {
                    label: '师资力量',
                    url: '/teachers.html'
                },
                {
                    label: '就业信息',
                    url: '/employment.html'
                },
                {
                    label: '学员笔记',
                    url: '/studentnotes.html'
                },
                {
                    label: '关于我们',
                    url: '/about.html'
                }
            ],
            renderFn: function () {
                var list = this.data;
                if (list && list.length > 0) {
                    var result = '<ul class="clear-fix">';
                    list.forEach(function (item, index) {
                        result += '<li class="' + (index === list.length - 1 ? 'last' : '') + '">' + item.label + '</li>';
                    });
                    $('#mobile-nav').html(result + '</ul>');
                    $('#pc-head-nav').html(result + '</ul>');

                    $('#nav-btn').on('click', function () {
                        $('.mobile-nav').slideToggle();
                    });

                    $('#mobile-nav li').each(function (index, item) {
                        $(item).on('click', function () {
                            $('.mobile-nav').slideToggle();
                            var href = list[index].flag ? list[index].url : config.host + list[index].url;
                            window.open(href);
                        })
                    })
                    var navWrapWidth = 10;
                    $('#pc-head-nav li').each(function (index, item) {
                        navWrapWidth += item.offsetWidth;
                        $(item).on('click', function (event) {
                            window.open(list[index].flag ? list[index].url : config.host + list[index].url);
                        })
                    })
                    $('#pc-head-nav >ul').css('width', navWrapWidth);
                }
            }
        }

        var bannerClass = {
            // 设置每一个页面的banner，key为页面的名称，数组中的每一项是一个banner图
            data: {
                'index': [
                    './src/images/banner1.png',
                    './src/images/banner2.png',
                    './src/images/banner3.png'
                ],
                'major': [
                    './src/images/banner1.png'
                ],
                'test': [
                    './src/images/banner3.png'
                ],
                'teachers': [
                    './src/images/banner4.png'
                ],
                'studentnotes': [
                    './src/images/banner6.png'
                ],
                'employment': [
                    './src/images/banner5.png'
                ],
                'about': [
                    './src/images/banner1.png',
                    './src/images/banner2.png',
                    './src/images/banner3.png'
                ]
            },
            renderFn: function () {
                var result = '';
                // 每一个data的key对应一个页面的名称
                var pathname = window.location.pathname
                var pageName = /\w+\.html/.exec(pathname);
                var fileName = pageName ? pageName[0].split('.')[0] : 'index';
                var bannerList = this.data[fileName] || [];
                var isMove = bannerList.length > 1;
                bannerList.forEach(function (item, index) {
                    result += '<div class="swiper-slide">'
                    + '<img src="' + item + '" alt="">'
                    + '</div>';
                });
                $('#swiper-wrapper-banner').html(result);
                new Swiper('#swiper-container-banner', {
                    autoplay: isMove ? 3500 : false,
                    loop: isMove ? true : false,
                    autoplayDisableOnInteraction: false,
                    calculateHeight: true,
                    pagination: isMove ? '.banner-pagination' : ''
                });
            }
        }

        // banner
        bannerClass.renderFn();
        // 页面导航
        navClass.renderFn();
        // 吸个顶
        // 在移动端感觉需要吸顶，因为导航是收起的，用户甚至不知道还有其他页面
        // pc感觉如果吸顶，导航再加上头图占屏比达到4/1，太高，体验不咋地，小一点的屏看到的东西太少了
        
        if (clientWidth <= 768) {
            document.onscroll = function() {
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                var headerWrap = $('.common-header-wrap');
                $('.offset-box').css('height', headerWrap[0].offsetHeight + 'px');
                if(scrollTop > 0) {
                    $('.offset-box').show();
                    $(headerWrap).addClass('common-fixed-header');
                }
                else {
                    $('.offset-box').hide();
                    $(headerWrap).removeClass('common-fixed-header');
                }
            }
        }
    }
    // 渲染头部
    renderHeader();
    // 设置自适应学员就业信息导航高度
    setTimeout(function() {
        var employmentListNav = $('.nav .employment-list-nav');
        if (employmentListNav.length > 0) {
            if(clientWidth <= 1200) {
                employmentListNav && employmentListNav.css('height', 34 * employmentListNav[0].childElementCount + 'px');
            }
            else  {
                employmentListNav && employmentListNav.css('height', 68 + 'px');
            }
        }
    }, 100);
    
    var classOpeningPlan = {
        data: [
            {
                label: 'h5大前端',
                batch: 1905,
                startDate: '2019-05-23',
                address: '北京校区',
                status: false
            },
            {
                label: 'h5大前端',
                batch: 1906,
                startDate: '2019-06-20',
                address: '北京校区',
                status: true
            },
            {
                label: 'h5大前端',
                batch: 1906,
                startDate: '2019-06-06',
                address: '西安校区',
                status: true
            },
            {
                label: '测试开发',
                batch: 1906,
                startDate: '2019-06-20',
                address: '北京校区',
                status: true
            },
            {
                label: '测试开发',
                batch: 1906,
                startDate: '2019-06-06',
                address: '西安校区',
                status: true
            }
        ],
        renderFn: function () {
            var list = this.data;
            if (list && list.length > 0) {
                var result = '';
                list.forEach(function (item, index) {
                    result += '<div class="swiper-slide">'
                                + '<ul class="clear-fix class-list-wrap" id="class-list-wrap">'
                                    + '<li>'
                                        + '<div class="title clear-fix">'
                                            + '<h3>' + item.label + '</h3>'
                                            + '<span>' + item.batch + '期</span>'
                                        + '</div>'
                                        + '<div class="start-time">'
                                            + '开课时间：' + item.startDate
                                        + '</div>'
                                        + '<section class="entrance-details clear-fix">'
                                            + '<div class="entrance">'
                                                + '<p class="address">' + item.address + '</p>'
                                                + '<input class="sign-up-entry ' + (!item.status ? 'btn-disabled' : '') + '" type="button" ' + (!item.status ? 'disabled' : '') + ' value="立即抢座">'
                                            + '</div>'
                                            + '<div class="detail">'
                                                + '<img src="' + (item.status ? './src/images/zhaoshengzhong.png' : './src/images/yijieshu.png') + '" alt="">'
                                            + '</div>'
                                        + '</section>'
                                + '</li>'
                            + '</ul>'
                        + '</div>';
                });
                $('#swiper-wrapper-class').html(result);
                new Swiper('#swiper-container-class', {
                    calculateHeight: true,
                    autoplay: 3500,
                    loop: true,
                    autoplayDisableOnInteraction: false,
                    pagination: '.class-pagination',
                    slidesPerView: handelSlidesPerView().classOpeningPlan,
                    slidesPerGroup: 1,
                });
                $('.sign-up-entry').on('click', function () {
                    window.open(config.communication);
                })
            }
        }
    }

    
    // 这是就业信息的数据，就是页面中滚动的那个东西，有姓名，加了星星，有薪资的那个
    var employmentClass = {
        data: [
            {
                batch: '第一期',
                list: [
                    {
                        time: '2018.10.8',
                        name: '刘婷婷',
                        sex: '女',
                        company: '盈科旅游',
                        jobs: '前端工程师',
                        salary: '14000',
                        city: '北京'
                    },
                    {
                        time: '2018.10.20',
                        name: '董颖',
                        sex: '女',
                        company: '北京外研讯飞科技有限公司',
                        jobs: '前端工程师',
                        salary: '12000',
                        city: '北京'
                    },
                    {
                        time: '2018.10.19',
                        name: '陈俊武',
                        sex: '男',
                        company: '亚信科技（中国）有限公司',
                        jobs: '前端工程师',
                        salary: '8000',
                        city: '北京'
                    },
                    {
                        time: '2018.10.9',
                        name: '王楠',
                        sex: '女',
                        company: '成**创',
                        jobs: '前端工程师',
                        salary: '13000',
                        city: '北京'
                    },
                    {
                        time: '2018.10.21',
                        name: '李春钞',
                        sex: '男',
                        company: '东**建',
                        jobs: '前端工程师',
                        salary: '12000',
                        city: '北京'
                    },
                    {
                        time: '2018.10.18',
                        name: '王腾飞',
                        sex: '男',
                        company: '宏图世展',
                        jobs: '前端工程师',
                        salary: '12000',
                        city: '杭州'
                    },
                    {
                        time: '2018.10.9',
                        name: '谢金龙',
                        sex: '男',
                        company: '华住酒店',
                        jobs: '前端工程师',
                        salary: '13000',
                        city: '北京'
                    },
                    {
                        time: '2018.10.18',
                        name: '李影',
                        sex: '男',
                        company: '图**智',
                        jobs: '前端工程师',
                        salary: '11000',
                        city: '上海'
                    },
                    {
                        time: '2018.10.11',
                        name: '秦有志',
                        sex: '男',
                        company: '他她岛文化传播有限公司',
                        jobs: '前端工程师',
                        salary: '14000',
                        city: '北京'
                    },
                    {
                        time: '2018.10.19',
                        name: '何晓娅',
                        sex: '女',
                        company: '辉煌国际',
                        jobs: '前端工程师',
                        salary: '8000',
                        city: '北京'
                    },
                    {
                        time: '2018.10.10',
                        name: '崔宇杰',
                        sex: '男',
                        company: '作**科',
                        jobs: '前端工程师',
                        salary: '12000',
                        city: '杭州'
                    },
                    {
                        time: '2018.10.23',
                        name: '田昌平',
                        sex: '男',
                        company: '泰州市慧钢电子商务有限公司',
                        jobs: '前端工程师',
                        salary: '10000',
                        city: '上海'
                    },
                    {
                        time: '2018.10.14',
                        name: '薛欢',
                        sex: '男',
                        company: '大易云计算股份有限公司 ',
                        jobs: '前端工程师',
                        salary: '10000',
                        city: '北京'
                    },
                    {
                        time: '2018.10.18',
                        name: '薛宇航',
                        sex: '男',
                        company: '北京易阳博展文化传媒有限公司',
                        jobs: '前端工程师',
                        salary: '14000',
                        city: '北京'
                    },
                    {
                        time: '2018.10.22',
                        name: '朱逸凡',
                        sex: '男',
                        company: '沈阳示剑网络科技有限公司',
                        jobs: '前端工程师',
                        salary: '10000',
                        city: '北京'
                    },
                    {
                        time: '2018.10.16',
                        name: '李晓佳',
                        sex: '女',
                        company: '北京小二信息技术有限公司',
                        jobs: '前端工程师',
                        salary: '12000',
                        city: '北京'
                    }
                ]
            },
            {
                batch: '第二期',
                list: [
                    {
                        time: '2018.12.8',
                        name: '孙涛',
                        sex: '男',
                        company: '联创世界北京科技有限公司',
                        jobs: '前端工程师',
                        salary: '13000',
                        city: '北京'
                    },
                    {
                        time: '2018.12.20',
                        name: '刘婵婵',
                        sex: '女',
                        company: '沈阳民航东北凯亚有限公司',
                        jobs: '前端工程师',
                        salary: '13800',
                        city: '沈阳'
                    },
                    {
                        time: '2018.12.2',
                        name: '齐广鑫',
                        sex: '男',
                        company: '美龙茶饮有限责任公司',
                        jobs: '前端工程师',
                        salary: '12000',
                        city: '北京'
                    },
                    {
                        time: '2018.12.11',
                        name: '牟博兴',
                        sex: '男',
                        company: '正元地理信息有限责任公司',
                        jobs: '前端工程师',
                        salary: '10000',
                        city: '北京'
                    },
                    {
                        time: '2018.12.25',
                        name: '郭海',
                        sex: '男',
                        company: '北京盛世星火科技有限公司',
                        jobs: '前端工程师',
                        salary: '15000',
                        city: '北京'
                    },
                    {
                        time: '2018.12.18',
                        name: '贾玉峰',
                        sex: '男',
                        company: '普林科技（健康医疗分部)',
                        jobs: '前端工程师',
                        salary: '13000',
                        city: '北京'
                    },
                    {
                        time: '2018.12.8',
                        name: '王玉东',
                        sex: '男',
                        company: '北京腾信软创科技股份有限公司',
                        jobs: '前端工程师',
                        salary: '11000',
                        city: '北京'
                    },
                    {
                        time: '2018.12.18',
                        name: '李贵鹏',
                        sex: '男',
                        company: '朝阳区将台酒仙桥东路牡丹集团m8',
                        jobs: '前端工程师',
                        salary: '14000',
                        city: '北京'
                    },
                    {
                        time: '2018.12.6',
                        name: '李倩',
                        sex: '女',
                        company: '西安软通动力',
                        jobs: '前端工程师',
                        salary: '9800',
                        city: '西安'
                    },
                    {
                        time: '2018.12.21',
                        name: '张哲文',
                        sex: '男',
                        company: '紫光软件电商事业部',
                        jobs: '前端工程师',
                        salary: '15000',
                        city: '北京'
                    },
                    {
                        time: '2018.12.10',
                        name: '刘京仙',
                        sex: '男',
                        company: '中软国际',
                        jobs: '前端工程师',
                        salary: '12000',
                        city: '杭州'
                    },
                    {
                        time: '2018.12.23',
                        name: '董航赐',
                        sex: '男',
                        company: '市慧电子商务有限公司',
                        jobs: '前端工程师',
                        salary: '10000',
                        city: '上海'
                    },
                    {
                        time: '2018.12.19',
                        name: '李海霞',
                        sex: '女',
                        company: '大成计算股份有限公司 ',
                        jobs: '前端工程师',
                        salary: '13000',
                        city: '北京'
                    },
                    {
                        time: '2018.12.18',
                        name: '高艳红',
                        sex: '男',
                        company: '北京博展文化有限公司',
                        jobs: '前端工程师',
                        salary: '12000',
                        city: '北京'
                    },
                    {
                        time: '2018.12.22',
                        name: '苏艳霞',
                        sex: '女',
                        company: '美城网络科技有限公司',
                        jobs: '前端工程师',
                        salary: '9000',
                        city: '北京'
                    },
                    {
                        time: '2018.12.16',
                        name: '刘越南',
                        sex: '男',
                        company: '北京智信信息技术有限公司',
                        jobs: '前端工程师',
                        salary: '12000',
                        city: '北京'
                    }
                ]
            },
            {
                batch: '第三期',
                list: [
                    {
                        time: '2019.2.9',
                        name: '连洁',
                        sex: '男',
                        company: '北京中油瑞飞信息技术有限责任公司',
                        jobs: '前端工程师',
                        salary: '13000',
                        city: '北京'
                    },
                    {
                        time: '2019.2.20',
                        name: '王亮',
                        sex: '男',
                        company: '华钦科技/外派投中集团',
                        jobs: '前端工程师',
                        salary: '17000',
                        city: '北京'
                    },
                    {
                        time: '2019.2.13',
                        name: '王波波',
                        sex: '男',
                        company: '北京巴别时代科技有限公司',
                        jobs: '前端工程师',
                        salary: '16000',
                        city: '北京'
                    },
                    {
                        time: '2019.2.11',
                        name: '杨瀚林',
                        sex: '男',
                        company: '北京行知合一科技有限公司',
                        jobs: '前端工程师',
                        salary: '18000',
                        city: '北京'
                    },
                    {
                        time: '2019.2.25',
                        name: '李明珠',
                        sex: '女',
                        company: '人保金服',
                        jobs: '前端工程师',
                        salary: '18000',
                        city: '北京'
                    },
                    {
                        time: '2019.2.18',
                        name: '王国馨',
                        sex: '女',
                        company: '北京瑞友科技股份有限公司/外派龙城地产',
                        jobs: '前端工程师',
                        salary: '15000',
                        city: '北京'
                    },
                    {
                        time: '2019.2.12',
                        name: '闫伟',
                        sex: '男',
                        company: '众签科技有限公司',
                        jobs: '前端工程师',
                        salary: '15000',
                        city: '北京'
                    },
                    {
                        time: '2019.2.18',
                        name: '孙书霞',
                        sex: '女',
                        company: '上海翠宁科技有限公司',
                        jobs: '前端工程师',
                        salary: '18000',
                        city: '上海'
                    },
                    {
                        time: '2019.2.11',
                        name: '史珊珊',
                        sex: '女',
                        company: '北京汇能精电科技股份有限公司深圳分公司(出差)',
                        jobs: '前端工程师',
                        salary: '14000',
                        city: '深圳'
                    },
                    {
                        time: '2019.2.21',
                        name: '冯玲',
                        sex: '女',
                        company: '北京易真学思教育科技有限公司(好未来—学而思培优）',
                        jobs: '前端工程师',
                        salary: '18000',
                        city: '北京'
                    },
                    {
                        time: '2019.2.10',
                        name: '阴文文',
                        sex: '女',
                        company: '北京路德科技有限公司',
                        jobs: '前端工程师',
                        salary: '12000',
                        city: '北京'
                    },
                    {
                        time: '2019.2.23',
                        name: '王梦丽',
                        sex: '女',
                        company: '蜂网供应链管理(上海)有限公司',
                        jobs: '前端工程师',
                        salary: '14000',
                        city: '北京'
                    },
                    {
                        time: '2019.2.19',
                        name: '王阿婷',
                        sex: '女',
                        company: '北京爱视界科技有限公司（现在布卡互动）',
                        jobs: '前端工程师',
                        salary: '12000',
                        city: '北京'
                    },
                    {
                        time: '2019.2.18',
                        name: '王智',
                        sex: '男',
                        company: '观棋科技/外派力码科技',
                        jobs: '前端工程师',
                        salary: '18000',
                        city: '北京'
                    },
                    {
                        time: '2019.2.22',
                        name: '张鹏飞',
                        sex: '男',
                        company: '圣邦创信/外派中民投科技',
                        jobs: '前端工程师',
                        salary: '13000',
                        city: '北京'
                    },
                    {
                        time: '2019.2.16',
                        name: '杨再祥',
                        sex: '男',
                        company: '北京慧图科技股份有限公司',
                        jobs: '前端工程师',
                        salary: '16000',
                        city: '北京'
                    },
                    {
                        time: '2019.2.20',
                        name: '王乐凯',
                        sex: '男',
                        company: '赛雅国际',
                        jobs: '前端工程师',
                        salary: '14000',
                        city: '北京'
                    },
                    {
                        time: '2019.2.13',
                        name: '赵宏丽',
                        sex: '女',
                        company: '北京美科公司/外派北京融聚世界网络科技有限公司',
                        jobs: '前端工程师',
                        salary: '13000',
                        city: '北京'
                    },
                    {
                        time: '2019.2.16',
                        name: '张腾',
                        sex: '男',
                        company: '上海亲邻信息科技有限公司',
                        jobs: '前端工程师',
                        salary: '20000',
                        city: '上海'
                    },
                    {
                        time: '2019.2.10',
                        name: '万明月',
                        sex: '女',
                        company: '北京活动时文化传媒有限公司',
                        jobs: '前端工程师',
                        salary: '18000',
                        city: '北京'
                    },
                    {
                        time: '2019.2.18',
                        name: '李彩霞',
                        sex: '女',
                        company: '北斗映画',
                        jobs: '前端工程师',
                        salary: '15000',
                        city: '北京'
                    },
                    {
                        time: '2019.2.26',
                        name: '周媛媛',
                        sex: '女',
                        company: '亚环（北京）国际投资基金管理有限公司',
                        jobs: '前端工程师',
                        salary: '10000',
                        city: '北京'
                    },
                    {
                        time: '2019.2.17',
                        name: '杨森',
                        sex: '男',
                        company: '北京优谱教育科技发展有限公司',
                        jobs: '前端工程师',
                        salary: '9000',
                        city: '北京'
                    },
                    {
                        time: '2019.2.23',
                        name: '张凯',
                        sex: '男',
                        company: '中软国际',
                        jobs: '前端工程师',
                        salary: '13000',
                        city: '北京'
                    },
                    {
                        time: '2019.2.17',
                        name: '郝泽文',
                        sex: '男',
                        company: '北京巴别时代科技有限公司',
                        jobs: '前端工程师',
                        salary: '17000',
                        city: '北京'
                    }
                ]
            },
            {
                batch: '第四期',
                list: [
                    {
                        time: '2019.4.8',
                        name: '宋永刚',
                        sex: '男',
                        company: '世界北京科技有限公司',
                        jobs: '前端工程师',
                        salary: '12000',
                        city: '北京'
                    },
                    {
                        time: '2019.4.2',
                        name: '付聪美子',
                        sex: '女',
                        company: '凯亚责任有限公司',
                        jobs: '前端工程师',
                        salary: '13800',
                        city: '北京'
                    },
                    {
                        time: '2019.4.18',
                        name: '邢洁檀',
                        sex: '女',
                        company: '美龙有限责任公司',
                        jobs: '前端工程师',
                        salary: '13000',
                        city: '北京'
                    },
                    {
                        time: '2019.4.13',
                        name: '陈婷婷',
                        sex: '女',
                        company: '美代信息有限责任公司',
                        jobs: '前端工程师',
                        salary: '17000',
                        city: '北京'
                    },
                    {
                        time: '2019.4.18',
                        name: '魏亚琴',
                        sex: '女',
                        company: '北京星火科技有限公司',
                        jobs: '前端工程师',
                        salary: '12000',
                        city: '北京'
                    },
                    {
                        time: '2019.4.28',
                        name: '郑志健',
                        sex: '男',
                        company: '普林科技',
                        jobs: '前端工程师',
                        salary: '17000',
                        city: '北京'
                    },
                    {
                        time: '2019.4.18',
                        name: '张彤彤',
                        sex: '女',
                        company: '软创科技股份有限公司',
                        jobs: '前端工程师',
                        salary: '13000',
                        city: '北京'
                    },
                    {
                        time: '2019.4.18',
                        name: '董佳音',
                        sex: '女',
                        company: '将台酒仙桥牡丹集团',
                        jobs: '前端工程师',
                        salary: '13000',
                        city: '北京'
                    },
                    {
                        time: '2019.4.26',
                        name: '滕轶男',
                        sex: '女',
                        company: '软通动力',
                        jobs: '前端工程师',
                        salary: '16000',
                        city: '北京'
                    },
                    {
                        time: '2019.4.21',
                        name: '徐杰',
                        sex: '男',
                        company: '紫光软件电商事业部',
                        jobs: '前端工程师',
                        salary: '19000',
                        city: '北京'
                    },
                    {
                        time: '2019.4.10',
                        name: '张伟丰',
                        sex: '男',
                        company: '睿智科技',
                        jobs: '前端工程师',
                        salary: '12000',
                        city: '北京'
                    },
                    {
                        time: '2019.4.13',
                        name: '刘微微',
                        sex: '女',
                        company: '志成科技有限公司',
                        jobs: '前端工程师',
                        salary: '11000',
                        city: '上海'
                    },
                    {
                        time: '2019.4.19',
                        name: '郭军梅',
                        sex: '女',
                        company: '美丽说股份有限公司 ',
                        jobs: '前端工程师',
                        salary: '13000',
                        city: '北京'
                    },
                    {
                        time: '2019.4.12',
                        name: '刘伟',
                        sex: '男',
                        company: '北京博展文化有限公司',
                        jobs: '前端工程师',
                        salary: '14000',
                        city: '北京'
                    },
                    {
                        time: '2019.4.22',
                        name: '杜阿娜',
                        sex: '女',
                        company: '美天网络科技有限公司',
                        jobs: '前端工程师',
                        salary: '12000',
                        city: '北京'
                    },
                    {
                        time: '2019.4.18',
                        name: '赵如阳',
                        sex: '男',
                        company: '北京火星信息技术有限公司',
                        jobs: '前端工程师',
                        salary: '17000',
                        city: '北京'
                    }
                ]
            }
        ],
        replace: function(str) {
            var result = str.split('');
            switch(+result.length > 6) {
                case true: result.splice((Math.floor((result.length - 4) / 2)), 4, '***');
                    break;
                default: result.splice(1,1, '**');
            }
            return result.join('');
        },
        renderBody: function(list) {
            var resultList = '';
            var self = this;
            list.forEach(function (item, index) {
                resultList += '<li class="' + (index % 2 === 0 ? 'col-gray' : '') + '">'
                    + '<span class="time">' + item.time + '</span>'
                    + '<span class="name">' + self.replace(item.name) + '</span>'
                    + '<span class="sex">' + item.sex + '</span>'
                    + '<span class="company">' + self.replace(item.company) + '</span>'
                    + '<span class="jobs">' + item.jobs + '</span>'
                    + '<span class="salary">' + item.salary + '</span>'
                    + '<span class="city">' + item.city + '</span>'
                + '</li>'
            });
            $('.employment-list-body').html(resultList);
            autoScroll($('.employment-list-body')[0], 45);
        },
        renderFn: function () {
            var list = this.data;
            var self = this;
            if (list && list.length > 0) {
                var resultTitle = '';
                list.forEach(function (item, index) {
                    resultTitle += '<li data-index="' + index + '">'
                        + '<span data-index="' + index + '" class="' + (index === list.length - 1 ? 'last' : '') + '">' + item.batch+ '</span>'
                        + '</li>'
                })
                
                if (!list || list.length === 0) {
                    $('.employment-list .nav').css('display', 'none');
                } else {
                    $('#employment-list-nav').html(resultTitle);
                }

                this.renderBody(list[0].list);
                
                $('#employment-list-nav > li').each(function(index, item) {
                    $(item).on('click', function(event) {
                        self.renderBody(list[event.target.getAttribute('data-index')].list);
                    })
                })

                $('.employment-list-wrap').on('mouseover', function (event) {
                    var rowList = $('.employment-list-wrap').find('.' + event.target.className);
                    rowList.each(function (index, item) {
                        $(item).addClass('row-sub-red');
                    })
                });
                $('.employment-list-wrap').on('mouseout', function (event) {
                    var rowList = $('.employment-list-wrap').find('.row-sub-red');
                    rowList.each(function (index, item) {
                        $(item).removeClass('row-sub-red');
                    })
                });

                $('#employment-nav-btn').on('click', function () {
                    $('.employment-list-nav').slideToggle();
                }); 
            }
        }
    };
    var projectIntroduction = {
        // 实训项目的页面图
        data: [
            {
                url: './src/images/case1.png'
            },
            {
                url: './src/images/case2.png'
            },
            {
                url: './src/images/case3.png'
            },
            {
                url: './src/images/case4.jpg'
            },
            {
                url: './src/images/case5.png'
            },
            {
                url: './src/images/case6.png'
            },
            {
                url: './src/images/case7.jpg'
            },
            {
                url: './src/images/case8.jpg'
            },
            {
                url: './src/images/case9.jpg'
            }
        ],
        renderFn: function () {
            var list = this.data;
            if (list && list.length > 0) {
                var result = '';
                list.forEach(function (item, index) {
                    result += '<div class="swiper-slide">'
                        + '<img src="' + item.url + '" alt="">'
                        + '</div>'
                })
                $('#swiper-wrapper-project').html(result);
                new Swiper('#swiper-container-project', {
                    initialSlide: 0,
                    calculateHeight: true,
                    loop: true,
                    pagination: '.project-pagination',
                    slidesPerView: handelSlidesPerView().projectIntroduction,
                    slidesPerGroup: 1
                });
            }
        }
    }


    var renderFooter = function () {
        // 所有的页面底部渲染，没写数据遍历什么的，太难写了
        var result = '<div class="pc">'
                        + '<div class="fixed-width footer clear-fix">'
                            + '<div class="about-us">'
                                + '<ul>'
                                    + '<li class="logo">'
                                        + '<img src="./src/images/logo.png" alt="">'
                                    + '</li>'
                                    + '<li>'
                                        + '联系电话：<span id="footer-phone"></span>'
                                    + '</li>'
                                    + '<li>'
                                        + '北京校区地址：北京市昌平区市政培训中心'
                                    + '</li>'
                                    + '<li>'
                                        + '西安校区地址：西安市雁塔区金辉·环球中心B座19层'
                                    + '</li>'
                                + '</ul>'
                                + '<ol class="entry-button clear-fix" id="common-entry-button"></ol>'
                            + '</div>'
                            + '<div class="contact">'
                                + '<section>'
                                    + '<img src="./src/images/wx-service.jpg" alt="">'
                                    + '<p>客服微信</p>'
                                + '</section>'
                                + '<section>'
                                    + '<img src="./src/images/wx-public.jpg" alt="">'
                                    + '<p>微信公众号</p>'
                                + '</section>'
                            + '</div>'
                        + '</div>'
                        + '<div class="record">'
                            + '<p>&copy;2019贝程教育科技-中国资深IT职业教育创新品牌 京ICP备19020442号-1</p>'
                            + '<p>北京贝程教育科技有限责任公司 版权所有</p>'
                        + '</div>'
                    + '</div>'
                    + '<div class="mobile">'
                        + '<div class="contact clear-fix">'
                            + '<section class="first">'
                                + '<img src="./src/images/wx-service.jpg" alt="">'
                                + '<p>客服微信</p>'
                            + '</section>'
                            + '<section>'
                                + '<img src="./src/images/wx-public.jpg" alt="">'
                                + '<p>微信公众号</p>'
                            + '</section>'
                        + '</div>'
                        + '<div class="address fixed-width">'
                            + '<ul>'
                                + '<li>'
                                    + '<span class="title">联系电话</span>'
                                    + '<span id="molile-footer-phone"></span>'
                                + '</li>'
                                + '<li>'
                                    + '<span class="title">北京校区地址</span>'
                                    + '北京市昌平区市政培训中心'
                                + '</li>'
                                + '<li>'
                                    + '<span class="title">西安校区地址</span>'
                                    + '西安市雁塔区金辉·环球中心B座19层'
                                + '</li>'
                            + '</ul>'
                            + '<div class="record">'
                                + '<p>&copy;2019贝程教育科技-中国资深IT职业教育创新品牌 京ICP备19020442号-1</p>'
                                + '<p>北京贝程教育科技有限责任公司 版权所有</p>'
                            + '</div>'
                        + '</div>'
                        + '<div class="phone" id="mobile-contact-us">'
                            + '<img src="./src/images/service.png?_t20190523" alt="">'
                            + '<span>联系我们</span>'
                        + '</div>'
                    + '</div>';

        $('#common-footer-container').html(result);
        $('#mobile-contact-us').on('click', function() {
            // 调起小浮窗
            // lrminiMax();
            window.location.href = config.communication;
        })
        var commonEntryButton = {
            // pc页面最底部的按钮渲染
            data: [
                {
                    label: '免费试学',
                    flag: true,
                    url: config.communication,
                    bg: 'bg-blue'
                },
                {
                    label: '开班计划',
                    url: '/major.html',
                    bg: 'bg-red'
                },
                {
                    label: '就业详情',
                    url: '/employment.html',
                    bg: 'bg-orange'
                }
            ],
            renderFn: function () {
                var list = this.data;
                if (list && list.length > 0) {
                    var result = '';
                    list.forEach(function (item, index) {
                        result += '<li class="' + item.bg + '">' + item.label + '</li>';
                    });
                    $('#common-entry-button').html(result);
                    $('#common-entry-button > li').each(function (index, item) {
                        $(item).on('click', function () {
                            var href = list[index].flag ? list[index].url : (config.host + list[index].url);
                            window.open(href);
                        })
                    })
                }
            }
        }
        // 底部按钮
        commonEntryButton.renderFn();
    }
    // 渲染底部
    renderFooter();

    window.onresize = function () {
        var clientWidth = document.documentElement.clientWidth;
        var employmentListNav = $('.nav .employment-list-nav');
        
        // 修正就业信息移动端导航容器高度
        if (employmentListNav.length > 0) {
            if(clientWidth <= 1200) {
                employmentListNav && employmentListNav.css('height', 34 * employmentListNav[0].childElementCount + 'px');
            }
            else  {
                employmentListNav && employmentListNav.css('height', 68 + 'px');
            }
        }

        // 动态调整主导航容器宽度
        if (clientWidth >= 768) {
            var navWrapWidth = 10;
            $('#pc-head-nav li').length > 0 && $('#pc-head-nav li').each(function (index, item) {
                navWrapWidth += item.offsetWidth;
            })
            $('#pc-head-nav >ul').css('width', navWrapWidth);
        }
    }
    var setContact = {
        renderFn: function () {
            // pc顶部联系方式
            $('#head-phone').html(config.phone);
            // 移动端顶部联系方式
            $('#mobile-nav-phone').html(config.phone);
            $('#mobile-phone')[0].href = 'tel:' + config.phone;
            // 移动端底部联系方式
            $('#molile-footer-phone').html(config.phone);
            // pc页脚联系方式
            $('#footer-phone').html(config.phone);
            // qq
            $('#mobile-nav-qq').html(config.qq);
            $('#mobile-qq')[0].target = '_blank';
            $('#mobile-qq')[0].href = 'http://wpa.qq.com/msgrd?v=3&uin=' + config.qq + '&site=qq&menu=yes';
            
            // 关于我们页也有联系方式，需要去该页面更改
            // 这里统一设置电话什么的，因为大多数页面是在这里进行动态渲染，没做复杂处理，太难写了
        }
    }

    // 设置浏览器tab-icon
    setBrowserIcon.renderFn();
    // 设置联系方式
    setContact.renderFn();
    // 学员就业信息
    $('#employment-list-nav').length > 0 && employmentClass.renderFn();
    // 开班计划
    $('#swiper-wrapper-class').length > 0 && classOpeningPlan.renderFn();
    // 实训项目
    $('#swiper-wrapper-project').length > 0 && projectIntroduction.renderFn();




    // 添加自定义客服入口
    var renderChat = function() {
        var body = document.documentElement || document.body;
        var divElement = document.createElement('div');
        divElement.style.cssText = 'position: fixed; top: 50%; right: 0; z-index: 999; width: 44px; cursor: pointer; margin-top: -69px;'
        divElement.innerHTML = '<img src="./src/images/app-kefu.png" style="width: 100%">';
        divElement.onclick = function() {
            window.open(config.communication);
        }
        body.appendChild(divElement);
    }
    
    // 渲染客服入口
    renderChat();


    var setChat = function() {
        var timer = setInterval(function() {
            if($('#LRMINIWIN0').length > 0) {
                $('#LRMINIWIN0 > span').each(function(index, item) {
                    if (index === 1) {
                        $(item).css('display', 'none');
                        clearInterval(timer);
                    }
                })
            }
        }, 500);
    }
    // 设置隐藏默认对话框关闭按钮
    setChat();
}