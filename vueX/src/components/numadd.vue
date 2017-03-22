<template>
	<div>
		<button @click='add'>Action+1</button>
	</div>
</template>
<script type="text/javascript">
import {mapActions} from 'vuex';
	export default {
		name:'numadd',
		methods:{
			...mapActions([
					'add'
				])
		}
	}
</script>