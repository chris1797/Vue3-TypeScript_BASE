<template>
  <div>
    <label class="form-check-label" for="flexSwitchCheckDefault">
      {{ available }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
  switchCondition: Boolean,
});

const available = computed((): string => {
  return props.switchCondition ? '사용 가능' : '사용 불가능';
});
</script>

<style lang="scss" scoped></style>
