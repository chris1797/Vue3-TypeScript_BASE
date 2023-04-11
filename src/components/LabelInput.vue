<template>
  <label>
    {{ label }}
    <!-- v-model="username" 은 사실 내부적으로 아래와 같이 구현되어 있음 -->
    <input v-model="value" type="text" />
    <!-- :value="modelValue"
    @input="event => $emit('update:modelValue', event?.target?.value)" -->
  </label>
</template>

<script lang="ts">
import { computed } from 'vue';

export default {
  props: ['modelValue', 'label'],
  emits: ['update:modelValue'],

  setup(props: { modelValue: string }, { emit }) {
    // computed는 기본적으로 readonly지만 get, set을 이용하면 값을 변경시킬 수 있음
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value: string) {
        emit('update:modelValue', value);
      },
    });

    return { value };
  },
};
</script>

<style lang="scss" scoped></style>
