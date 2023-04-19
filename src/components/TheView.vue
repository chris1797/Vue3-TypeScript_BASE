<template>
  <main>
<<<<<<< Updated upstream
    <ScriptSetup></ScriptSetup>
=======
    <!-- <PracticeTemplate @convert-switch="convertSwitch"></PracticeTemplate> -->
    <RouterLink to="/"> click </RouterLink>
    <!-- <PracticeTemplate2 :switchCondition="switchCondition"></PracticeTemplate2> -->
>>>>>>> Stashed changes
  </main>
</template>

<script setup lang="ts">
<<<<<<< Updated upstream
import ScriptSetup from './ScriptSetup.vue';
=======
// import TemplateRefs from './TemplateRefs.vue';
import PracticeTemplate from '@/components/PracticeTemplate.vue';
import PracticeTemplate2 from '@/components/PracticeTemplate2.vue';
import HomeView from '@/views/HomeView.vue';
import { Ref, ref } from 'vue';

const switchCondition: Ref<boolean> = ref(false);
// emit 받은 event 정의
const convertSwitch = () => {
  switchCondition.value = !switchCondition.value;
  console.log('Current switch condition: ', switchCondition.value);
};
>>>>>>> Stashed changes
</script>

<style lang="scss" scoped></style>
