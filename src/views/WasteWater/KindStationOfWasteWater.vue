<template>
  <div class="aboutOurCompany">
    <div class="title"><h3>الصرف الصحي</h3></div>

    <v-divider></v-divider>
    <v-container>
      <div>
        <v-row><h2 class="mt-10">أنواع محطات المعالجة</h2></v-row>
        <v-row>
          <v-col cols="12" lg="8" sm="10" xs="10">
            <v-expansion-panels v-model="panel" multiple>
              <v-expansion-panel
                v-for="(item, i) in ArrayOFAnElsherka"
                :key="i"
                class="changeTitleStyle"
              >
                <v-expansion-panel-title class="fade-in">
                  <h3>{{ item.title }}</h3>
                </v-expansion-panel-title>
                <v-expansion-panel-content>
                  <h4 class="importantSite" v-if="item.text">
                    {{ item.text }}
                  </h4>
                  <ul v-if="item.subtext">
                    <li v-for="i in item.subtext" :key="i">
                      <h3 v-animate-onscroll="{ down: 'text-shadow-pop-top' }">
                        {{ i.subTitle }}
                      </h3>
                      <h4>{{ i.subtext }}</h4>
                      <br />
                    </li>
                  </ul>
                  <h4 class="brown--text" v-if="item.text3">
                    {{ item.text3 }}
                  </h4>
                  <h4 v-if="item.text4">{{ item.text4 }}</h4>
                  <br />
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
      panel: [0],
      ArrayOFAnElsherka: [
        {
          title: "محطات المعالجه",
          text: "باختصار يتم في المدن والقرى تجميع مياه الصرف الصحي في خطوط يتم توجيهها الى محطات المعالجة التي هي على نوعين :",
          subtext: [
            {
              id: "1",
              subTitle: "المحطات المفتوحة ",
              subtext:
                " تدخل فيها المياه في عدة مراحل من أحواض ترسيب وتجميع وتصفية لفصل المواد المحملة بالمياه واستبعاد مالايمكن الاستفادة منه وترسيب الباقي لاستخدامه كسماد وكذلك استخدام المياه المصفاة واعادة توجيهها لاقنية الري وعيوب هذه الطريقة الروائح الكريهة التي تصدر منها على الجوار وحاجتها لمساحات كبيرة ( حسب حجم المياه المصصممة لاستيعابها ) وبالتالي يجب أن تكون بعيدة ماأمكن عن المجمعات السكنية ",
            },
            {
              id: "2",
              subTitle: "الطريقة المغلقة ",
              subtext:
                " لاتختلف آلية المعالجة كثيراً عن النظام السابق غير أنها مغلقة لايشعر أحد بوجودها لانها محكمة الاغلاق ويمكن تنفيذها في حديقة عامة مثلاً .",
            },
          ],
          text4:
            "للنظامين الاحجام المناسبة والتصميم المناسب حسب كميات المياه المطلوب معالجتها يومياً .",
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