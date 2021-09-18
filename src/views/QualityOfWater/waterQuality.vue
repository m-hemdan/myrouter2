<template>
  <div class="aboutOurCompany">
    <div class="title"><h3>جوده المياه</h3></div>

    <v-divider></v-divider>
    <v-container>
      <v-row justify="center mt-7">
        <img src="@/assets/Images/16.png" width="500px" />
        <img src="@/assets/Images/17.png" width="500px" />
      </v-row>
      <div>
        <v-row><h2 class="mt-10">جوده مياه الشرب ف الاستخدام :</h2></v-row>
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
                  <h3 class="brown--text" v-if="item.text2">
                    {{ item.text2 }}
                  </h3>
                  <ul v-if="item.subtext">
                    <li v-for="i in item.subtext" :key="i">{{ i }}</li>
                  </ul>
                  <h3 class="brown--text" v-if="item.text3">
                    {{ item.text3 }}
                  </h3>
                  <h4 v-if="item.text4">{{ item.text4 }}</h4>
                  <h4 v-if="item.text5">{{ item.text5 }}</h4>
                  <h4 v-if="item.text6">{{ item.text6 }}</h4>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
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
  components: { Link },
  data() {
    return {
      panel: [0, 1],
      ArrayOFAnElsherka: [
        {
          title: "معايير الجوده",
          text: "يتم إتخاذ العديد من الإجراءات التى من خلالها يتم تقديم كوب ماء نظيف للمواطن وبأعلى جودة وذلك من خلال تنفيذ الإجراءات التى تتضمن تقديم تلك الخدمة وتتمثل فى:",
          subtext: [
            "وضع خطط لجمع العينات من جميع مراحل تنقية المياه وطرود المحطات وشبكات التوزيع وتحليلها واتخاذ كافة الإجراءات التصحيحية لمواقع تلك العينات غير المطابقة.",
            "وضع خطط لغسيل وتطهير خزانات المياه بالمحطات الكبرى والمحطات الجوفية بصفة دورية.",
            "وضع خطط لغسيل وتطهير شبكات التوزيع بصفة دورية.",
            "الاستجابة لشكاوى المواطنين التى تخص جودة المياه وذلك بأخذ العينات من مواقع تلك الشكاوى وتحليلها واتخاذ الإجراءات التصحيحية.",
          ],
        },
        {
          title: "مجهودات الشركة لتوفير كوب ماء نظيف ذو جودة عالية :- ",
          subtext: [
            " تم تركيب وتشغيل عدد ( 23 ) وحدة لمعالجة الحديد والمنجنيز بالمحطات الجوفية التى بها زيادة بتلك العناصر لإنتاج مياه مطابقة  للمواصفات وذات جودة عالية. ",
            "تم تركيب وتشغيل عدد ( 189 ) منظومة كلور لإضافة الكلور بالمحطات الجوفية لتأمين المياه المنتجة منها ضد التلوث البكتريولوجى.",
          ],
        },
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
</style>