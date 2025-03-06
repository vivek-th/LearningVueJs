<!-- 19 august and i'll be studying http -->
 <template>
  <div>
    <button @click="getPost">Load posts</button>
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.id }}{{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <hr/>
    </div>
    <div>{{ errormsg }}</div>
  </div>
</template>
 <script>
import axios from "axios";
export default {
  name: "http9aug",
  data() {
    return {
      posts: [],
      errormsg:" ",
    };
  },
  methods: {
    
    getPost() {
      console.log("Button is clicked")
      axios
        .get("https://jsonplaceholder.org/posts")
        .then((response) => {
          console.log(response.data);
          this.posts=response.data
        })
        .catch((error) => {
          console.log(error);
          this.errormsg="error while retreiving data"
        });
    },
  },
};
</script>
<style scoped>
</style>