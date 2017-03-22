import React from 'react';
const Home = React.createClass({
	render(){
		return(<div className="home" id='home'>
			     <header>
			          <ul>
			            <li className="yo-ico homemenu">&#xe745;</li>
			            <li>
			               <ul id="title">
			                <li></li>
			               </ul>
			            </li>
			            <li className="yo-ico sm">&#xe684;</li>
			          </ul>
			      </header>
			      <div className="homesection">
			          <div className="swiper-container" id="swiper-con">
			            <div className="swiper-wrapper">
			              <div className="swiper-slide swiper-flex">
			                  <nav>
			                     <ul id="nav">
			                        <li>
			                          
			                        </li>
			                     </ul>
			                  </nav>
			                  <div className="sectioncontent">
			                    <div className="swiper-container" id="swiper-main">
			                      <div className="swiper-wrapper">
			                        <div className="swiper-slide">
			                            <div className="homescroll" id="homescroll">
			                                <div className="scrolldiv">
			                                    <div className="head">
			                                       <img src="/src/img/images/arrow.png" alt=""/>
			                                       <span>下拉刷新</span>
			                                    </div>
			                                    <ul>
			                                       <li>
			                                          
			                                       </li>
			                                       <li></li>
			                                       <li>
			                                          
			                                       </li>
			                                     </ul>
			                                     <div className="foot">
			                                        <img src="/src/img/images/arrow.png" alt=""/>
			                                        <span>上拉加载</span>
			                                     </div>
			                                </div>
			                            </div>
			                        </div>
			                        <div className="swiper-slide">
			                            足球美女...
			                        </div>
			                        <div className="swiper-slide">
			                            足球先生...<br/>
			                        </div>
			                      </div>
			                    </div>
			                  </div>
			              </div>
			              <div className="swiper-slide">
			                  关注......
			              </div>
			            </div>
			          </div>
			      </div>
		  	</div>)
	}
})
export {
	Home
}