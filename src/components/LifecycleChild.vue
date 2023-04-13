<template>
  <div class="card">
    <div class="card-body">LifecycleChild</div>
    <input id="input" type="text" />
  </div>
</template>

<script lang="ts">
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue';

export default {
  setup() {
    // console.log('[Child] setup');
    onBeforeMount(() => {
      console.log('[Child] onBeforeMount');
    });
    onMounted(() => {
      console.log('[Child] onMounted');
    });
    onBeforeUnmount(() => {
      console.log('[Child] onBeforeUnmount');
      console.log(document.querySelector('#input')); // <input id="input" type="text" /> DOM 출력
    });

    // mount를 해제한 이후이기 때문에 DOM을 가져오면 없음
    onUnmounted(() => {
      console.log('[Child] onUnmounted');
      console.log(document.querySelector('#input')); // 아무것도 안찍힘
    });
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
