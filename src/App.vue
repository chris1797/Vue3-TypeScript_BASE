<template>
  <div>
    <TheNav></TheNav>
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import TheNav from './components/TheNav.vue';
// import TheView from './components/TheView.vue';
const router = useRouter();
</script>

<style lang="scss" scoped></style>
