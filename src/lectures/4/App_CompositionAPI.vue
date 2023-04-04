<template>
	<div>
		<h2>Reactive Message</h2>
		<p>{{ reactiveMessage }}</p>
		<button v-on:click="addReactiveMessage">Add Message</button>
		<h2>Normal Message</h2>
		<p>{{ normalMessage }}</p>
		<button v-on:click="addNormalMessage">Add Message</button>
	</div>
</template>

<script>
import { isRef, ref } from 'vue';

export default {
	setup() {
		console.log('setup()');
		// 반응형
		const reactiveMessage = ref('Hello Reactive Message');
		const addReactiveMessage = () => {
			reactiveMessage.value = reactiveMessage.value + '!';
		};
		console.log('isRef(reactiveMessage): ', isRef(reactiveMessage));

		// 노말
		let normalMessage = 'Hello Normal Message';
		const addNormalMessage = () => {
			normalMessage = normalMessage + '!';
		};
		console.log('isRef(normalMessage): ', isRef(normalMessage));

		return {
			reactiveMessage,
			normalMessage,
			addReactiveMessage,
			addNormalMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
