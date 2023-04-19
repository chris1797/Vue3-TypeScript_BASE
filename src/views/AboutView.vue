<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>userId: {{ $route.params.userId }}</p>
    <p>name: {{ route.params.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const userId = computed((): any => {
  return route.params.userId;
});
</script>
