<!-- Today is 30july and we will be learning more about props like its types , nonprops attr. -->


<template>
  <div>
    <div>this is {{ myname }}</div>
    <h2 v-bind="$attrs">this is second heading of {{ city }}</h2>
  </div>
</template>


<script>
export default {
  name: "Article30july",
  data() {
    return {};
  },
  props: {
    myname: String,
  },
  inheritAttrs: false,
  inject: ["city"],
};
</script>

<style>
</style>