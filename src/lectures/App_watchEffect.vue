<template>
  <div>
    <form @submit.prevent>
      <input v-model.lazy="title" type="text" placeholder="Title" />
      <textarea v-model.lazy="contents" placeholder="Contents"></textarea>
      <hr />
      <button @click="save(title, contents)">Save</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, watchEffect } from 'vue';

const title: Ref<string> = ref('');
const contents: Ref<string> = ref('');

const save = (title: string, contents: string) => {
  console.log(`save completed title: ${title}, contents: ${contents}`);
};

// watchEffect는 최초에 한번 즉시 실행
watchEffect(() => {
  console.log('watchEffect');
  save(title.value, contents.value);
});
</script>

<style lang="scss" scoped></style>
