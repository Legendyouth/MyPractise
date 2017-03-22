<template>
	<div>
		<div>首页</div>
		<Display></Display>
		<Numadd></Numadd>
	</div>
</template>
<script type="text/javascript">
import store from '../vuex/store';
import Display from './display';
import Numadd from './numadd';
	export default {
		name:'index',
		components:{
			Display,
			Numadd
		},
		store
	}
</script>