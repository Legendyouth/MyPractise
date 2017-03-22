<template>
	<div v-tab class="box">
		<ul class="uUl">
			<li v-for='(value,index) in list' :class="index == 0? liActive : ''">{{value}}</li>
		</ul>
		<div v-for='(value,index) in listCon' :class="index == 0 ?divActive : '' ">{{value}}</div>
	</div>
</template>
<style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	ul,ol,li{
		list-style: none;
	}
	.uUl li{
		float: left;
		width: 100px;
		height: 50px;
		text-align: center;
		line-height: 50px;
		border: 1px solid #888;
	}
	.uUl li.liActive{
		background: orange;
	}
	.box div{
		width: 304px;
		height: 200px;
		border: 1px solid #999;
		clear: both;
		display: none;
	}
	.box div.divActive{
		display: block;
	}
</style>
<script >
	import utilDirective from '@/utils/utilDirective'
	export default {
		name:'tab',
		data(){
			return {
				list:['tab1','tab2','tab3'],
				listCon:['list1','list2','list3'],
				liActive:'liActive',
				divActive:'divActive'
			}
		}
	}
</script>