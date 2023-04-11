<template>
  <div>
    <LabelInput
      :model-value="firstname"
      @update:model-value="(value: string) => $emit('update:firstname', value)"
      label="성"
    ></LabelInput>
    <LabelInput
      :model-value="lastname"
      @update:model-value="(value: string) => $emit('update:lastname', value)"
      label="이름"
    ></LabelInput>
  </div>
</template>

<script lang="ts">
import LabelInput from './LabelInput.vue';

export default {
  // 아래 데이터들을 받아옴
  props: ['firstname', 'lastname'],
  // 아래 이벤트들을 넘김
  emits: ['update:firstname', 'update:lastname'],
  components: {
    LabelInput,
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
