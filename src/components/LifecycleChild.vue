<template>
  <div></div>
</template>

<script lang="ts">
import { onBeforeMount, onMounted } from 'vue';

export default {
  setup() {
    console.log('[Child] setup');
    onBeforeMount(() => {
      console.log('[Child] onBeforeMount');
    });
    onMounted(() => {
      console.log('[Child] onMounted');
    });
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
