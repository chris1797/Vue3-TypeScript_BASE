<template>
  <div class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" header-message="헤더 메세지">#Header</slot>
    </div>
    <div v-if="$slots.default" class="card-body">
      <slot :childMessage="childMessage" hello-message="안녕하세요~">
        #Body
      </slot>
    </div>
    <div v-if="hasFooter" class="card-footer text-muted">
      <slot name="footer" footer-message="푸터 메세지">#Footer</slot>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
  setup(props, { slots }) {
    const childMessage = ref('[자식 컴포넌트 메세지]');
    /*
     footer가 있다면 true, 아니면 false
     !!는 다른 타입의 데이터를 boolean 타입으로 명시적으로 형변환하기 위해 사용
    */
    const hasFooter = computed(() => !!slots.footer);

    return { childMessage, hasFooter };
  },
};
</script>

<style lang="scss" scoped></style>
