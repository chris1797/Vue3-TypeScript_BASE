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

defineExpose({
  sayHello,
});
</script>

<style lang="scss" scoped></style>
