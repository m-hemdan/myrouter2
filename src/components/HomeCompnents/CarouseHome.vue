<template>
<div>
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
                        {{ item.details
                        }}<v-icon center>mdi-chevron-down</v-icon>
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
              scrollamount="5"
              onmouseover="this.stop();"
              onmouseleave="this.start();"
            >
              <span v-for="itemMarqee in arrayMsg" :key="itemMarqee">
                <router-link :to="itemMarqee.link" class="parMarquee">
                  {{ itemMarqee.item }}
                </router-link></span
              >
            </marquee></v-col
          >
        </v-row>
      </div>
    </v-container>
</div>
</template>
<script>
export default {
    data() {
    return {
      items: [
        {
          src: "https://i.ibb.co/4Pygg8F/home5.jpg",
          title: "  شركة مياه الشرب والصرف الصحي بأسيوط والوادي الجديد",
          subTitle:
            "ترحب بكم و نفخر بأننا احدي الشركات الرائده في جمهوريه مصر العربيه ",
          link: "/",
          details: "تعرف عل المزيد",
          animeClass: "tilt-in-fwd-tr",
        },
        {
          src: "https://i.ibb.co/FVrcd6k/mob.png",
          title: " انطلاق تطبيق قرائتي ",
          subTitle:
            " يعتمد تطبيق قرائتي التابع للشركه القابضه لمياه الشرب والصرف الصحي بأسيوط والوادي الجديد علي سهوله الاستخدام و سريه البيانات",
          link: "/",
          details: "لتنزيل برنامج قرائتي اضغط هنا",
          animeClass: "slide-in-elliptic-top-fwd",
        },
        {
          src: "https://i.ibb.co/MNC6WQC/healthy1.jpg",
          title: "  تطبيق الخط الساخن 125",
          subTitle:
            "يتيح تطبيق الخط الساخن التواصل مع شركه المياه اسيوط لحل المشكلات ",
          link: "/",
          details: "تعرف عل المزيد",
          animeClass: "roll-in-blurred-left",
        },
        {
          src: "https://i.ibb.co/cxxhCfQ/1-2.jpg",
          title: "  الائحه الموحده للعقود والمشتريات الخاصة بالشركه",
          subTitle:
            "تعرف علي  لائحه العقود والمضتريات الخاصه بالشركه القابضه لمياه الشرب والصرف الصحي",
          link: "/",
          details: "تعرف عل المزيد",
          animeClass: "bounce-in-top",
        },
        {
          src: "https://i.ibb.co/z87kx40/home2.jpg",
        },
      ],

      
      arrayMsg: [
        { item: "  9  كلمه الرئيس ", link: "/about" },
        {
          item: "  8  تطورات الشركه القابضه لمياه الشرب و الصرف الصحي ",
          link: "/about",
        },
        {
          item: "  7  تطورات الشركه القابضه لمياه الشرب و الصرف الصحي ",
          link: "/about",
        },
        {
          item: "  6  تطورات الشركه القابضه لمياه الشرب و الصرف الصحي ",
          link: "/about",
        },
        {
          item: "  5  تطورات الشركه القابضه لمياه الشرب و الصرف الصحي ",
          link: "/about",
        },
        {
          item: "  4  تطورات الشركه القابضه لمياه الشرب و الصرف الصحي ",
          link: "/about",
        },
        {
          item: "  3  تطورات الشركه القابضه لمياه الشرب و الصرف الصحي ",
          link: "/about",
        },
        {
          item: "  2  تطورات الشركه القابضه لمياه الشرب و الصرف الصحي ",
          link: "/about",
        },
        {
          item: "  1  تطورات الشركه القابضه لمياه الشرب و الصرف الصحي ",
          link: "/about",
        },
      ],
    }
    }
}
</script>
<style>

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
</style>