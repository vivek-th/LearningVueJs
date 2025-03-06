<template>
    <div>
      <button @click="activetab == customInput_31july">change tab</button>
      <button @click="activetab == slotprop_1august">anotber tab</button>
      <customInput_31july />
  
      <component :is="activetab"/>
  
      <h1>this is in parent, and is orange</h1>
  
      <slotprop_1august>
        <template v-slot:default="person">
          {{ person.age }}
          {{ person.name }}
          <h1>this is august</h1>
        </template>
      </slotprop_1august>
    </div>
  </template>
  <script>
  import slotprop_1august from "./Components/slotprop_1august.vue";
  import customInput_31july from "./Components/customInput_31july.vue";
  import CustomInput_31july from "./Components/customInput_31july.vue";
  export default {
    name: "App",
    data() {
      return {
        activetab:'customInput_31july'
      };
    },
    components: {
      slotprop_1august,
      customInput_31july
    },
  };
  </script>
  <style scoped>
  h1 {
    color: orange;
  }
  </style>