<template>
	<div>
		<h2>{{ teacher.name }}</h2>
		<h3>강의가 있습니까?</h3>
		<p>{{ teacher.lectures.length > 0 ? 'yes' : 'no' }}</p>
		<p>{{ hasLecture }}</p>
		<p>{{ existLecture() }}</p>
		<br />
		<button v-on:click="counter++">Counter : {{ counter }}</button>
		<h2>Name</h2>
		<p>{{ fullName }}</p>
	</div>
</template>

<script>
import { reactive, computed, ref } from 'vue';

export default {
	setup() {
		const teacher = reactive({
			name: 'chris',
			lectures: ['HTML/CSS', 'Javascript', 'Vue3'],
		});

		// computed()는 캐싱되기 때문에 성능이 더 좋음
		const hasLecture = computed(() => {
			console.log('computed');
			return teacher.lectures.length > 0 ? 'yes' : 'no';
		});

		// 캐싱되지 않기 때문에 호출될 때마다 실행됨
		const existLecture = () => {
			console.log('method');
			return teacher.lectures.length > 0 ? 'yes' : 'no';
		};

		const counter = ref(0);

		const firstName = ref('lee');
		const lastName = ref('jaehun');

		const fullName = computed({
			get() {
				return firstName.value + ' ' + lastName.value;
			},
			set(value) {
				console.log('value: ', value);
				[firstName.value, lastName.value] = value.split(' ');
			},
		});

		console.log('Console 출력: ', fullName.value);
		fullName.value = 'lee jaehun';

		return {
			teacher,
			hasLecture,
			existLecture,
			counter,
			fullName,
		};
	},
};
</script>

<style lang="scss" scoped></style>
