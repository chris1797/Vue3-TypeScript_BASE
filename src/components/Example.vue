<template>
  <main>
    <div class="container py-4">
      <!-- @click="sayHello" -->
      <MyButton class="my-button" id="my-button" @click="sayHello"></MyButton>
      <LabelInput label="이름" data-id="This is id."></LabelInput>
      <hr />
      <FancyButton> Click!!<span style="color: red">@@@</span> </FancyButton>
      <FancyButton>
        <template v-slot="{ fancyMessage }">{{ fancyMessage }}</template>
      </FancyButton>
      <hr />
      <AppCard>
        <template #header="{ headerMessage }">
          {{ headerMessage }}
        </template>
        <!-- <template #footer>푸터입니다.</template> -->
        <template #default="{ childMessage, helloMessage }">
          {{ message }}
          <br />
          {{ childMessage }}
          <br />
          {{ helloMessage }}
        </template>
        <template #footer="{ footerMessage }">
          {{ footerMessage }}
        </template>
      </AppCard>
      <hr />
      <AppCard>게시글 입니다.</AppCard>
    </div>
  </main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
import FancyButton from './FancyButton.vue';
import AppCard from '@/components/AppCard.vue';

import { ref } from 'vue';

export default {
  components: {
    MyButton,
    LabelInput,
    FancyButton,
    AppCard,
  },
  setup() {
    const sayHello = () => {
      alert('Hi!');
    };

    const slotArgs = ref('header');
    const message = ref('안녕하세요!!!');

    return { sayHello, slotArgs, message };
  },
};
</script>

<style lang="scss" scoped></style>
