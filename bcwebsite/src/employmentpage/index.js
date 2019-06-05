window.onload = function() {
    var enterpriseFeedback = {
        data: [
            {
                name: '甘*玲',
                introduction: '美丽说前端负责人',
                describe: '专业能力很不错，对公司的需求都能够胜任，沟通能力也值得称赞，期望继续合作，达成双赢',
                logo: './src/images/meilishuo.png'
            },
            {
                name: '王*珂',
                introduction: '途牛技术负责人',
                describe: '团队中有两名来自贝程教育的同学，很满意，因为我们公司为初创型的，对人才的要求比较高，需要那种能独当一面的，目前来我们公司工作已经半年了，整体表现都很满意',
                logo: './src/images/tuniu.png'
            },
            {
                name: '董*成',
                introduction: '创新工厂技术总监',
                describe: '个人感觉还是不错的，对于该教育机构内部如何，我不清楚，但是从来到我们公司工作的同学的能力来看，该教育机构的水平值得肯定',
                logo: './src/images/chuangxingongchang.png'
            },
            {
                name: '王*娜',
                introduction: '乐视技术经理',
                describe: '我带领团队也有好几年了，接触的技术人员很多，前段时间因为发展需要，接触到三名来自贝程的同学，基础知识很扎实，面试的很愉快，期望后期有良好的表现，当然，也期望更多的合作',
                logo: './src/images/leshi.png'
            },
            {
                name: '常*勇',
                introduction: '盛大游戏前端高级开发工程师',
                describe: '我是一个技术控，对技术能力要求比较高，嗯，真的不错，有些知识点甚至让我感觉他不是培训机构出来的，而是一个有工作经验的人，很惊讶',
                logo: './src/images/shengdayouxi.png'
            },
            {
                name: '李*雪',
                introduction: '小米业务负责人',
                describe: '我一般只看结果，能够完成任务就行，到现在项目没发生过大的问题，给的任务都能按时按点完成，很努力，为人也很不错，和公司的同事都处的很好，不错不错',
                logo: './src/images/xiaomi.png'
            }
        ],
        renderFn: function() {
            var list = this.data;
            if(list && list.length > 0) {
                var result = '';
                list.forEach(function(item, index) {
                    result += '<li class="' + ((index + 1) % 3 === 0 ? 'right' : '')+ '">'
                           + '<div>'
                                + '<h3><span>' + item.name + '</span><em>' + item.introduction + '</em></h3>'
                                + '<p>' + item.describe + '</p>'
                            + '</div>'
                            + '<section>'
                                + '<img src="' + item.logo + '" alt="">'
                            + '</section>'
                        + '</li>';
                    
                })
                $('#enterprise-feedback-list').html(result);
            }
        }
    }
    var whereDetail = {
        data: [
            {
                url: './src/images/footer.png'
            }
        ],
        renderFn: function() {
            var list = this.data;
            if(list && list.length > 0) {
                var result = '';
                list.forEach(function(item, index) {
                    result += '<li>'
                            + '<img src="' + item.url + '" alt="">'
                        + '</li>';
                    
                })
                $('#where-detail-list').html(result);
            }
        }
    }
    // 用人企业反馈
    enterpriseFeedback.renderFn();
    // 就业企业
    whereDetail.renderFn();
};