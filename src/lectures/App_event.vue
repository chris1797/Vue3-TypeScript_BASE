<template>
  <div>
    <button @click="printEventInfo('Hello Vue3', $event)">
      inline event handler
    </button>
    <hr />
    <input type="text" @keyup="onKeyupHandler" />
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const printEventInfo = (message: string, event: any) => {
      console.log('message: ', message);
      console.log('event.target: ', event.target);
      console.log('event.target.tagName: ', event.target.tagName);
    };

    const onKeyupHandler = (event: any) => {
      console.log('typeof: ', typeof event.key);
      console.log('event.key: ', event.key);
    };

    return { printEventInfo, onKeyupHandler };
  },
};
</script>

<style lang="scss" scoped></style>
