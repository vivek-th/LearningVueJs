<template>
  <div>
    <div>This is popup</div>
    <button @click="$emit('close', 'vivek')">Close popup</button>
  </div>
</template>

<script>
export default {
  name: "Popup_31july",
  data() {
    return {
      showPopup: false,
    };
  },
  emits: ["close"],
};
</script>

<style>
</style>