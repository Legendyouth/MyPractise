<template>
	<div>
		count:{{arr}}
	</div>
</template>
<script type="text/javascript">
import {mapGetters} from 'vuex';
	export default {
		name:'display',
		computed:{
			...mapGetters([
					'arr'
				])
		}
	}
</script>