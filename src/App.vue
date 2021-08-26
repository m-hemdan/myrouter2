<template>
  <v-app>

   
   <v-main> 
      <Logo></Logo>
   <router-view/>
    <Footer></Footer>
    <copy-right></copy-right>
    
    </v-main>
  </v-app>
</template>

<script>



import Logo from './components/logo.vue';
import Footer from './components/footer.vue'
import CopyRight from './components/CopyRight.vue';

export default {
  name: 'App',
  components:{Logo,Footer,CopyRight},
  data() {
    return {
      drawer: null,

     
      }
  }
}

</script>

