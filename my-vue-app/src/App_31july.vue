<template>
    <div>
      <!-- <Article30july id="myarticle" myname="vivek" /> -->
  
      <!-- <button @click="showPopup = true">Show popup</button>
      <Popup_31july v-show="showPopup" @close="atPopup" /> -->
      <!-- <input type="text" value="" v-model="myname"> -->
      <!-- <Grid v-model="myname"/> -->
      <customInput_31july>
        <!-- <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqZUg6BJj5OGPtrQPp9oCbtZX-vMF9gMizQ&s" alt=""> -->
        <template v-slot:header>
          <h2>this is a header</h2>
        </template>
        <template v-slot:default>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqZUg6BJj5OGPtrQPp9oCbtZX-vMF9gMizQ&s"
            alt=""
          />
        </template>
        <template v-slot:footer>
          <p>this is footer</p>
        </template>
      </customInput_31july>
    </div>
  </template>
  
  
  <script>
  import Article30july from "./Components/Article30july.vue";
  import Popup_31july from "./Components/Popup_31july.vue";
  import Grid from "./Components/Grid.vue";
  import customInput_31july from "./Components/customInput_31july.vue";
  
  export default {
    name: "App",
    data() {
      return {
        mylocation: "ludhiana",
        showPopup: false,
        myname: "",
      };
    },
    components: {
      Article30july,
      Popup_31july,
      Grid,
      customInput_31july,
    },
    provide() {
      return {
        city: "my dearLudhiana",
      };
    },
    methods: {
      atPopup(name) {
        (this.showPopup = false), console.log(`your name is ${name}`);
      },
    },
  };
  </script>
  
  <style>
  </style>