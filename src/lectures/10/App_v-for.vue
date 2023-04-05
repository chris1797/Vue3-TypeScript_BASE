<template>
	<div>
		<ul>
			<template v-for="item in evenItems" :key="item.id">
				<li v-if="item.id % 2 == 0">ID: {{ item.id }}, {{ item.message }}</li>
			</template>
		</ul>
		<hr />

		<ul>
			<li v-for="(value, key, index) in myObject" :key="index">
				{{ key }} - {{ value }}
			</li>
		</ul>
	</div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
	setup() {
		const items = reactive([
			{ id: 1, message: 'Java' },
			{ id: 2, message: 'HTML' },
			{ id: 3, message: 'CSS' },
			{ id: 4, message: 'JavasScript' },
		]);

		const myObject = reactive({
			title: 'title',
			author: 'chris',
			publishedat: '2023-04-05',
		});

		const evenItems = computed(() => items.filter(item => item));
		return { items, evenItems, myObject };
	},
};
</script>

<style lang="scss" scoped></style>
