<template>
	<div></div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
	setup() {
		/**
		 * ref -> Object
		 */

		// primitive
		const count = ref(0);
		// reference
		const state = reactive({
			count,
		});

		count.value++;
		count.value++;

		console.log(count.value);
		// console.log('state.count: ', state.count.value); // undefined
		console.log('state.count: ', state.count);

		/**
		 * ref -> Array
		 */
		const message = ref('Hello');
		const arr = reactive([message]);

		console.log('arr[0]: ', arr[0].value);

		return {};
	},
};
</script>

<style lang="scss" scoped></style>
