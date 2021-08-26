<template>
  <div id="Home">
   
    <v-carousel
      cycle
      width="100%"
      height="30em"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <template v-slot:prev="{ on, attrs }">
        <v-btn color="gray" v-bind="attrs" v-on="on" class="hidden-sm-and-down"
          ><span
            >Previous slide <v-icon center>mdi-arrow-left-box</v-icon></span
          ></v-btn
        >
        <v-btn color="gray" v-bind="attrs" v-on="on" class="hidden-md-and-up"
          ><v-icon center>mdi-arrow-left-box</v-icon></v-btn
        >
      </template>
      <template v-slot:next="{ on, attrs }">
        <v-btn color="gray" v-bind="attrs" v-on="on" class="hidden-sm-and-down"
          ><v-icon center>mdi-arrow-right-box</v-icon> Next slide
        </v-btn>
        <v-btn color="gray" v-bind="attrs" v-on="on" class="hidden-md-and-up"
          ><v-icon center>mdi-arrow-right-box</v-icon></v-btn
        >
      </template>

      <div v-for="(item, i) in items" :key="i" class="fade-in">
        <v-carousel-item
          class="fade-in white--text"
          v-bind:style="{
            'background-image': 'url(' + item.src + ') ',
            'background-size': '100% 100%',
          }"
        >
          <v-sheet
            height="100%"
            width="100%"
            class="sheet-carousel"
            color="rgb(0, 0, 0, 0.6)"
          >
            <v-container
              position="center"
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-layout column justify-center align-center>
                <v-flex xs12 sm8 md6>
                  <div>
                    <div :class="item.animeClass">
                      <h1 align="center">{{ item.title }}</h1>
                      <h5 align="center" width="30px">{{ item.subTitle }}</h5>
                    </div>
                    <h5 align="center">
                      <v-btn
                        v-if="item.details"
                        to="/"
                        depressed
                        v-bind:style="{
                          'margin-top': '20px',
                          background: '#1f659b',
                          color: 'white',
                        }"
                      >
                        {{ item.details }}
                        <v-icon center>mdi-chevron-down</v-icon>
                      </v-btn>
                    </h5>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-sheet>
        </v-carousel-item>
      </div>
    </v-carousel>

    <v-container class="lastestNews">
      <div class="newsClass">
        <v-row>
          <v-col cols="1"
            ><v-btn depressed class="white--text" color="#1f659b"
              >أحدث الاخبار</v-btn
            ></v-col
          >
          <v-col cols="11">
            <marquee
           direction="right"
              scrollamount="5"
              onmouseover="this.stop();"
              onmouseleave="this.start();"
            >
              <span v-for="(itemMarqee,i) in arrayMsg" :key="i">
                <router-link :to="itemMarqee.link"  class="parMarquee">
                  {{ itemMarqee.item }}
                </router-link>  </span>
            </marquee></v-col
          >
        </v-row>
      </div>
    </v-container>

    <v-divider class="justify-center mr-10" width="90%" align="center"></v-divider>
      <v-row class="pt-10 ">
       <div class="col-xs-12 col-sm-2 col-lg-2 ">
         <v-row v-for="(item,i) in rightNews" :key="i" class="mt-4 ">
          <router-link :to="item.link" class="mr-10 ml-10 mt-5 "> <v-img :src="item.img" width="12em" class="pa-10 newsImg"/>
           <h5 color="pink" class="justify-center pink--text  pa-5" >{{item.title}}</h5>
          </router-link>
         </v-row>
       </div>
      <v-card class="justify-center bounce-in-top col-xs-12 col-lg-8" id="cardBoss">
        <v-card-title class="textBoss font-weight-bold justify-center">
          كلمه السيد الرئيس مجلس الإداره والعضو المنتدب
          <br />
          السيد المهندس / محمد صلاح عبد الغفار
        </v-card-title>
        <v-row>
          <div class="col-xs-12 col-md-5" >
                     
              <v-img :src="msgLink" class="photoBoss "  max-width="550px" max-height="350px"/> 
             
            
          </div>
          <div class="col-sm-12 col-md-7 textBoss">الماء هو القلب النابض للحياة، وهو المكون الأساسي لكل ما هو موجود
            على سطح الأرض، تصديقاً لقول الله تعالى (وَجَعَلْنَا مِنَ الْمَاء
            كُلَّ شَيْءٍ حَيٍّ)، فلولا الماء لانعدمت الحياة، فوجوده هو السبب
            الرئيسي لوجود الحياة، ومن نعم الله علينا أن وهب مصرنا الحبيبة نهر
            النيل العظيم الذى يمثل شريان الحياة، الأمر الذى يدعو إلى ضرورة أن
            نمنحها قيمه عظيمة تكمن وراء مكانتها الحقيقية التى تستلزم الحفاظ على
            كل قطرة فيها، وتنفى شتى الإستخدامات والسلوكيات الخاطئة فى التعامل
            معها، وتمكننا من استغلالها الإستغلال الأمثل الذى يضمن بقاءها
            ودوامها، مما يكفل الكسب للجميع.
            <br />
            " على أن نمد أيدينا معاً لنبنى مستقبل أفضل وأمل مشرق لمصرنا الغالية"
         <a  href="./src/people_assistant.pdf" target="_blank">resume</a>

          </div>
        </v-row>
      </v-card>

     <div class="col-xs-12 col-sm-2 col-lg-2 ">
         <v-row v-for="(item,i) in leftNews" :key="i" class="mt-4 ">
          <router-link :to="item.link" class="mr-10 ml-10 mt-5 "> <v-img :src="item.img" width="12em" class="pa-10 newsImg"/>
           <h5 color="pink" class="justify-center pink--text  pa-5" >{{item.title}}</h5>
          </router-link>
         </v-row>
       </div>
      </v-row>
 
    <div id="services">
      <v-divider class="justify-center mr-30" width="90%" align="center"></v-divider>
      <h1 align="center" class="changeUnderLine" color="">
        <a href="" class="mb-10">خـدمــتـنـا</a>
      </h1>
      <v-container>
        <v-row justify="center" ma-3

          ><div class="col-xs-4 col-sm-3 col-md-3 col-lg-3 justify-center"
      
            v-for="(itemService,i) in cardServices"
            :key="i"
          >
          <v-row justify="center">
            <router-link :to="itemService.link" >
              <v-card
             
                class="cardServiceClass xx"
                v-bind:style="{
                
                  'background-image': 'url(' + itemService.img + ') ',
                  'background-size': '100% 100%',
                  'box-shadow': 'gray 2px 2px 2px 2px',
                  'max-width':'15em'
            
                }"
              >
              </v-card>
              <v-row class="justify-center textBoss"
                ><h4>{{ itemService.item }}</h4></v-row>
              <v-row class="subTextService text-center pa-5" max-width="15em" ><h5 >{{ itemService.subText }}</h5></v-row>
            </router-link>
          </v-row>
          </div></v-row
        >
      </v-container>
    </div>
    <div class="OurNumber">
     <v-container>
       <v-row class="justify-space-around">
         <v-col  
           cols="12"
           sm="6"
    
          lg="2">
           <v-row justify='center'>1ffdfd</v-row>
           <v-row justify='center'>hghghg</v-row>
         </v-col>  
          <v-col     cols="12"
           sm="6"
         
          lg="2">   
             <v-row justify='center'>2ffdfd</v-row>
           <v-row justify='center'> hghghg</v-row>
           </v-col>
                <v-col     cols="12"
           sm="6"
       
          lg="2" >
           <v-row justify='center'>3ffdfd</v-row>
           <v-row justify='center'>hghghg</v-row>
         </v-col>
              <v-col      cols="12"
           sm="6"
       
          lg="2" >
           <v-row justify='center'>4ffdfd</v-row>
           <v-row justify='center'>hghghg</v-row>
         </v-col>
              <v-col      cols="12"
           sm="6"
       
          lg="2" >
           <v-row justify='center'>5ffdfd</v-row>
           <v-row justify='center'>hghghg</v-row>
         </v-col>

       </v-row>
     </v-container>
    </div>
  </div>
