<template>
      <div>
      
  
      <div class="title "> <h3 class="mx-auto">الــرؤيـة والـرسـالـة والقــيـم</h3></div>
      <v-divider></v-divider>
      
        <v-flex class="container ">
            <v-row class="container "><h2>الـرؤيـه</h2></v-row>
            <v-row class="container "><h4>التميز والريادة والاستدامه في تقديم خدمات مياه شرب نقية وصرف صحي اّمن</h4></v-row>
        </v-flex>
         <v-flex class="container ">
            <v-row class="container "><h2>الـرسـالـة</h2></v-row>
            <v-row class="container "><h4>تقديم خدمات مياه شرب نقيه وصرف صحي اّمن من خلال الاستخدام الامثل للموارد 
                والامكانيات بأحدث التقنيات بما يضمن الاستدامه والموائمه البينيه
                 والصحيه ونشر الوعي والثقافه المائيه في المجتمع</h4></v-row>
        </v-flex>
         <v-flex class="container ">
            <v-row class="container "><h2>القـيـم</h2></v-row>
            <v-row  v-for="(item,i) in qiem" :key="i"><h4>. {{item}}</h4></v-row>
        </v-flex>
        <v-flex class="imgVisionAndMessage">
            
        </v-flex>
      
        </div>
 
</template>
<script>
export default {
    data(){
        return{
            qiem:["جودة الاداء ", "السلوك الاخلاقي ","المــشاركة","الإنتمــاء","المصداقيه الشفافيه","العمل بروح الفريق","المســؤليه"]
        }
    }
}
</script>
<style>
h1,h2{
     color: #1f659b;
   font-family:sans-serif;
}
h4{
    font-size: 1.2em;
}
.imgVisionAndMessage
{
    height: 600px;
    background-image: url("../../assets/Images/9.jpg");
    background-size: 100% 100%;
    border-radius: 25px;
    box-shadow: 5px 5px 5px;
}
</style>