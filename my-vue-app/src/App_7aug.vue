<template>
    <div>
      <div>thi is basic</div>
      <teleport to="#portal-root">
        <Portal6august />
      </teleport>
    </div>
  </template>
  <script>
  import Portal6august from "./Components/Portal6august.vue";
  export default {
    name: "App",
    data() {
      return {};
    },
    components: {
      Portal6august,
    },
  };
  </script>
  <style>
  </style>