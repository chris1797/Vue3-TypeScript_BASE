<template>
  <div class="container py-4">
    {{ msg }}
    <br />
    {{ message }}
    <input v-model="message" type="text" />
    <button @click="sayHello">click</button>
    <PostItem
      type="news"
      title="제목"
      contents="내용"
      :is-like="true"
    ></PostItem>
    <PostItem
      type="news"
      title="제목"
      contents="내용"
      :is-like="true"
    ></PostItem>
    <PostItem
      type="news"
      title="제목"
      contents="내용"
      :is-like="true"
    ></PostItem>

    <hr />

    <!-- 
    ref 변수 선언 ref="child" 는 TemplateRefsChild 컴포넌트를
    "child"라는 참조변수를 통해 접근하겠다라는 뜻
    script에서 똑같은 child라는 이름으로 ref 변수 선언해줘야함 
    const child: Ref<any> = ref(null);
    -->
    <TemplateRefsChild ref="child"></TemplateRefsChild>
    <template v-if="child">{{ child.message }} </template>
    <hr />
    <MyButton class="parent-class"></MyButton>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import axios from 'axios';
import PostItem from './setup/PostItem.vue';
import TemplateRefsChild from './setup/TemplateRefsChild.vue';
import MyButton from './setup/MyButton.vue';

/**
 * 변수를 선언만 해도 template에서 사용할 수 있음
 */
const msg: string = 'Hello World!';
const message: Ref<string | number> = ref('');
const sayHello = () => {
  alert('Hello world!');
};

const child: Ref<any> = ref(null);
// const child = ref(null);

defineExpose({
  msg,
});

/**
 * 원래는 아래의 api호출 함수 callApi()처럼 await에 async을 반드시 붙여야 하지만
 * script setup에서는 이와 같이 async 생략 가능
 */
const response = await axios(
  'https://dummy.restapiexample.com/api/v1/employees',
);
console.log('response: ', response);

// 원래 api 호출 방식 (async & await)
async function callApi() {
  const response = await axios(
    'https://dummy.restapiexample.com/api/v1/employees',
  );
}
callApi();
</script>

<style lang="scss" scoped></style>
