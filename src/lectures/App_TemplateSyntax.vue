<template>
	<div>
		<h2>보간법</h2>
		<p>{{ message }}</p>
		<p v-once>{{ message }}</p>
		<button v-on:click="message = message + '!'">Click</button>
		<hr />

		<h2>HTML</h2>
		<p>{{ rawHtml }}</p>
		<p v-html="rawHtml"></p>
		<hr />

		<h2>속성 바인딩</h2>
		<div v-bind:title="dynamicTitle">Mouse Over</div>
		<input type="text" value="chris" v-bind:disabled="isInputDisabled" />
		<input v-bind="attrs" />
		<hr />

		<h2>Javascript</h2>
		{{ message.split('').reverse().join('') }}<br />
		{{ isInputDisabled ? 'yes' : 'no' }}
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('hi');
		const rawHtml = ref('<strong>hello</strong>');

		const dynamicTitle = ref('hihihi');

		const isInputDisabled = ref(false);

		const attrs = ref({
			type: 'text',
			value: '12345',
			disabled: true,
		});

		return {
			message,
			rawHtml,
			dynamicTitle,
			isInputDisabled,
			attrs,
		};
	},
};
</script>

<style lang="scss" scoped></style>
