var ET = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
module.exports = {
	entry:__dirname+'/src/app.js',
	//entry: ['webpack/hot/dev-server', path.resolve(__dirname,'./src/app.js')], 
	devtool:'source-map',
	output:{
		path:__dirname+'/dist',
		filename:'boudle.js'
	},
	module:{
		loaders:[
			{
	            test: /\.js?$/,//表示要变异的文件的类型，这里要编译的是js文件
	            loader: 'babel-loader',//装载的哪些模块
	            exclude: /node_modules/,//标示不变异node_modules文件夹下面的内容
	            query: {//具体的编译的类型，
	                compact: false,//表示不压缩
	                presets: ['es2015', 'react']//我们需要编译的是es6和react
	            }
	        },
			{ //编译css
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			//编译sass
			{
			    test: /\.scss$/,
			    loader:'style-loader!css-loader!sass-loader'
			    //loader:ET.extract({fallbackLoader:'style-loader',loader:'css-loader!sass-loader'})
			},
			{ 
				test: /\.(png|jpg)$/, loader: 'url?limit=8192'
			}
		]
	},
	//服务
	devServer: {
	    //contentBase: __dirname+'/src',//"./public",//本地服务器所加载的页面所在的目录
	    // colors: true,//终端中输出结果为彩色
	    historyApiFallback: true,//不跳转
	    inline: true,//实时刷新
	    port:'9000',
	    host:'localhost'
    },
    plugins:[
    	//生成css入口文件
    	new ET('boudle.css')
    ]
}