<template>
  <div class="aboutOurCompany">
    <div class="title"><h2>عــن الشــركــه</h2></div>
    <v-divider></v-divider>
    <v-container>
      <v-row>
        <h4 class="blue--text">
          شركه مياه الشرب والصرف الصحي بأسيوط والوادي الجديد
        </h4>
        <span class="ml-2 mr-2">/</span
        ><span class="gray--text"> عن الشـركـة </span>
      </v-row>
      <v-row class="mt-10">
        <v-col class="subClass" cols="12" sm="12" xs="12" lg="9">
          <h2>اولاً : قرار إنشاء الشركة</h2>
          <h3>
            <p >
              قرار وزير الاسكان والمرافق ( رقم 95 لسنة 2008 بالترخيص لتأسيس شركة
              تابعة مساهمة مصرية لمياه الشرب والصرف الصحى لمحافظة أسيوط ) .
            </p>
          </h3>
          <h2>ثانياً :- الأهداف الأستراتيجية للشركة : -</h2>
          <ul>
          <li>تقديم الخدمة المتميزة طبقا لأصول الصناعة والمعايير القانونية.</li>
          <li>رفع كفاءة العاملين.</li>
          <li>تعظيم الاستفادة من الأصول المملوكة للشركة.</li>
          <li>ترشيد الانفاق وتعظيم الايرادات.</li>
          <li>كسب رضاء العميل .</li>
          </ul>
        </v-col>
        <v-col cols="12" sm="12" xs="12" lg="3">
         <Link></Link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Link from "../../components/link.vue"
export default {
  name: "Anelsherka",
  components:{
Link
  },
  data() {
       return {
     
      ArrayOFAnElsherka: [
        {
          icon: "mdi-arrow-right-drop-circle-outline",
          title: "رساله الشركة",
          img: require("@/assets/Images/7.png"),
        },
        {
          icon: "",
          title: "صفحتنا علي الفيسبوك",
          img: require("@/assets/Images/8.jpg"),
          subText: "صفحتنا",
        },
        {
          icon: "",
          title: "مواقع هامة",
          listofItem: [
            {
              subImportantSite: "بوابه الحكومه المصريه",
              link: "https://www.egypt.gov.eg/arabic/home.aspx",
            },
            {
              subImportantSite: "رئاسه مجلس الوزراء",
              link: "https://www.cabinet.gov.eg/Arabic/Pages/default.aspx",
            },

            {
              subImportantSite: "الشركة القابضة لمياه الشرب و الصرف الصحى",
              link: "https://www.hcww.com.eg/ar/default.aspx",
            },
           
          ],
        },
      ],
    };
  },
  items(){
       
    },
};
</script>
