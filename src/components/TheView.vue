<template>
  <main>
    <div class="container py-4">
      <!-- @click="sayHello" -->
      <MyButton class="my-button" id="my-button" @saysay="sayHello"></MyButton>
      <LabelInput label="이름" data-id="This is id."></LabelInput>
    </div>
  </main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
export default {
  components: {
    MyButton,
    LabelInput,
  },
  setup() {
    const sayHello = () => {
      alert('Hi!');
    };

    return { sayHello };
  },
};
</script>

<style lang="scss" scoped></style>
