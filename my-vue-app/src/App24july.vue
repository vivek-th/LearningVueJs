<script >
export default {
  name: "App",

  data() {
    return {
      name: "vivu",
      course: "Learning vue js with vivek",
      plainText: "<b>This is in bold </bd>",
      headingID: "heading1",
      ispromoted: true,
      isSold:true,
      mycolor: "gray",
      num:90,
      show:true,
    };
  },
};
</script>

<template>
  <div>
    <div>hello vivek!!! How are {{ name }}?</div>
    <div v-text="course"></div>
    <div>{{ plainText }}</div>
    <div v-html="plainText"></div>
    <h1  v-bind:style="{
      // color: 'pink',
      color: mycolor,
    }"> This is heading</h1>
    <h2 v-bind:class="ispromoted && 'promoted'"> is it italics?</h2>
    <h2 v-bind:class= "isSold? ' sold':'notSold' "> Sold or not</h2>
    <h2 v-bind:class="{
      promoted:ispromoted,
      sold:isSold,
      notSold: !isSold
    }"> check it in webTools</h2>

    <h2 v-if="num<0">This is conditional statement negative num</h2>
    <h2 v-else-if="num>0">This is conditional statement where num is positive</h2>

    <h2 v-show="show"> this is v shown</h2>
  </div>
</template>

<style scoped>
  #heading1{
    color: aqua;
  }
  .promoted{
    font-style: italic;
  }
  .sold{
    color: green;
  }
  .notSold{
    color: red;
  }
</style>
