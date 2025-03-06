<!-- It is 1 of august and today we will be studying slot prop  -->

<template>
  <div>
    <!-- <h1>this is in child, and it is blue</h1> -->
    <h1 v-for="person in people" :key="person.name">
      <slot :name="person.name" :age="person.age"> </slot>
    </h1>
  </div>
</template>

<script>
export default {
  name: "slotprop_1august",
  data() {
    return {
      people: [
        {
          name: "Vivek",
          age: 23,
          address: "ludhiana",
        },
        {
          name: "Rohan",
          age: 26,
          address: "delhi",
        },
        {
          name: "Garima",
          age: 21,
          address: "Noida",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1{
  color:blue;
}
</style>