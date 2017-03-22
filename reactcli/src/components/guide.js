import React from 'react';
const 引导页 = React.createClass({
	render:function(){
		return (
				<div className="guidecon">
			        <div className="swiper-container 图片轮播" id="图片轮播">
			            <div className="swiper-wrapper">
			                <div className="swiper-slide">
			                    <img src="/src/img/images/slide1.png"/>
			                </div>
			                <div className="swiper-slide">
			                    <img src="/src/img/images/slide2.png"/>
			                </div>
			                <div className="swiper-slide">
			                    <img src="/src/img/images/slide3.png"/>
			                </div>
			                <div className="swiper-slide">
			                    <img src="/src/img/images/slide4.png"/>
			                    <a href='#/main/home' className="btn"></a>
			                </div>
			            </div>
			        </div>
			    </div>
			)
	},
    componentWillMount(){
   //  	setTimeout(function(){
			// new Swiper('#swiper-guide')
   //  	},1000)
    	
       // alert(1)
      
    },
    componentDidMount(){
    	new Swiper('#图片轮播')
    	//console.log(this)
		// $(this.gerDOMNode()).autocomplete({
		// 	source:datasource
		// });
	}
})
export {
	引导页
}