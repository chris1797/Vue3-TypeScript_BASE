<template>
	<div>
		<button v-on:click="increment">Click {{ state.count }}</button>
		<button v-on:click="increment">Deep Click {{ state.deep.count }}</button>

		<p>{{ message }}</p>
		<button v-on:click="addMessage">Add click</button>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup() {
		// reference type의 반응형
		const state = reactive({
			count: 0,
			deep: {
				count: 0,
			},
		});

		const increment = () => {
			state.count++;
			state.deep.count++;
		};

		// primitive type의 반응형
		const message = ref('Hello Vue!');

		const addMessage = () => {
			message.value = message.value + '!';
		};

		console.log('message: ', message.value);
		console.log('message typeof: ', typeof message.value);

		return {
			state,
			increment,
			message,
			addMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
