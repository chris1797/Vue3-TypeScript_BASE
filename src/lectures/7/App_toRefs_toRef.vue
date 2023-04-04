<template>
	<div>
		<p>author : {{ author }}</p>
		<p>title : {{ title }}</p>
	</div>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue';

export default {
	setup() {
		const book = reactive({
			author: 'Vue Team',
			year: '2020',
			title: 'Vue 3 Guide',
			description: 'Im read a book',
			price: 'free',
		});

		// 반응형을 잃어버려 String 출력
		console.log(typeof author.value, typeof title.value);

		// 반응형을 유지한채로 구조 분해 할당
		const { author, title } = toRefs(book);
		const price = toRef(book, 'price');

		return {
			author,
			title,
			book,
			price,
		};
	},
};
</script>

<style lang="scss" scoped></style>
