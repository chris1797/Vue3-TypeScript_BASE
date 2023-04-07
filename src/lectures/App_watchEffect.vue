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

<script>
import { ref, watchEffect } from 'vue';

export default {
  setup() {
    const title = ref('');
    const contents = ref('');

    const save = (title, contents) => {
      console.log(`save completed title: ${title}, contents: ${contents}`);
    };

    // watchEffect는 최초에 한번 즉시 실행
    watchEffect(() => {
      console.log('watchEffect');
      save(title.value, contents.value);
    });

    return { title, contents, save };
  },
};
</script>

<style lang="scss" scoped></style>
