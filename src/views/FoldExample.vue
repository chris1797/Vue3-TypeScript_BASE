<template>
  <div>
    <br />
    <h1>My Website</h1>
    <br />

    <div class="faq">
      <div v-for="faq in faqList.slice().reverse()" :key="faq">
        <li class="faq-title">{{ faq.title }}</li>
        <button
          class="navbar-toggler"
          @click.prevent="toggleContent(faq.faq_idx)"
        >
          {{ faq.isVisible ? '▲' : '▼' }}
        </button>
        <div class="faq-content" v-show="faq.isVisible">
          {{ faq.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const faqList = ref([
  {
    faq_idx: 0,
    title: '자주 묻는 질문 1',
    content: '123111',
    isVisible: false,
  },
  {
    faq_idx: 1,
    title: '자주 묻는 질문 2',
    content: '321',
    isVisible: false,
  },
  {
    faq_idx: 2,
    title: '자주 묻는 질문 3',
    content: 'ara',
    isVisible: false,
  },
]);

function toggleContent(index) {
  // console.log('index: ', index, this.faqList[index].isVisible);
  this.faqList[index].isVisible = !this.faqList[index].isVisible;
}
</script>

<style>
@media (max-width: 600px) {
  nav {
    display: none;
  }
}

.faq {
  padding-left: 2rem;
  margin: 0 auto;
}

.faq-title {
  float: left;
  width: 80%;
}

.foldbutton {
  float: left;
}
</style>
