<template>
  <div>
    <p>{{ msg }}</p>
    <p v-text="msg"></p>
    <p v-html="htmlStr"></p>
    <!-- hello!! -->
    <p v-text="htmlStr"></p>
    <!-- <string>까지 포함하여 그대로 출력 </string>-->
    <p v-pre>{{ msg 안녕하세요 }}</p>
    <p v-once>{{ msg }} !!</p>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const msg = ref('hi');
    const htmlStr = ref('<strong>hello!!</strong>');
    return { msg, htmlStr };
  },
};
</script>

<style lang="scss" scoped></style>
