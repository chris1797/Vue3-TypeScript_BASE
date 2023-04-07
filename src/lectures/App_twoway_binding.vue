<template>
  <div>
    <h2>Input Value</h2>
    <!-- <input type="text" :value="inputValue" @input="event => (inputValue = event.target.value)" /> -->
    <!-- v-model 로 위 양방향 바인딩 작업을 간단히 구현 -->

    <input type="text" v-model="inputValue" />
    <!-- <input type="text" v-model.trim="inputValue" /> 
      앞뒤 공백 trim -->

    <!-- <input type="text" v-model.number="inputValue" /> 
      String, Number 타입까지 바인딩 -->

    <!-- <input type="text" v-model.lazy="inputValue" /> 
    Focus out 됐을 때 적용-->
    <div>{{ inputValue }}</div>
    <div>{{ typeof inputValue }}</div>

    <h2>textarea value</h2>
    <!-- <textarea :value="textareaValue" @input="event => (textareaValue = (event.target as HTMLInputElement).value)">
      </textarea> -->
    <textarea v-model="textareaValue"> </textarea>
    <div>{{ textareaValue }}</div>

    <h2>checkbox value</h2>
    <label for="checkbox">{{ checkboxValue }}</label>
    <input type="checkbox" id="checkbox" v-model="checkboxValue" true-value="Yes" false-value="No" />
    <!-- <input type="checkbox" :checked="checkboxValue" @change="event => (checkboxValue = event.target.checked)" /> -->

    <h3>checkbox values</h3>
    <label>
      <input type="checkbox" value="html" v-model="checkboxValues" />
      HTML
    </label>
    <label>
      <input type="checkbox" value="css" v-model="checkboxValues" />
      css
    </label>
    <label>
      <input type="checkbox" value="javascript" v-model="checkboxValues" />
      javascript
    </label>
    <div>{{ checkboxValues }}</div>

    <h2>radio value</h2>
    <label for="radio">
      <input type="radio" name="type" value="O" v-model="radioValue" />
      <!-- <input type="radio" name="type" value="O" :checked="radioValue === O"
        @change="event => (radioValue = event.target.value)" /> -->
      O형
    </label>
    <label for="radio">
      <input type="radio" name="type" value="A" v-model="radioValue" />
      A형
    </label>
    <div>
      {{ radioValue }}
    </div>

    <h2>Select value</h2>
    <select v-model="selectValue">
      <!-- <select :value="selectValue" @change="event => (selectValue = event.target.value)"> -->
      <option value="html">HTML 수업</option>
      <option value="css">CSS 수업</option>
      <option value="javascript">JavaScript 수업</option>
    </select>
    <div>{{ selectValue }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const inputValue = ref('');
    const textareaValue = ref('');
    const checkboxValue = ref('Y');
    const radioValue = ref('O');
    const selectValue = ref('html');
    const checkboxValues = ref([]);

    return {
      inputValue,
      textareaValue,
      checkboxValue,
      radioValue,
      selectValue,
      checkboxValues,
    };
  },
};
</script>
<style lang="scss" scoped></style>
