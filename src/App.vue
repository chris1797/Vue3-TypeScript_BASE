<template>
  <div>
    <div id="modifiers">
      <div @click="clickDiv">
        DIV 영역
        <p @click="clickP">
          p 영역
          <span @click.stop="clickSpan"> SPAN 영역 </span>
          <a href="https://naver.com" @click.prevent.stop="clickA">a 영역</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const clickDiv = () => {
      console.log('clickDiv');
      location.href = 'https://naver.com';
    };

    const clickP = () => {
      console.log('clickP');
    };

    const clickSpan = () => {
      console.log('clickSpan');
      // e.stopPropagation();
      alert('좋아요');
    };

    const clickA = (e: any) => {
      // e.preventDefault();
      alert('어쩔건데~');
    };

    return { clickDiv, clickP, clickSpan, clickA };
  },
};
</script>

<style lang="scss" scoped>
#modifiers div,
#modifiers p,
#modifiers span {
  padding: 40px;
}

#modifiers div {
  background-color: #ccc;
}

#modifiers p {
  background-color: #999;
}

#modifiers span {
  background-color: #666;
  display: block;
}
</style>
