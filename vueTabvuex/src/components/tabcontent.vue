<template>
	<div class="contentcon">
		<div>{{contents[addIndex]}}</div>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex';
	export default {
		name:'content',
		props:['contents'],
		computed:{
			...mapGetters([
					'addIndex'
				])
		}
	}
</script>
<style>
	.contentcon div{
		clear: both;
		width: 300px;
		height: 200px;
		background: orange;
	}
</style>