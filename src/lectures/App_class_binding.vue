<template>
	<div
		class="text"
		:class="[activeClass, errorClass]"
		:style="{ color: activeColor, fontSize: fontSize + 'px' }"
	>
		This is text.
	</div>
	<button v-on:click="toggle">toggle</button>
	<button v-on:click="hasError = !hasError">toggleError</button>
</template>

<script>
import { ref, computed } from 'vue';

export default {
	setup() {
		const isActive = ref(true);
		const hasError = ref(false);

		// const classObject = reactive({
		// 	active: true,
		// 	'text-danger': true,
		// });

		// computed 사용
		const classObject = computed(() => {
			return {
				active: true && true,
				'text-danger': true && true,
			};
		});

		const activeClass = ref('active');
		const errorClass = ref('error');
		const activeColor = ref('red');
		const fontSize = ref(30);

		const toggle = () => {
			isActive.value = !isActive.value;
		};

		return {
			isActive,
			toggle,
			hasError,
			classObject,
			activeClass,
			errorClass,
			activeColor,
			fontSize,
		};
	},
};
</script>

<style scoped>
.active {
	font-weight: 900;
}

.text-danger {
	color: red;
}
</style>
