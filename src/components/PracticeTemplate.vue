<template>
  <div>
    <div class="form-check form-switch py-4">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        @click="$emit('convertSwitch')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// 부모로 보낼 event emit
defineEmits(['convertSwitch']);
</script>

<style lang="scss" scoped></style>
