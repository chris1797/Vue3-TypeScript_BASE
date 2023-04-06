<template>
  <div>
    <div v-memo="[subscribers, likes]">
      <p>subscribers: {{ subscribers }}</p>
      <p>views: {{ views }}</p>
      <p>likes: {{ likes }}</p>
    </div>
    <button @click="subscribers++">Subs++</button>
    <button @click="views++">views++</button>
    <button @click="likes++">likes++</button>
    <div>
      <p>subscribers: {{ subscribers }}</p>
      <p>views: {{ views }}</p>
      <p>likes: {{ likes }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const subscribers = ref(4000);
    const views = ref(400);
    const likes = ref(20);

    const esirj: string = 'chris';

    return { subscribers, views, likes };
  },
};
</script>

<style lang="scss" scoped></style>