</template>
<script>


export default {

  name: "Home",

  data() {
    return {
      

      intervalTime: null,
     
      msg: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
     
         msgLink: require("@/assets/Images/boss.png"),
         rightNews:[
           {title:"التقديم ف المدرسه الثانويه الفنيه الصناعيه لمايه الشرب و الصرف الصحي بأسيوط ",link:"/about",img:require("@/assets/Images/ascww_school.jpg")},
           {title:"التقديم ف المدرسه الثانويه الفنيه الصناعيه لمايه الشرب و الصرف الصحي بأسيوط ",link:"/about",img:require("@/assets/Images/custmer server.jpg")}
         ],
           leftNews:[
           {title:"",link:"/about",img:require("@/assets/Images/people_assistant.png")},
           {title:"التقديم ف المدرسه الثانويه الفنيه الصناعيه لمايه الشرب و الصرف الصحي بأسيوط ",link:"/about",img:require("@/assets/Images/custmer server.jpg")}
         ]
    };
  },
  methods:{
    getfile()
    {
      window.open("../people_assistant.pdf","_blank");
    }
  },
  computed:{
    items(){
      return this.$store.state.items
    },
    arrayMsg()
    {
      return this.$store.state.arrayMsg
    },
    cardServices()
    {
      return this.$store.state.cardServices
    }
  }
 
};
</script>
<style lang="scss" scoped>
#Home {
  background-image: url("https://i.ibb.co/fYK2fZq/bback.webp");
  background-size: cover;
}
.sheet-carousel {
  color: white !important;
}

