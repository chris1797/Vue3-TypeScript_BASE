<template>
  <div class="container py-4">
    <input ref="inputRef" type="text" value="hello world" />
    <hr />
    <button @click="visible = !visible">Toggle Child</button>
    <LifecycleChild v-if="visible"></LifecycleChild>
    <p id="message">{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { onBeforeMount, ref, onMounted, onBeforeUpdate, onUpdated } from 'vue';
import LifecycleChild from './LifecycleChild.vue';

export default {
  components: {
    LifecycleChild,
  },
  setup() {
    console.log('setup');
    const inputRef = ref(null);
    const message = ref('');
    const visible = ref(false);
    // onBeforeMount(() => {
    //   console.log('onBeforeMount');
    // });
    // onMounted(() => {
    //   console.log('onMounted', inputRef.value.value);
    // });

    /* 
    message.value 값은 찍히지만 DOM이 업데이트 되기 전이므로
    DOM Content는 찍히지 않음
    */
    // onBeforeUpdate(() => {
    //   console.log('onBeforeUpdate: ', message.value);
    //   console.log(
    //     'DOM Content: ',
    //     document.querySelector('#message')?.textContent,
    //   );
    // });

    /*
    setup()에서 return된 데이터가 변경되었을 경우에 실행됨
    -> DOM이 업데이트 될 때
    */
    // onUpdated(() => {
    //   console.log('onUpdated: ', message.value);
    //   console.log(
    //     'DOM Content: ',
    //     document.querySelector('#message')?.textContent,
    //   );
    // });
    return { inputRef, message, visible };
  },
};
</script>

<style lang="scss" scoped></style>
