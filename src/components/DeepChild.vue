<template>
  <div class="card">
    <div class="card-header">Deep Child Component</div>
    <div class="card-body">
      <p>staticMessage: {{ staticMessage }}</p>
      <p>message: {{ message }}</p>
      <p>count: {{ count }}</p>
      {{ appMessage }}
    </div>
  </div>
</template>

<script lang="ts">
import { inject } from 'vue';
export default {
  setup() {
    /*
    ProvideInject 컴포넌트에서 provide()로 보낸 값 inject()로 받기
    */
    const staticMessage: string = inject('static-message', 'default message');
    const message: string = inject('message');
    const count: string = inject('count');
    const appMessage: string = inject('app-message');
    return { staticMessage, message, count, appMessage };
  },
};
</script>

<style lang="scss" scoped></style>
