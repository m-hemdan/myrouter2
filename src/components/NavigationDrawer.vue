<template>
     <v-navigation-drawer v-model="drawer" absolute temporary right app>
      <v-list-item class="itemContent">
        <v-list-item-content>
          <v-list-item-title>
            <v-img
              src="https://i.ibb.co/hC8tMYk/ascww-logo.png"
              contain
              position="center"
              alt=" شركه مياه الشرب والصرف الصحي بأسيوط والوادي الجديد"
            />
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
    <div v-for="(item, i) in items" :key="i">

        <v-list-tile
            v-if="!item.menuItem"
            :key="i"
            :to="item.to"
            :active-class="color"
            avatar
            class="v-list-item"
        >
            
            <v-list-tile-title v-text="item.menuItem" />
        </v-list-tile>

        <v-list-group
            v-else
            :key="item.title"
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
                v-for="subItem in item.menuItem"
                :to="sublink.to"
                :key="subItem.text"
            >
                <v-list-tile-title v-text="sublink.text" />
            </v-list-tile>

        </v-list-group>

    </div>
</v-list>
    <!--  <v-list>
        <v-list-group
          no-action
          v-for="item in items"
          :key="item.title"
          class="itemTitle"
        >
          <v-list-item  right slot="activator" :to="item.route">
         
            <v-list-item-title class="white--text itemMenu">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
          <v-list-item v-for="sub in item.menuItem" :key="sub.text">
            <v-list-item-title :to="sub.route">{{
              sub.text
            }}</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
        </v-list-group>
      </v-list>-->
    </v-navigation-drawer>
</template>
<script>

export default {
    data(){
        return{
             items: [
        {
          title: "الرئيسيه ",
          icon:'home',
          active: true,
          route: "/",
        },
        {
          title: "عن الشركه ",
          active: true,
   
          menuItem: [{ text: "a" }, { text: "b" }, { text: "c" }],
          route: "/",
        },
        {
          title: "المركز الاعلامي",
          active: true,
    
          menuItem: [{ text: "a" }, { text: "b" }, { text: "c" }],
          route: "/",
        },
        {
          title: "التوعيه وخدمه العملاء",
          active: true,
      
          menuItem: [{ text: "a" }, { text: "b" }, { text: "c" }],
        },
        {
          title: "البحوث والتطوير",
          active: false,
     
          menuItem: [{ text: "a" }, { text: "b" }, { text: "c" }],
        },
        {
          title: "التعاون الدولي",
          active: true,
      
          menuItem: [{ text: "a" }, { text: "b" }, { text: "c" }],
        },
        {
          title: "جوده المياه",
          active: true,
         
          menuItem: [{ text: "a" }, { text: "b" }, { text: "c" }],
        },
        {
          title: "الموارد البشريه وبناء القدرات",
          active: true,
    
        },
        {
          title: "اتصل بنا",
          active: false
        },
      ],
        }
    }
}
</script>
<style>

</style>