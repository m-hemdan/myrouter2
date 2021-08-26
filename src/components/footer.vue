
<template>
  <v-footer class="footer" id="footer" dir="ltr">
    <div class="container mt-10 mb-10">
      <v-row>
      <div dir="rtl" class=" col-sm-12 col-md-4 footerText">
        <h2>مقـــر الشـــركــة</h2>
        <a  href="https://www.google.com/maps/place/Company+water+and+sanitation+in+Assiut/@27.1757526,31.2029076,15.25z/data=!4m5!3m4!1s0x14450b972d0fb135:0xcfbbd00ecfc7e476!8m2!3d27.1729526!4d31.2030724">
          <img src="@/assets/Images/m_map.png" width="350px"  class="mt-2"/>
        </a>
      </div>
      <div dir="rtl" class=" col-sm-12 col-md-4 footerText">
        <h2>بيــانـات الشـــركــة</h2>
        <p class="mt-5">عنوان الفرع الرئيسى: محطه مياه المرشحه بنزله عباللاه- اسيوط  </p>
        <p>رقم الهاتف: 088-2131662 / 2331604    </p>
        <p> صندوق بريد: 71111 </p>
          <div class="d-flex social_media_color" >
        <v-tooltip bottom v-for="(item,i) in social_media" :key="i">
          <template v-slot:activator="{ on }">
            <a :href="item.link">
              <img
                :src="item.srcmedia"
                class="ma-1"
                width="30vh"
          
                v-on="on"
            /></a>
          </template>
          <span>{{ item.name }}</span>
        </v-tooltip>
      </div>
        </div>
      <div dir="rtl" class=" col-sm-12 col-md-4 footerText" >
        <v-img src="https://i.ibb.co/88cY5jh/logo-ascww-transparent.png" />
         <p class="mt-5"> 
         شركة مياه الشرب والصرف الصحي بأسيوط و الوادي الجديد أنشأت عام 1981 كشركة قطاع عام بغرض
        إدارة وتشغيل وتطوير مرافق المياه بدوائر المحافظة المختلفة. بصدور القرار
        الجمهوري رقم 135 لسنة 2004 أصبحت الشركة احدي الشركات التابعة للشركة
        القابضة لمياه الشرب والصرف الصحي.
        </p>
        </div>
      </v-row>
    </div>
 
  </v-footer>
</template>
<script>
export default {
  components: {},
  computed:{
     social_media()
    {
      return this.$store.state.social_media 
    }
  }
};
</script>
<style  scoped>
#footer {
      background: linear-gradient(rgb(66, 65, 65),rgb(41, 39, 39)) ;

  color: white;
}
.footerText
{
  font-family: Georgia, 'Times New Roman', Times, serif;
}
.copyRight
{
  background: yellow;
}
.social_media_color a:hover {
  opacity: 0.5;
}
</style>
