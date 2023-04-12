<template>
  <div class="p-3 bg-danger">
    <!-- v-bind="$attrs" -->
    <button class="btn btn-primary" type="button" @click="sayHello2">
      My Button
    </button>
    <!-- {{ $attrs }} -->
  </div>
</template>

<script>
export default {
  // inheritAttrs: false,
  emits: { click: null },
  setup(props, { emit }) {
    // console.log('context.attrs: ', context.attrs);
    // console.log('context.class: ', context.attrs.class);
    // console.log('context.id: ', context.attrs.id);
    // console.log('context.onClick: ', context.attrs.onClick);
    // context.attrs.onClick();

    const sayHello2 = () => {
      emit('click'); // 부모로 보낼 이벤트 이름
    };
    return { sayHello2 };
  },
};
</script>

<style lang="scss" scoped></style>
