<template>
  <div class="contact">
    <h1>This is an contact page</h1>
    <h2>userID : {{userId}} </h2>
    <h3>ddddd {{items.details}}</h3>
    </div>
</template>
<script>



export default {
    name:'contact',
    components:{
       
    },
    data(){
        return{
            userId:this.$route.params.userId,
            }
    },
    methods:{
        checkID()
        {
            this.userId=this.$route.params.userId
        },
   },
    computed:{
    items(){
       // return this.$store.dispatch('findSelectedItem')
     return this.$store.state.arrayMsg.find(item=>item.id==this.userId)
    },
    },
    watch:{
        $route:'checkID'
    }
    
}
</script>