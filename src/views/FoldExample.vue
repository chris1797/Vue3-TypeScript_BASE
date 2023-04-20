<template>
  <div>
    <h1>My Website</h1>
    <nav v-show="showNav">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    <button @click="toggleNav">Toggle Navigation</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showNav = ref(false);

function toggleNav() {
  showNav.value = !showNav.value;
}
</script>

<style>
@media (max-width: 600px) {
  nav {
    display: none;
  }
}
</style>
