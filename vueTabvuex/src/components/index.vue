<template>
	<div>
		<Tabtitle :title='options.title'></Tabtitle>
		<Tabcontent :contents='options.contents'></Tabcontent>
	</div>
</template>
<script>
	import Tabtitle from './tabtitle';
	import Tabcontent from './tabcontent';
	import store from '../vuex/store.js';
	export default{
		data(){
			return {
				options:{
					title:['tab1','tab2','tab3'],
					contents:['tab1content','tab2content','tab3content']
				}
			}
		},
		components:{
			Tabtitle,
			Tabcontent
		},
		created(){
			//console.log(this);
		},
		store
	}
</script>
