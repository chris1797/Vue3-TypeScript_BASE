<template>
  <div class="p-3 bg-danger">
    <!-- v-bind="$attrs" -->
    <button class="btn btn-primary" type="button" @click="sayHello2">
      My Button {{ message }}
    </button>
    <!-- {{ $attrs }} -->
  </div>
</template>

<script>
export default {
  /**
   * inheritAttrs는 <script setup>에서는 사용 못함
   * 이처럼 script setup에서는 사용할 수 없는 옵션을 병행해야 할 때
   * normal script와 script setup 같이 사용
   */
  inheritAttrs: false,
};
</script>

<script setup>
import { ref } from 'vue';

const message = ref('message');
</script>

<style lang="scss" scoped></style>
