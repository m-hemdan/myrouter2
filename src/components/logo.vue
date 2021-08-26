<template>
  <nav>
    <!-- first app bar in web page by logo and social media -->
    <v-toolbar color="#1f659b" class="hidden-sm-and-down" max-height="65px">
      <v-toolbar-title>
        <span>
          <v-img
            src="https://i.ibb.co/KKqWpHF/logo-Ascww.png"
            max-height="55px"
            contain
            position="right"
          />
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span>
        <router-link to="/phone" class="removeTextDecoration">
          <v-icon class="iconContact" color="white">phone</v-icon>
        </router-link>
        <router-link to="/contact" class="removeTextDecoration">
          <v-icon class="iconContact" color="white"
            >mail</v-icon
          ></router-link
        >
      </span>
    </v-toolbar>
  <!--  <v-toolbar class="hidden-sm-and-down toolbarTabs">
      <v-toolbar-items>
        <div v-for="(item, i) in items" :key="i">
          <v-menu
            v-if="item.subMenuItem"
            open-on-hover
            offset-y
            transition="fab-transition"
           
          >
            <template v-slot:activator="{ on }">
              <v-btn class="no-active" depressed v-on="on" height="100%">
                <v-icon v-if="item.icon" class="blue--text">{{
                  item.icon
                }}</v-icon>
                <span class="btnTextTab">{{ item.title }}</span>
                <v-icon class="blue--text" center>call-made</v-icon>
              </v-btn>
            </template>

            <v-list>
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              :prepend-icon="item.action"
              no-action
            >
              <template v-slot:activator>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>

              <v-list-tile
                v-for="subItem in item.items"
                :key="subItem.title"
               
              >
                <v-list-tile-content>
                  <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-icon>{{ subItem.action }}</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list-group>
          </v-list>
          </v-menu>

          <v-btn v-else depressed v-on="on" height="100%" :to="item.link">
          <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
            {{ item.title }} 
          </v-btn>
        </div>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <div class="d-flex social_media_color">
        <v-tooltip bottom v-for="(item, i) in social_media" :key="i">
          <template v-slot:activator="{ on }">
            <a :href="item.link">
              <img :src="item.srcmedia" class="ma-1" width="30vh" v-on="on"
            /></a>
          </template>
          <span>{{ item.name }}</span>
        </v-tooltip>
      </div>
    </v-toolbar>-->
    <v-toolbar class="hidden-sm-and-down toolbarTabs">
      <v-toolbar-items>
        <div v-for="(item, i) in items" :key="i">
          <v-menu
            v-if="item.subMenuItem"
            open-on-hover
            offset-y
            transition="fab-transition"
            bottom
            right
          >
            <template v-slot:activator="{ on }">
              <v-btn class="no-active" depressed v-on="on" height="100%">
                <v-icon v-if="item.icon" class="blue--text">{{
                  item.icon
                }}</v-icon>
                <span class="btnTextTab">{{ item.title }}</span>
                <v-icon class="blue--text" center>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
            <v-list-group
              v-for="subItem in item.subMenuItem"
              :key="subItem.text"
              v-model="subItem.active"
              prepend-icon="mdi-bird"
              no-action
            >
              <template v-slot:activator>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ subItem.text }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list-group>
          </v-list>
          <!--
            <v-list dense class="nestedList">
              <v-list-item-content
                v-for="subitem in item.subMenuItem"
                :key="subitem.id"
                router
                :to="subitem.subLinkItem"
                class="active-list-item"
              >
                <v-list-item :to="subitem.subLinkItem">
                  <v-list-item-action>
                    <v-list-item-title class="activeListItemTitle">
                      {{ subitem.text }}</v-list-item-title
                    >
                  </v-list-item-action>
                </v-list-item>
            
              </v-list-item-content>
            </v-list>
            -->
          </v-menu>

          <v-btn v-else depressed v-on="on" height="100%">
            <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </div>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <div class="d-flex social_media_color">
        <v-tooltip bottom v-for="(item, i) in social_media" :key="i">
          <template v-slot:activator="{ on }">
            <a :href="item.link">
              <img :src="item.srcmedia" class="ma-1" width="30vh" v-on="on"
            /></a>
          </template>
          <span>{{ item.name }}</span>
        </v-tooltip>
      </div>
    </v-toolbar>
    <!-- toolbar with mob app     heeeeelp-->
    <v-toolbar class="hidden-md-and-up">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>
          <v-img
            src="https://i.ibb.co/zFXspJH/logo-Ascww-White.png"
            max-height="55px"
            contain
            position="right"
          />
        </span>
      </v-toolbar-title>
    </v-toolbar>
    <!-- list menu in mob -->
    <v-navigation-drawer
      width="90%"
      v-model="drawer"
      absolute
      temporary
      right
      app
      class="hidden-md-amd-up"
    >
      <v-list-item class="itemContent">
        <v-list-item-content>
          <v-list-item-title>
            <v-img
              max-height="200px"
              max-width="200px"
              src="https://i.ibb.co/hC8tMYk/ascww-logo.png"
              contain
              position="center"
              alt=" شركه مياه الشرب والصرف الصحي بأسيوط والوادي الجديد"
            />
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list>
        <v-list-group
          v-for="(item, i) in items"
          :key="i"
          class="itemTitle"
          active-class="highlighted"
        >
          <v-list-item right slot="activator" :to="item.link">
            <v-list-item-title class="white--text">
              {{ item.title }}</v-list-item-title
            >
          </v-list-item>
          <div v-if="item.subMenuItem">
            <div v-for="(sub, i) in item.subMenuItem" :key="i">
              <v-list-item class="subTitleNavigator">
                <v-list-item-title :to="sub.sublink" class="white--text">{{
                  sub.text
                }}</v-list-item-title>
                <v-divider></v-divider>
              </v-list-item>
              <v-divider class="white--text"></v-divider>
            </div>
          </div>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      drawer: null,

      items: [
        {
          title: "الرئيسيه",
          icon: "home",
          link: "/",
        },
        {
          title: "عن الشركه",
         subMenuItem: [
            { text: "نبذة عن الشركة", subLinkItem: "/aboutTheCompany" },
            { text: "تاريخ تطور قطاع المياه", subLinkItem: "/about" },
            { text: "فروع الشركه", subLinkItem: "/aboutTheCompany" },
            { text: "الرؤيه و الرساله", subLinkItem: "/aboutTheCompany" },
            { text: "الهيكل التنظيمي", subLinkItem: "/aboutTheCompany" },
            { text: "إنجازات الشركة", subLinkItem: "/aboutTheCompany" },
            {text: "الشركه القابضه والشركات التابعه",subLinkItem: "/aboutTheCompany",},
          ],
        },
        {
          title: "التوعيه وخدمه العملاء",
          active: true,
          subMenuItem: [
            { text: "التوعيه و الأتصال", subLinkItem: "" },
            { text: "ركن الأطفال", subLinkItem: "" },
            { text: "لك سيدتي", subLinkItem: "" },
          ],
        },
        {
          title: "جوده المياه",
          active: false,

          subMenuItem: [
            { text: "جوده المياه", subLinkItem: "" },
            { text: "تنقيه مياه الشرب", subLinkItem: "" },
            { text: " معالجه مياه الصرف الصحي", subLinkItem: "" },
          ],
        },
        {
          title: "المناقصات",
          active: true,
          subMenuItem: [
            {
              text: " إحلال وتجديد شبكات المياه علي مستوي محافظه الوادي الجديد",
              subLinkItem: "",
            },
            { text: "توريد طلمبات اعماق غاطسه ", subLinkItem: "" },
            { text: "شبكات مدنيه باريس بالوادي الجديد", subLinkItem: "" },
            { text: "صرف صحي أبوتيج", subLinkItem: "" },
            { text: "صرف صحي البداري", subLinkItem: "" },
            { text: "عمليه إحلال و تجديد الداخليه", subLinkItem: "" },
            { text: "عمليه احلال و تجديد طرد ", subLinkItem: "" },
            {
              text: "عمليه احلال و تجديد شبكات المياعلي مستوي محافظه اسيوط ",
              subLinkItem: "",
            },
          ],
        },
        {
          title: "الصرف الصحي",
          active: true,
          subMenuItem: [
            { text: "معالجه الصرف الصحي", subLinkItem: "" },
            {
              text: "تعريف بأهميه التخلص الاَمن من الصرف الصحي",
              subLinkItem: "",
            },
            { text: "مسار مياه الصرف الصحي ", subLinkItem: "" },
            {
              text: "معالجه الصرف الصحي الخام و أنواع محطات المعالجه",
              subLinkItem: "",
            },
            { text: "صرف صحي البداري", subLinkItem: "" },
            { text: "أهميه الحفاظ علي شبكه الصرف الصحي ", subLinkItem: "" },
            { text: "دور إداره الصرف الصناعي", subLinkItem: "" },
            { text: " الصرف الصناعي", subLinkItem: "" },
          ],
        },
        {
          title: "وظائف",
          active: true,
          subMenuItem: [
            { text: "مسابقات و وظائف", subLinkItem: "" },
            { text: "نتائج المسابقات", subLinkItem: "" },
          ],
        },
        {
          title: "خدمات",
          active: true,
          subMenuItem: [
            { text: "خدمات المعامل", subLinkItem: "" },
            { text: "الخط الساخن", subLinkItem: "" },
            { text: " خدمه العملاء", subLinkItem: "" },
          ],
        },

        {
          title: "المركز الأعلامي",
          active: true,
          subMenuItem: [
            { text: "أخبار الشركه", subLinkItem: "" },
            { text: "معرض الصور", subLinkItem: "" },
          ],
        },
      ],
    };
  },
  methods:{
  
  },
  computed: {
    social_media() {
      return this.$store.state.social_media;
    },
  },
};
</script>
<style>
.social_media_color a:hover {
  opacity: 0.8;
}
.itemContent,
.itemTitle {
  background: linear-gradient(to left, #003369, #578cb4);
  font-family: fantasy, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.subTitleNavigator {
  background: #00295f;
}
.highlighted {
  background-color: #578cb4;
}
.mainToolbar {
  background: #578cb4;
}

.subTitle {
  position: center;
  color: white;
}
.iconColor {
  color: #00295f;
}
.no-active:hover {
  background-color: #1f659b !important;
  color: white !important;
}
.active-list-item:hover {
  background-color: #578cb4;
}
.iconContact {
  margin-left: 20px !important;
  color: white;
}
.iconContact:hover {
  opacity: 0.5;
}
.nestedList {
  border-top-color: rgb(22, 19, 26);
}
.removeTextDecoration {
  text-decoration: none !important;
}
</style>