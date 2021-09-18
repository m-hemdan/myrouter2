<template>
  <nav>
    <!-- first app bar in web page by logo and social media -->
    
    <v-toolbar
      dense
      
      color="#1f659b"
      class="hidden-sm-and-down xz"
      max-height="65px"
    >
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
          <v-icon class="iconContact" color="white">mail</v-icon></router-link
        >
      </span>
    </v-toolbar>
    
    
    
    <v-toolbar  class="hidden-sm-and-down toolbarTabs">
      <v-toolbar-items>
        <div v-for="(item, i) in menuItems" :key="i">
          <v-menu
         
       
            v-if="item.subMenuItem"
            open-on-hover
            offset-y
            transition="fab-transition"
            bottom
            right
          >
            <template v-slot:activator="{ on }">
              <v-btn class="no-active"   depressed v-on="on" height="100%" @click="checkTenders">
                <v-icon v-if="item.icon" class="blue--text">{{
                  item.icon
                }}</v-icon>
                <span class="btnTextTab">{{ item.title }}</span>
                <v-icon class="blue--text" center>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list  >
              <v-list-item-group  
              v-model="model"
                 active-class="active_submenu">
                 
                <div v-for="(oItem, i) in item.subMenuItem" :key="i" >
                  <v-list-item
               
                    no-action
                    :to="oItem.subLinkItem"
                  >
                    <v-list-item-icon>
                      <v-icon>mdi-bird</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="oItem.text"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </div>
              </v-list-item-group>
            </v-list>
          </v-menu>

          <v-btn class="btnMainTab" v-else depressed v-on="on" height="100%">
            <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
            <h3>{{ item.title }}</h3>
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
          v-for="(item, i) in menuItems"
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
      model: 1,
    };
  },
  methods: {},
  computed: {
    social_media() {
      return this.$store.state.social_media;
    },
    menuItems() {
      return this.$store.state.menuItems;
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
.btnTextTab {
  font-weight: bold;
}
.btnMainTab {
  font-weight: bold;
  color: green;
}
.bg-active {
  background-color: black;
  color: white !important;
}
.active_submenu {
  background: linear-gradient(to left, #003369, #578cb4);
  color: white !important;
}
</style>