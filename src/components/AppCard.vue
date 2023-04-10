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

<script>
import { computed } from 'vue';
export default {
  props: {
    type: {
      type: String,
      default: 'news',
      validator: value => {
        return ['news', 'notice'].includes(value);
      },
    },
    title: {
      type: String,
      required: true,
    },
    contents: {
      type: String,
      required: true,
    },
    isLike: {
      type: Boolean,
      default: false,
    },
    obj: {
      type: Object,
      default: () => {},
    },
  },

  // 자식 -> 부모로 이벤트 올리기
  emits: ['toggleLike'],
  setup(props, context) {
    // setup의 매개변수로 props를 받을 수 있음
    console.log('props.title: ', props.title);
    const isLikeClasss = computed(() =>
      props.isLike ? 'btn-danger' : 'btn-outline-danger',
    );
    const typeName = computed(() =>
      props.type === 'news' ? 'News' : 'Notice',
    );

    const toggleLike = () => {
      // props.isLike = !props.isLike;
      // 레퍼런스 타입은 하위 컴포넌트에서 변경가능하지만 사용 X, emit으로 부모로 올려서 변경
      context.emit('toggleLike');
    };
    return { isLikeClasss, typeName, toggleLike };
  },
};
</script>

<style></style>
