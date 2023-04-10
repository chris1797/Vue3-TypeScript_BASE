<template>
  <main>
    <div class="container py-4">
      <div class="row g-5">
        <div v-for="post in posts" :key="post.key" class="col col-4">
          <AppCard
            :title="post.title"
            :contents="post.contents"
            :type="post.type"
            :is-like="post.isLike"
            @toggle-like="post.isLike = !post.isLike"
          ></AppCard>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import AppCard from '@/components/AppCard.vue';
import { reactive } from 'vue';
export default {
  components: {
    AppCard,
  },
  setup() {
    const obj = reactive({
      title: '제목2',
      contents: '내용2',
    });

    const posts = reactive([
      { title: '제목1', contents: '내용1', isLike: true, type: 'news' },
      { title: '제목2', contents: '내용2', isLike: true, type: 'news' },
      { title: '제목3', contents: '내용3', isLike: true, type: 'news' },
      { title: '제목4', contents: '내용4', isLike: false, type: 'notice' },
      { title: '제목5', contents: '내용5', isLike: false, type: 'notice' },
    ]);
    return { obj, posts };
  },
};
</script>

<style lang="scss" scoped></style>
