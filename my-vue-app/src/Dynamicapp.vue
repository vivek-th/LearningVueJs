<template>
    <div>
      <DynamicComp2_2august />
      <DynamicComp_2august/>
  
      <button @click="activeTb='DynamicComp2_2august'"> render 2</button>
      <button @click="activeTb='DynamicComp_2august'"> render 1</button>
      <component :is="activeTb"/>
      
    </div>
  </template>
  <script>
  import DynamicComp2_2august from './Components/DynamicComp2_2august.vue';
  import DynamicComp_2august from './Components/DynamicComp_2august.vue';
  export default{
  
    name:"App",
    data(){
      return{
        activeTb: 'DynamicComp2_2august'
      }
  
    },
    components:{
      DynamicComp2_2august, DynamicComp_2august
    }
  }
  </script>
  <style>
  </style>
  