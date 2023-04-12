<template>
  <div class="container py-4">
    <div class="card">
      <div class="card-header">Provide&Inject Component</div>
      <div class="card-body">
        <button @click="count++">Click</button>
        <Child></Child>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Child from './Child.vue';
import { ref, provide, inject } from 'vue';

export default {
  components: {
    Child,
  },
  setup() {
    const staticMessage: string = 'static message';
    const message: string = ref('message');
    const count: number = ref(10);

    /*
    현재 이 ProvideInject가 provide 역할
    provide()를 사용해 DeepChild 컴포넌트로 값 내보내기
    */
    provide('static-message', staticMessage);
    provide('message', message);
    provide('count', count);
    /*
    setup()에서 main.ts 의 globalProperties 값을 this로 불러오려고 했지만 undefined
    걍 main.ts에서 provide로 보내고 inject로 받으면 됨
    */
    console.log('this: ', this); // undefined
    const msg: string = inject('msg');
    console.log('msg: ', msg); // hello msg
    return { count };
  },
  /*
  main.ts 에서 app.config.globalProperties.msg 값 받아오기
  mounted()에서는 Lifecycle hook 상 컴포넌트 인스턴스가 생성된 뒤이기 때문에
  this. 를 통해 접근 가능
  */
  mounted() {
    console.log('this.msg : ', this.msg);
  },
};
</script>

<style lang="scss" scoped></style>
