<template>
  <label>
    {{ label }}
    <input v-model="value" type="text" />
  </label>
</template>

<script lang="ts">
import { computed } from 'vue';

export default {
  props: ['title', 'label'],
  emits: ['update:title'],

  setup(props: { title: string }, { emit }) {
    // computed는 기본적으로 readonly지만 get, set을 이용하면 값을 변경시킬 수 있음
    const value = computed({
      get() {
        return props.title;
      },
      set(value: string) {
        emit('update:title', value);
      },
    });

    return { value };
  },
};
</script>

<style lang="scss" scoped></style>
