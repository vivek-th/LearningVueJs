<!-- this is work for 26july and today we will be working with event handling -->

<template>
  <div>
    <pre id="json">{{ JSON.stringify(formvalues, null, 2) }}</pre>
    <div v-pre>This is {{ name }} </div><br />
    Counter: {{ count }} <br />
    <button v-on:click="name = 'batman'">CHange name</button>
    <button v-on:click="increment">increase counter</button>
    <form @submit.prevent="submitForm">
      <input @keyup.enter="submitForm" type="text" v-model="formvalues.name" />

      <!-- <select name="country" v-model="increment.Array">
      <option value="india">India</option>
      <option value="tukrey">Turkey</option>
    </select> -->

      <select name="country" multiple v-model="formvalues.selectdata">
        <option value="india">India</option>
        <option value="tukrey">Turkey</option>
      </select>
      <br />

      <label for="working">Open to work?</label>
      <input type="checkbox" id="working" v-model="formvalues.remoteWork" />
      <br />

      <input
        type="checkbox"
        id="html"
        value="html"
        v-model="formvalues.FormData"
      />
      <label for="html">html </label><br />
      <input
        type="checkbox"
        id="css"
        value="css"
        v-model="formvalues.FormData"
      />
      <label for="css">css</label><br />
      <input type="checkbox" id="js" value="js" v-model="formvalues.FormData" />
      <label for="js">js</label><br />

      <!-- <button type="submit">submit</button> -->
    </form>
  </div>
</template>



<script>
export default {
  name: "App",
  data() {
    return {
      name: "Vivek",
      count: 1,
      formvalues: {
        name: "",
        country: "",
        selectdata: [],
        remoteWork: true,
        FormData: [],
      },
    };
  },
  methods: {
    increment(event) {
      this.count++, console.log(event);
    },
    submitForm() {
      console.log("Form Values are", this.formvalues);
    },
  },
};
</script>



<style>
#json {
  text-align: left;
}
</style>