<template>
    <div>
    <div>
        hello {{myname}}
    </div>
    <h2 v-for="(name,index) in names" :key="name" >{{index}} {{ name }}</h2>
    <h3 v-for= "myname in fullname" :key="myname.first">{{ myname.first}} {{ myname.last  }} </h3 >
    <h3 v-for= "(name, key, index) in myinfo" :key="name">{{ name}} {{ key  }} {{ index }} </h3 >
    <h3 > the result is {{ add(2,3,4) }}</h3>
    <h3 > the result is {{ mul(2) }}</h3>
    
    </div> 
</template>


<script>
 export default{
    name:"App",
    data(){
        return{
            names:["Vivek", "Jane", "doe"],
            baseMul:9,
            fullname:[
                {first:"vivek", last:"Thakur"},
                {first:"jane", last:"doe"},
            ],
            myinfo:{
                name:"Vivek",
                class:"Graduated",
            },
            
        }
    },
    methods:{
        add(a,b,c){
            return a+b+c
        },
        mul(a){
            return a*this.baseMul;
        }
    }  

 }
</script>

<style>
</style>  