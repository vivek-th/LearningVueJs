<template>
  <div>
    <form @submit.prevent="createpost">
      <label for="userid" ref="theuser"> Enter the id</label>
      <input type="text" id="userid" v-model="formdata.userid" />
      <label for="title"> Enter title</label>
      <input type="text" id="title" v-model="formdata.title" />
      <button type="submit"> create the post</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
import mymixins from './example'

export default {
    
  name: "postreq_20aug",
  mixins:[mymixins]
 
};
</script>
<style>
</style>