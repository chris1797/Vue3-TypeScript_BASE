<template>
  <div class="container py-4"></div>
  <input ref="input" type="text" />
  <p>{{ input }}</p>
  <p v-if="input">
    {{ $refs.input }}, {{ input }} {{ $refs.input?.value }}, {{ input?.value }},
    {{ $refs.input === input }}
  </p>
  <hr />
  <!-- <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">{{ fruit }}</li> -->
  <!-- <ul>
    <li
      v-for="fruit in fruits"
      :key="fruit"
      :ref="element => itemRefs.push(element.textContent)"
    >
      {{ fruit }}
    </li>
  </ul> -->
  <!-- <p>{{ input.value }}</p> -->
  <hr />

  <!-- TemplateRefsChild 컴포넌트 변수 할당 -->
  <TemplateRefsChild ref="child"></TemplateRefsChild>
</template>

<script>
import { ref, onMounted } from 'vue';
import TemplateRefsChild from './TemplateRefsChild.vue';

export default {
  components: {
    TemplateRefsChild,
  },
  setup() {
    const input = ref(null);
    // mount 이전이기 때문에 null
    console.log('setup: ', input.value);

    // 컴포넌트가 마운트된 후에 호출
    onMounted(() => {
      input.value.value = 'Hello world!'; // 마운트된 input.value.value에 값 넣기
      console.log('onMounted: ', input.value); // input type ~

      // 배열로 완성된 ref 값 받기
      // itemRefs.value.forEach(item => console.log('item: ', item.textContent));
      itemRefs.value.forEach(item => console.log('item: ', item));

      // 자식 컴포넌트로부터 받아온 데이터 출력, 메소드 실행
      console.log('child.message: ', child?.value.message);
      child.value.sayHello();
    });
    const fruits = ref(['사과', '딸기', '포도']);
    const itemRefs = ref([]);

    // TemplateRefsChild 컴포넌트로부터 받아올 반응형 데이터 변수 정의
    const child = ref(null);
    return { input, fruits, itemRefs, child };
  },
};
</script>

<style lang="scss" scoped></style>
