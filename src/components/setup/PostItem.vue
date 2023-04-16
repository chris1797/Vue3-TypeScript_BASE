<template>
  <div class="card">
    <div class="card-body">
      <!-- 
        {{ $props }} 이렇게도 접근 가능  
      -->
      <!-- type : news, notice,  -->
      <span class="badge bg-secondary"> {{ typeName }} </span>
      <h5 class="card-title red mt-2">{{ title }}</h5>
      <p class="card-text">{{ contents }}</p>
      <a href="#" class="btn" :class="isLikeClasss" @click="toggleLike"
        >좋아요</a
      >
      <br />
    </div>
  </div>
</template>

<script lang="ts">
/**
 * 일반 script이므로 한번만 호출됨
 */
console.log('Normal setup called');
</script>

<script setup lang="ts">
import { computed } from 'vue';

/**
 * script setup에서 각 컴포넌트 인스턴스가 생성되는 만큼 실행됨
 */
console.log('Script setup called');

/**
 * 기존 PostItem 컴포넌트의 script -> script setup으로 변환
 * Props 선언 부분, 이후 props 변수로 사용
 */
const props = defineProps({
  type: {
    type: String,
    default: 'news',
    validator: (value: string) => {
      return ['news', 'notice'].includes(value);
    },
  },
  title: {
    type: String,
    required: true,
  },
  contents: {
    type: String,
    // required: true,
  },
  isLike: {
    type: Boolean,
    default: false,
  },
  obj: {
    type: Object,
    default: () => {},
  },
});

/**
 * 자식 -> 부모로 이벤트 올리기
 * script setup에서는 defineEmits 사용하여 emit 선언
 * emit 변수에 할당해야 70라인 emit 함수를 사용할 수 있음
 */
const emit = defineEmits(['toggleLike']);

const isLikeClasss = computed(() =>
  props.isLike ? 'btn-danger' : 'btn-outline-danger',
);

const typeName = computed(() => (props.type === 'news' ? 'News' : 'Notice'));

/**
 * 레퍼런스 타입은 하위 컴포넌트에서 변경가능하지만 사용 X, emit으로 부모로 올려서 변경
 */
const toggleLike = () => {
  emit('toggleLike');
};
</script>

<style lang="scss" scoped></style>
