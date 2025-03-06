<template>
  <div>
   {{ formattedDate }}
    <form v-on:submit.prevent="submitForm">
      <h1>students form</h1>
      <p>
        Gender:
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          key=""
          v-model="gender"
        />
        <label for="male">Male</label>
      </p>
      <p>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          v-model="gender"
        />
        <label for="female">Female</label>
      </p>
      <p>Student name: <input type="text" v-model="studentName" /></p>
      <!-- <button type="submit" @click="addGender">Submit</button> -->
    </form>
    <form id="maleDetails" v-show="isMale">
      <label for="maleDetails"
        >Hey Mr. {{ studentName }}! Enter your wife/mother name:</label
      >
      <input type="text" placeholder="male" />
    </form>

    <form id="femaleDetails" v-show="isFemale">
      <label for="femaleDetails"
        >Hey Ms. {{ studentName }}! Enter your husband/father name:</label
      >
      <input type="text" placeholder="female" />
    </form>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  name: "assignment",
  data() {
    return {
      gender: "",
      isMale: false,
      isFemale: false,
      studentName: " ",
      formattedDate:moment().format('MMMM Do YYYY, h:mm:ss a'),
    };
  },
  methods: {
    submitForm() {
      if (this.gender == "male") {
        this.isMale = true;
      } else if (this.gender == "female") {
        this.isFemale = true;
      }
    },
  },
};
</script>