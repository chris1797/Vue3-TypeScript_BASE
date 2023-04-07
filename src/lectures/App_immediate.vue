<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ reverseMessage }}</p>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const message = ref('Hello Vue3!');
    const reverseMessage = ref('');

    const reverseFunction = () => {
      console.log('Immediate run');
      reverseMessage.value = message.value.split('').reverse().join('');
    };

    watch(message, reverseMessage);
    reverseFunction();

    /* 
    immediate X, 변경이 한번 일어나야 newValue가 return
    watch(message, newValue => {
      reverseMessage.value = newValue.split('').reverse().join('');
    });
    */

    /*
    watch()에서 3번째 매개변수 객체를 추가하여 immediate: true 추가
    watch(
      message,
      console.log('즉시 실행함')
      newValue => {
        reverseMessage.value = newValue.split('').reverse().join('');
      },
      { immediate: true, },
    );
    */

    return { message, reverseMessage };
  },
};
</script>

<style lang="scss" scoped></style>
