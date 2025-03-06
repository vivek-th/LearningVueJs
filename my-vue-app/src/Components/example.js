export default {
  
    mounted(){
        this.$refs.theuser.focus()
      },
      data() {
        return {
          formdata: {
            userid: "",
            title: "",
          }
        }
    },
        methods:{
            createpost(){
               
                post("https://jsonplaceholder.org/posts", this.formdata)
                .then((response)=>console.log(response))
                .catch((error)=>console.log(error));
            
        }
    }
}