<template>
  <div class="aboutOurCompany">
    <div class="title"><h3>الصرف الصحي</h3></div>

    <v-divider></v-divider>
    <v-container>
      <div>
        <v-row
          ><h2 class="mt-10">
            تعريف بأهمية التخلص الآمن من الصرف الصحى
          </h2></v-row
        >
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
                  <h4 v-if="item.text2">
                    {{ item.text2 }}
                  </h4>
                  <ul v-if="item.subtext">
                    <li v-for="i in item.subtext" :key="i">
                      <h3 v-animate-onscroll="{ down: 'text-shadow-pop-top' }">
                        {{ i.subTitle }}
                      </h3>
                      <h4>{{ i.subtext }}</h4>
                      <br />
                      <h4>{{ i.subtext2 }}</h4>
                      <br />
                    </li>
                  </ul>
                  <h4 class="brown--text" v-if="item.text3">
                    {{ item.text3 }}
                  </h4>
                  <h4 v-if="item.text4">{{ item.text4 }}</h4>
                  <br />
                  <h4 v-if="item.text5">{{ item.text5 }}</h4>
                  <br />
                  <h4 v-if="item.text6">{{ item.text6 }}</h4>
                  <br />
                  <h4 v-if="item.text7">{{ item.text7 }}</h4>
                  <br />
                  <h4 v-if="item.text8">{{ item.text8 }}</h4>
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
          title: "نبذه عن أهميه التخلص مياه الصرف الصحي ",
          text: "التخلص من مياه الصرف الصحي هو التصريف الآمن والمستدام بيئياً أو إعادة استخدام مياه الصرف المعالجة، ويطلق في القطاع على أية مياه يمكن إعادة استخدامها مرة أخرى المياه المعاد تدويرها والحمأة الناتجة عن مياه الصرف الصحي المعالجةالمخلفات الصلبة",
          text2:
            " تمتلك إمارة أبوظبي تاريخا طويلا في مجال استخدام المياه المعاد تدويرها لري المسطحات الخضراء والحدائق وتعتبر دولة الإمارات من أوائل الدول التي طبقت الإرشادات التوجيهية لمنظمة الصحة العالمية بشأن إعادة استخدام المياه الصادرة ",
          text4:
            "إن استخدام المياه المعاد تدويرها يلعب دورا هاما في تلبية الطلب المتزايد على المياه غير الصالحة للشرب في الإمارة في مجالات الري والتبريد والمطالب الصناعية.",
          text5:
            "تحتوي المخلفات الصلبة على عناصر غذائية وعضوية مهمة ومن الممكن استخدامها كأسمدة أو كمحسنات للتربة أو كوقود وتقوم الإمارة حاليا بدراسة مزيد من الخيارات للاستفادة من تلك المخلفات.",
          text6:
            "تتولى شركة أبوظبي لخدمات الصرف الصحي معظم عمليات التخلص من مياه الصرف الصحي المعاد تدويرها والمواد الصلبة حيث تبلغ شبكات نقل المياه المعاد تدويرها أكثر من 150 كم وتقوم تلك الشبكات بنقل المياه إلى المستهلك النهائي أو مواقع التفريغ.",
          text7:
            "وبالإضافة إلى ذلك تتولى الشركة عملية نقل المواد الصلبة إلى مواقع دفن النفايات بريا.",
          text8:
            "إن عملية التخلص من المياه المعاد تدويرها أو المخلفات الصلبة بواسطة الجهات المرخصة منظمة وذلك من خلال تعليمات المياه المعاد تدويرها والمخلفات الصلبة لعام 2010.",
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