 <template>
 <div>
<h2>فيديو عن <span class="green--text">الشركه </span></h2>
        <iframe
          
          class="mr-5"
            width="300"
            height="200"
            src="https://www.youtube.com/embed/AEz3Xf1bGLQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h2 class="mt-3">روابط <span class="green--text">سريعه</span></h2>
          <v-expansion-panels class="mb-6">
            <v-expansion-panel
              v-for="(item, i) in ArrayOFAnElsherka"
              :key="i"
              class="changeTitleStyle"
            >
              <v-expansion-panel-header expand-icon="mdi-menu-down">
                {{ item.title }}
              </v-expansion-panel-header>

              <v-expansion-panel-content v-if="item.img"
                ><v-img :src="item.img"></v-img
                ><router-link to="https://www.facebook.com/ASCWWeg">
                  {{ item.subText }}</router-link
                ></v-expansion-panel-content
              >
              <v-expansion-panel-content v-else
                ><h4 v-for="(subItemSite, i) in item.listofItem" :key="i">
                  <a :href="subItemSite.link" class="importantSite">
                      <v-icon>mdi-chevron-left</v-icon> {{
                    subItemSite.subImportantSite
                  }}</a>
                </h4>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
     </div>
</template>
<script>
export default {
    data(){
        return{
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
        }
    }
}
</script>
<style scoped>
.showImg {
  background: white;
  border: 1px;
}
.changeTitleStyle {
  background: rgba(222, 184, 135, 0.192) !important;
  font-family: inherit !important;
  font-weight: bold;
  color: gray !important;
}
.importantSite {
  text-decoration: none;
  color: rgba(0, 128, 0, 0.575);
}
</style>