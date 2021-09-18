<template>
<div>
    <div >
      <div class="title ">  <h3 >إنجـازات الشـركـة</h3></div>
      <v-divider></v-divider>
      <v-container>
        <v-row>
          <h4 class="blue--text">
            شركه مياه الشرب والصرف الصحي بأسيوط والوادي الجديد
          </h4>
        
        </v-row>
        <v-row class="mt-5">
          <v-col class="subClass" cols="12" sm="12" xs="12" lg="12">
         
            <div>
              <div>
                <h2>انجازات الشركه</h2>
                  <div id="app">
                <PDFJSViewer :path="`${path}`" :fileName="`${name}`"/>
              </div>
              </div>
              <br />
            </div>
          </v-col>
        </v-row>
       
      </v-container>
    </div>
  </div>
 
</template>
<script>
import PDFJSViewer from '../../components/PDFJSViewer.vue'
export default {
    components:{
        PDFJSViewer
    },
  data () {
    return {
      name: 'achivement.pdf', //change which pdf file loads
      path: 'lib/web/viewer.html' //path of the PDF.js viewer.html
    }
  },
}
</script>
<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   color: #2c3e50;
 
}
h1{
  color: #1f659b;
}
</style>