<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>param: {{ userId }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const userId = computed((): any => {
  return route.params.userId;
});

console.log(userId);
</script>
