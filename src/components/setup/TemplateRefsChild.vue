<template>
  <div>
    {{ $parent }}
    <ul>
      <li v-for="fruit in $parent.fruits" :key="fruit">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';

const message: Ref<string | number> = ref('Hello~!');
const sayHello = () => {
  alert(message.value);
};

/**
 * 부모 컴포넌트로 보낼 데이터들 명시
 * defineExpose를 쓰지 않는 한, 기본적으로 부모로의 데이터 통신은 막혀있음
 * key, value가 같으면 하나만 써도됨
 */
defineExpose({
  sayHello: sayHello,
  message,
});
</script>

<style lang="scss" scoped></style>
