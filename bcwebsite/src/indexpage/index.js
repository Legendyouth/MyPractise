window.onload = function() {
    var host = 'http://www.beichengedu.com';
    var handelSlidesPerView = function() {
        var clientWidth = document.documentElement.clientWidth;
        var result = {};
        if(clientWidth > 768) {
            result = {
                eliteTeachers: 4
            }
        }
        else {
            result = {
                eliteTeachers: 2
            }
        }
        return result;
    }
    
    var webCourse = {
        data: [
            'Html5',
            'JavaScript',
            '二分法排序',
            'React',
            'Vue',
            'Webpack',
            '快速排序',
            'Gulp',
            'Css2',
            'SeaJs',
            'RequireJs',
            'Css3',
            '冒泡排序',
            'Vux',
            'Redux',
            'React-Native',
            '享元模式',
            'XSS',
            'NodeJS',
            '数据结构',
            'Mobx',
            'Koa',
            // 'Express',
            // '前端工程化',
            // 'HyBridApp',
            'Npm',
            '小游戏',
            'MongDB',
            'Angular',
            'Promise',
            '单例模式',
            'HTTP',
            'Async/await',
            'Generrator',
            '设计模式',
            'Chrome Developer Tools',
            '算法',
            'CSRF',
            'Canvas',
            'WebView',
            // 'Photoshop',
            // 'Html4',
            // 'ECMAScript2018',
            // '构造函数',
            // 'TypeScript',
            // 'ElementUI',
            // 'JSONP',
            // 'Cookie',
            // '正则表达式',
            // 'W3c',
            // 'Nginx',
            // 'Git',
            // 'DOM',
            // '流媒体',
            // 'Svn',
            // 'AvalonJs',
            // 'WebStorage',
            // '面向对象',
            // 'Jquery',
            // 'Video',
            // 'Audio',
            // 'ECMAScript2017',
            // '工厂模式',
            // 'Swiper',
            // 'Iscroll',
            // 'Bootstrap',
            // 'HTTPS',
            // 'JSON',
            // 'Zepto',
            // 'Fastclick',
            // '微信小程序',
            // 'ECMAScript2016'
        ],
        renderFn: function() {
            var list = this.data;
            if(list && list.length > 0) {
                var result = '';
                list.forEach(function(item, index) {
                    result += '<li>' + item + '</li>'
                })
                $('.course-outline ul').html(result);
            }
        }
    }

    var obtainEmploymentDirection = {
        renderFn: function() {
            var elsement = $('#obtain-employment-scroll')[0];
            var count = 0;
            elsement.style.width = elsement.firstElementChild.offsetWidth * elsement.childElementCount + 10 + 'px';
            setInterval(function() {
                count += 1;
                elsement.style.left = -count + 'px';
                if (Math.abs(elsement.offsetLeft) >= elsement.offsetWidth / 2) {
                    var rmElement = elsement.removeChild(elsement.firstElementChild);
                    elsement.appendChild(rmElement);
                    elsement.style.left = 0;
                    count = 0;
                }
            }, 30);
        }
    }
    
    var eliteTeachers = {
        data: [
            // {
            //     name: '胡校长',
            //     position: '贝程创始人兼校长',
            //     introduce: '原八维教育集团网站工程学院实训主任，曾经任职乐视等一线企业高级工程师。八年的开发经验及多年的教学和管理经验，对于企业所需的标准能融入到实际的课程体系中',
            //     url: './src/images/teachers/hls-hu-j.jpg'
            // },
            // {
            //     name: '魏老师',
            //     position: '贝程教育副校长',
            //     introduce: '曾任知名教育机构就业渠道经理，原北京现代学院、北京景秀学院等就业招生部负责人。多年的实际经验，在就业招生管理方面有着丰富的经历以及众多成功案例。',
            //     url: './src/images/teachers/wls-wei-f.jpg'
            // },
            {
                name: '沈老师',
                position: '技术总监',
                introduce: '原宏图世展技术总监，昆仑万维高级后端开发工程师，12年互联网开发经验，参与戴尔，亚马逊kindle，雀巢，广汽等SCRM解决方案及系统架构设计及开发',
                url: './src/images/teachers/sls-s.jpg'
            },
            {
                name: '郭老师',
                position: '教学总监',
                introduce: '原八维教育集团网站工程学院金牌讲师，曾任国网互联前端总监，中软信达项目经理。精通java，前端全栈，独立网站运营等，多年实际开发以及教学授课经验',
                url: './src/images/teachers/gls-g.jpeg'
            },
            {
                name: '胡老师',
                position: '项目经理',
                introduce: '原百度高级前端全栈开发工程师，多年前端开发经验，精通各项前沿技术，在react、vue、小程序等方面都具有多年培训教学经验，有着丰富的实训项目操作经验',
                url: './src/images/teachers/hls-hu-y.jpg'
            },
            {
                name: '孙老师',
                position: '高级架构师',
                introduce: '原用友集团高级架构师，8年的互联网开发经验，五年项目管理经验，移动互联专业研究人士，对web架构有深入的研究',
                url: './src/images/teachers/sls-sun.jpg'
            },
            {
                name: '吴老师',
                position: '高级讲师',
                introduce: '原牛展科技前端负责人，有着丰富的团队实战经验以及专业的就业评估经历。致力于前端开发多年，精通HTML5及CSS3，JavaScript等，熟练掌握 vue、react等前端前沿技术',
                url: './src/images/teachers/wls-wu-j.jpg'
            },
            {
                name: '沈老师',
                position: '项目经理',
                introduce: '原百度高级前端开发工程师，全栈开发工程师，对于前端主流技术JavaScript、html5、nodejs、react、vue、小程序等都有实际开发及授课经验',
                url: './src/images/teachers/sls-shen.jpg'
            },
            // {
            //     name: '史老师',
            //     position: '高级讲师',
            //     introduce: '先后任职金融以及一线互联网公司,任资深高级测试工程师，具有多年丰富的pc端测试经验。在过去的职业生涯多次获得优秀贡献奖及优秀导师奖,现负责公司重大项目测试管理工作。擅长pc端、API接口的自动化测试，精通性能测试、稳定性测试、软件质量的度量及bug的诊断与分析',
            //     url: './src/images/teachers/sls-s-02.png'
            // },
            // {
            //     name: '郭老师',
            //     position: '高级讲师',
            //     introduce: '多年测试经验，先后担任测试工程师、测试主管、测试经理等职位，分别负责数据算法及分析和技术产品中心项目跟进，擅长移动端自动化测试及项目管理，熟悉大数据基础算法，有较强的python编程功底',
            //     url: './src/images/teachers/gls-g-02.png'
            // },
            // {
            //     name: '闫老师',
            //     position: '高级讲师',
            //     introduce: '多年大数据行业及互联网金融行业工作经验，熟悉互联网金融行业业务，对大规模海量数据的网页数据、日志数据、线下第三方数据等的特征提取、数据分析和数据挖掘的结果测试方面积累了丰富的经验，同时对AppUI框架设计、App性能测试、App压力测试有深刻认知',
            //     url: './src/images/teachers/yls-y-01.png'
            // },
            // {
            //     name: '张老师',
            //     position: '高级讲师',
            //     introduce: '熟悉软件开发和软件测试流程，在软件工程、流程制定和改进、质量保证、自动化测试等领域有深厚的造诣，擅长功能自动化测试框架设计，性能测试实施及定位性能瓶颈，在多年教学过程中，形成了自己独到的教学方法，培养了近千名从事自动化测试的高级工程师',
            //     url: './src/images/teachers/zls-z-01.png'
            // }
        ],
        renderFn: function() {
            var list = this.data;
            if(list && list.length > 0) {
                var result = '';
                list.forEach(function(item, index) {
                    result += '<div class="swiper-slide">'
                        +'<ul class="list clear-fix"><li class="teacher-lis">'
                        + '<img src="' + item.url + '" alt="">'
                        + '<div class="mask">'
                            + '<h3 class="name">' + item.name + '</h3>'
                            + '<section class="position">' + item.position + '</section>'
                            + '<p class="detail">' + item.introduce + '</p>'
                        + '</div>'
                        + '<div class="introduction">'
                            + '<h3 class="name">' + item.name + '</h3>'
                            + '<section class="position">' + item.position + '</section>'
                        + '</div>'
                    + '</li>'
                    + '</ul>'
                    + '</div>';
                })
                $('#swiper-wrapper-teachers').html(result);
                new Swiper('#swiper-container-teachers', {
                    loop: true,
                    calculateHeight: true,
                    pagination : '.teachers-pagination',
                    slidesPerView: handelSlidesPerView().eliteTeachers,
                    slidesPerGroup : 1
                });
            }
        }
    }

    var dynamicCampus = {
        data: [
            {
                url: './src/images/dt-8.jpeg',
                introduce: '节假日期间聚集到一起聚餐、互动',
                time: '2019-04-05'
            },
            {
                url: './src/images/dt-3.jpeg',
                introduce: '贝程技术沙龙，前来学习的同学发表自己的感想，收获满满',
                time: '2019-03-16'
            },
            {
                url: './src/images/dt-6.jpeg',
                introduce: '我们的大家庭',
                time: '2019-04-05'
            },
            {
                url: './src/images/dt-9.jpeg',
                introduce: '午餐时间，一米的大蛋糕外加鸡腿饮料，欢迎新生开班',
                time: '2019-04-12'
            },
            {
                url: './src/images/dt-12.jpeg',
                introduce: '都玩的很开心啊，童心在这里彻底被释放，虽然有时候摔的很惨，但是痛并快乐着',
                time: '2019-04-05'
            },
            {
                url: './src/images/dt-2.jpeg',
                introduce: '技术沙龙中小哥哥小姐姐都听的很认真，努力的提升自己，为了高薪，加油！',
                time: '2019-05-12'
            },
            {
                url: './src/images/dt-1.jpeg',
                introduce: '贝程技术沙龙',
                time: '2019-04-13'
            },
            {
                url: './src/images/dt-15.jpeg',
                introduce: '周末个人技术提升班，已经参加工作的小哥哥小姐姐前来学习',
                time: '2019-04-20'
            }
        ],
        renderFn: function() {
            var list = this.data;
            if(list && list.length > 0) {
                var result = '<ul>';
                list.forEach(function(item, index) {
                    result += '<li>'
                    + '<div class="notebook">'
                        + '<img src="' + item.url + '" alt="">'
                        + '<span>' + item.introduce + '</span>'
                    + '</div>'
                    + '<div class="time">' + item.time + '</div>'
                    + '</li>';
                })
                $('#notebook-list').html(result + '</ul>');
            }
        }
    }
    var sceneryClass = {
        data: [
            {
                url: './src/images/dt-1.jpeg'
            },
            {
                url: './src/images/dt-2.jpeg'
            },
            {
                url: './src/images/dt-3.jpeg'
            },
            {
                url: './src/images/dt-4.jpeg'
            },
            {
                url: './src/images/dt-5.jpeg'
            },
            {
                url: './src/images/dt-6.jpeg'
            },
            {
                url: './src/images/dt-7.jpeg'
            },
            {
                url: './src/images/dt-8.jpeg'
            },
            {
                url: './src/images/dt-9.jpeg'
            },
            {
                url: './src/images/dt-10.jpeg'
            },
            {
                url: './src/images/dt-11.jpeg'
            },
            {
                url: './src/images/dt-12.jpeg'
            },
            {
                url: './src/images/dt-13.jpeg'
            },
            {
                url: './src/images/dt-15.jpeg'
            }
        ],
        renderFn: function() {
            var list = this.data;
            if(list && list.length > 0) {
                var result = '';
                list.forEach(function(item, index) {
                    result += '<div class="swiper-slide">'
                        + '<img src="' + item.url + '" alt="">'
                    + '</div>'
                })
                $('#swiper-wrapper-scenery').html(result);
                $('#swiper-wrapper-scenery-detail').html(result);
                var scenerySwiper = new Swiper('#swiper-container-scenery-detail', {
                    slidesPerView:  3,
                    pagination : '.scenery-pagination-detail',
                    initialSlide: 0,
                    slidesPerGroup : 1,
                    calculateHeight : true,
                });
                
                var containerSwiper = new Swiper('#swiper-container-scenery', {
                    calculateHeight: true,
                    controller: {
                      control: [scenerySwiper],
                      inverse: true,
                      by: 'slide'
                    }
                });
                $('#swiper-wrapper-scenery-detail .swiper-slide').each(function(index, item) {
                    $(item).on('click', function() {
                        containerSwiper.swipeTo(index);
                    })
                })
            }
        }
    }

    // 课程介绍模块跳转
    // 跳转h5大前端
    $('#salary-course-c').on('click', function() {
        window.open(host + '/major.html');
    })
    // 跳转就业详情
    $('#salary-course-s').on('click', function() {
        window.open(host + '/employment.html');
    })

    $('#teachers-detail-btn').on('click', function() {
        window.open(host + '/teachers.html');
    })

    // 课程介绍
    webCourse.renderFn();
    // 就业方向滚动
    obtainEmploymentDirection.renderFn();
    // 校园风景
    sceneryClass.renderFn();
    // 学员笔记
    dynamicCampus.renderFn();
    // 讲师简介
    eliteTeachers.renderFn();
};