<template>
	<div class="titlecon">
		<p v-for='(value,index) in title' @click = 'change(index)' :class="index == addIndex?active : ''">{{value}}</p>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex';
	export default {
		name:'title',
		props:['title'],
		data(){
			return {
				active:'active'
			}
		},
		methods:{
			change(index){
				this.$store.dispatch('changeActive',index);
			}
		},
		computed:{
			...mapGetters(['addIndex'])
		}
	}
</script>
<style>
	.titlecon p{
		width: 100px;
		height: 45px;
		background: #666;
		text-align: center;
		line-height: 45px;
		float:left;
	}
	.titlecon p.active{
		background: orange;
		color: #fff;
	}
</style>