.newsClass button {
  border-radius: 25px;
  height: 10em;
}
.parMarquee {
  height: 30px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  margin-left: 17px;
  text-decoration: none;
  color: black;
  font-style: bold;
}

marquee {
  margin-top: 1px;
  display: block;

  background: rgba(61, 64, 66, 0.185);
  border-radius: 25px;
  padding: 5px;
  box-shadow: #1f659b 2px 2px;
}
.rightClassNews img
{
  width: 16em;
    box-shadow: white 2px;
  border-radius: 25px;
}
.photoBoss {
  
  margin-left: 20px;
  margin-right: 20px;
 
  height: 18em;
  box-shadow: white 2px;
  border-radius: 25px;
}
.textBoss {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: #1f659b;
}
#cardBoss {
  border-radius: 25px;
  background: rgba(5, 20, 236, 0.062);
}
#services {
  width: 100%;
  height: 100%;
  padding: 2em;
}
.cardServiceClass {
  height: 200px;

}
.serviceTitlecard {
  font-weight: bold;
}
 a{
    text-decoration: none;
  }
  a {
    background: 
      linear-gradient(to right, rgba(100, 200, 200, 0.151), rgba(100, 200, 200, 0.39)),
      linear-gradient(to right, rgba(255, 0, 0, 1), rgba(255, 0, 180, 1), rgba(0, 100, 200, 1));
    background-size: 100% 0.1em, 0 0.1em;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: background-size 400ms;
  }
  
  a:hover,
  a:focus {
    background-size: 0 0.1em, 100% 0.1em;
  }
  .newsImg
  {
    border-radius: 25px;
    box-shadow: gray 2px 2px 2px 2px;
  }
.cardColor
{
  background: rgba(255, 255, 255, 0) !important;
}
.objF
{
  object-fit: contain;
}
.xx
{
  margin-left: 17%;
  margin-right:17%;
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>