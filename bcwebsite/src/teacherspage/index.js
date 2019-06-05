window.onload = function() {
    var teachersDetailList = {
        data: [
            {
                url: './src/images/teachers/hls-hu-j-d.svg?_t=2019052002'
            },
            {
                url: './src/images/teachers/sls-s-d.svg'
            },
            {
                url: './src/images/teachers/gls-g-d.svg'
            },
            {
                url: './src/images/teachers/hls-hu-y-d.svg'
            },
            {
                url: './src/images/teachers/sls-sun-d.svg'
            },
            {
                url: './src/images/teachers/wls-wei-d.svg'
            },
            {
                url: './src/images/teachers/wls-wu-d.svg'
            },
            {
                url: './src/images/teachers/sls-shen-d.svg'
            },
            {
                url: './src/images/teachers/gls-g-02.svg'
            },
            {
                url: './src/images/teachers/sls-s-02.svg'
            },
            {
                url: './src/images/teachers/yls-y-01.svg'
            },
            {
                url: './src/images/teachers/zls-z-01.svg'
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
                $('#teachers-detail-list').html(result);
            }
        }
    }
    // 渲染师资列表
    teachersDetailList.renderFn();
};