<template>
  <main>
    <PracticeTemplate @convert-switch="convertSwitch"></PracticeTemplate>
    <PracticeTemplate2 :switchCondition="switchCondition"></PracticeTemplate2>
  </main>
</template>

<script setup lang="ts">
// import { Ref, ref } from 'vue';
// import TemplateRefs from './TemplateRefs.vue';
import PracticeTemplate from '@/components/PracticeTemplate.vue';
import PracticeTemplate2 from '@/components/PracticeTemplate2.vue';
import { Ref, ref } from 'vue';

const switchCondition: Ref<boolean> = ref(false);
// emit 받은 event 정의
const convertSwitch = () => {
  switchCondition.value = !switchCondition.value;
  console.log('Current switch condition: ', switchCondition.value);
};
</script>
<style lang="scss" scoped></style>
