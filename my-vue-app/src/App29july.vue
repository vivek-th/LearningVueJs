<!-- Work for 29 july and here we will be working with computed properties and watches -->

<template>
    <div>
      <Grid :name=myname />
      <div v-for="item in items" :key="item.id">
        <h2 v-if="item.price > 100">{{ item.itemName }} {{ item.price }}</h2>
      </div>
  
      <button @click="changeFullName">Change full name</button>
      <div>Your computed full name is {{ fullName }}</div>
  
      <h2>Current Volume is {{ volume }}</h2>
      <button @click="increase">Increase</button>
      <button @click="decrease">Decrease</button>
    </div>
  </template>
  
  <script>
  import Grid from "./Components/Grid.vue";
  
  export default {
    name: "App",
    data() {
      return {
        firstName: "Vivek",
        lastName: "Thakur",
        myname:"Vivu",
        volume: 0,
        items: [
          {
            id: 1,
            itemName: "Iphone",
            price: 100,
          },
          {
            id: 2,
            itemName: "samsung",
            price: 200,
          },
          {
            id: 3,
            itemName: "nokia",
            price: 300,
          },
        ],
      };
    },
  
    components: {
      Grid,
    },
  
    methods: {
      changeFullName() {
        this.fullName = "Jane Doe";
      },
      increase() {
        this.volume += 2;
      },
      decrease() {
        this.volume -= 2;
      },
    },
    computed: {
      fullName: {
        get() {
          return ` ${this.firstName} ${this.lastName}`;
        },
        set(value) {
          const name = value.split(" ");
          this.firstName = name[0];
          this.lastName = name[1];
        },
      },
    },
    watch: {
      volume(newvalue) {
        if (newvalue > 10) {
          alert("It is recommended to listen at safe values");
        }
      },
    },
  };
  </script>
  
  
  <style>
  </style>