<template>
  <div></div>
</template>

<script lang="ts">
import { ref, watch, reactive } from 'vue';

export default {
  setup() {
    const x = ref(0);
    const y = ref(0);

    const obj = reactive({
      count: 0,
    });
    /*
    watch(
      () => x.value + y.value,
      (sum, oldValue) => {
        console.log('sum: ', sum);
        console.log('oldValue: ', oldValue);
      },
    );
    */

    // watch([x, y], ([newX, newY]) => {
    //   console.log(newX, newY);
    // });
    // console.log(typeof obj.count);
    // watch(
    //   // object의 속성을 사용하고 싶으면 getter 함수 사용
    //   () => obj.count,
    //   (newValue, oldValue) => {
    //     // obj.count를
    //     console.log('newValue: ', newValue);
    //     console.log('oldValue: ', oldValue);
    //   },
    // );

    // watch(obj, (newValue, oldValue) => {
    //   console.log('newValue: ', newValue);
    //   console.log('oldValue: ', oldValue);
    // });

    const person = reactive({
      name: '홍길동',
      age: 30,
      hobby: '운동',
      obj: {
        count: 0,
      },
    });

    // watch(person, newValue => {
    //   console.log('newValue: ', newValue);
    // });

    // person.obj 라는 Object 자체의 값이 바뀌었을 때만 감지됨
    watch(
      () => person.obj,
      newValue => {
        console.log('newValue: ', newValue);
      },
    );

    return { x, y, obj, person };
  },
};
</script>

<style lang="scss" scoped></style>
