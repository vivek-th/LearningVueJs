<template>
  <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" >
</template>

<script>
export default {
  name: "Grid",
  props: {
    modelValue:String
  },
};
</script>


<style>
</style>