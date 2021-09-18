<template>
  <div class="aboutOurCompany">
    <div class="title"><h3>المعمل المركزي</h3></div>

    <v-divider></v-divider>
    <v-container>
      <v-row>
        <h4 class="blue--text">
          شركه مياه الشرب والصرف الصحي بأسيوط و الوادي الجديد
        </h4>
        <h4>/ المعمل</h4></v-row
      >
      <v-row class="container mt-10"
        ><v-img
          src="@/assets/Images/24.png"
          size="100% 100%"
       
          class="Labimg"
        ></v-img
      ></v-row>
      <div>
        <v-row
          ><h3 class="mt-10 blue--text">
            شركه مياه الشرب والصرف الصحي بأسيوط و الوادي الجديد
          </h3></v-row
        >
        <v-row>
          <v-col cols="12" lg="8" sm="10" xs="10">
            <v-expansion-panels v-model="panel" multiple>
              <v-expansion-panel
                v-for="(item, i) in ArrayOFAnElsherka"
                :key="i"
                class="changeTitleStyle"
              >
                <v-expansion-panel-header expand-icon="mdi-menu-down">
                  {{ item.title }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <h4 class="importantSite" v-if="item.text">
                    {{ item.text }}
                  </h4>
                  <ul v-if="item.subtext">
                    <li v-for="i in item.subtext" :key="i">{{ i }}</li>
                  </ul>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
         
            <v-row justify="center" class="mt-10">
            
                <v-col
                v-for="(expandImg,i) in ImagesLab" :key="i"
                class="pa-1  ma-1"
                xs="12"
                sm="5"
                md="5"
                lg="5"
                cols="12"
              >
              <expandable-image
              class="Labimg"
              :src="expandImg"
                width="250px"
                height="180px"
              />
                </v-col>
           
            </v-row>
           
          </v-col>
          <v-col cols="12" lg="4" sm="4" xs="4">
            <Link></Link>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
import Link from "../../components/link.vue";


export default {
  components: { Link,  },
  data() {
    return {
      panel: [0],
 
      ArrayOFAnElsherka: [
        {
          title: "تحليل العينات",
          text: "يتم متابعة جودة المياه المنتجة من المحطات بكافة انواعها (مرشحة ونقالى و زلطية وجوفية ومعالجة حديد ومنجنيز ) بأخذ عينات دورية من تلك المحطات وتحليلها بمعامل الشركة وذلك للوقوف على جودة المياه المنتجة و التأكد من مدى مطابقتها للمواصفات و المعايير الواردة بقرار وزارة الصحة رقم 458 لسنة  2007 وانواع التحاليل كالتالى :",
          subtext: [
            "تحاليل فيزيائية :  الرقم الهيدروجينى :   العكارة , اللون , الطعم ,الرائحة",
            "تحاليل كيميائية :   حديد ، منجيز ، امونيا , عسر كلى ، عسر كالسيوم , عسر ماغنسيوم , القلوية الكلية , الاملاح الذائبة الكلية",
            "تحاليل ميكروبيولوجية",
            "فحص ميكروسكوبى",
          ],
        },
      ],
      ImagesLab: [
        require("@/assets/Images/21.jpg"),
          require("@/assets/Images/19.jpg"),
         
        require("@/assets/Images/30.jpg"),
        require("@/assets/Images/23.jpg"),
      
      ],
    };
  },
};
</script>
<style >
h3 {
  font-family: Arial, Helvetica, sans-serif;
}
.changeTitleStyle {
  background: rgba(222, 184, 135, 0.192) !important;
}
.Labimg {
  box-shadow: gray 3px 3px 3px 3px;

}


</style>