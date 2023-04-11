<template>
  <div class="row g-3">
    <!-- @click="$emit('createPost', 1, 2, 3, 'chris')" -->
    <div class="col col-2">
      <select class="form-select" aria-label="Default select example">
        <option selected>카테고리 선택</option>
        <option value="news">뉴스</option>
        <option value="notice">공지사항</option>
      </select>
    </div>
    <div class="col col-8">
      <input v-model="title" type="text" class="form-control" />
    </div>
    <div class="col col-2 d-grid">
      <button class="btn btn-primary" @click="createPost">button</button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  //emit할 이벤트들 정의
  emits: {
    // validator(유효성 체크)가 필요없다면 createPost: null로
    createPost: (newPost: { type: string; title: string }) => {
      if (!newPost.type) {
        return false;
      } else if (!newPost.title) {
        return false;
      }
      return true;
    },
  },

  setup(props, { emit }) {
    const title = ref('');
    const type = ref('news');

    const createPost = () => {
      const newPost = {
        type: type.value,
        title: title.value,
      };
      // 상위 컴포넌트로 이벤트 넘기기(파라미터 포함)
      emit('createPost', newPost);
      type.value = 'news';
      title.value = '';
    };
    return { createPost, title, type };
  },
};
</script>

<style lang="scss" scoped></style>
