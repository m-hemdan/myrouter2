<template>
    <div id="services">
      <h1 align="center" class="changeUnderLine" color="">
        <a href="">خـدمــتـنـا</a>
      </h1>

      <v-container>
        <v-row
          ><v-col
          col-sm-12 col-md-12 col-lg-6 col-xs-12
            v-for="itemService in cardServices"
            :key="itemService"
          >
            <router-link :to="itemService.link" class="textDecorationColored">
              <v-card
                class="cardServiceClass"
                v-bind:style="{
                  'background-image': 'url(' + itemService.img + ') ',
                  'background-size': '100% 100%',
                  'box-shadow': 'gray 2px 2px 2px 2px',
                }"
              >
              </v-card>
              <v-row class="justify-center textBoss mt-4"
                ><h4>{{ itemService.item }}</h4></v-row>
              <v-row class="subTextService justify-center pa-5" ><h5 >{{ itemService.subText }}</h5></v-row>
            </router-link>
          </v-col></v-row
        >
      </v-container>
    </div>
</template>
<script>
export default {
    data(){
        return{
                cardServices: [
        {
          item: "تطبيق قرائتي ",
          color: "",
          link: "/about",
          img: require("@/assets/Images/readme.jpg"),
          subText:
            "يتيح للمواطن تسجيل قراءة العداد بنفسه، وإضافة صورة العداد وهو ما يضمن دقة القراءة، على أن ترسل القراءات من يوم 1 إلى 15 من كل شهر وذلك لكل الشركات التابعة للشركة القابضة.",
        
        },
        {
          item: "تطبيق الخط الساخن ",
          color: "",
          link: "/about",
          img: require("@/assets/Images/hotline.jpg"),
          subText:"يمكن من خلال التطبيق إرسال الشكاوي والمقترحات إلى الشركة كما يتيح ارسال إشعارات للمواطنين بالأعطال والكسور، وتنبيهات بمواعيد انقطاع المياه وأعمال الصيانة ودفع الفاتورة باستخدام التطبيق.."
        },
        {
          item: "أدفع فاتورتك  ",
          color: "",
          link: "/about",
          img: require("@/assets/Images/pay_your_pall.png"),
          subText:"تتيح الخدمة سداد فاتورة مياه الشرب والصرف الصحى الكترونيا بمحافظات (القاهرة، الجيزة، المنوفية، البحيرة، كفرالشيخ، سوهاج، الاسكندرية، البحر الاحمر، مطروح، سيناء)، وجارى تفعيلها بباقى المحافظات."
        },
        {
          item: "استعلم عن فاتورتك",
          color: "",
          link: "/about",
          img: require("@/assets/Images/cal_Y_pay.jpg"),
          subText:"تتيح حساب قيمة الفاتورة الشهرية نظير كمية المياه المستهلكة، وفقا للتسعيرة المعتمدة من رئاسة مجلس الوزراء، تحقيقا لمبدأ الشفافية، وإمكانية ترشيد الاستهلاك."
        },
      ],
        }
    }
}
</script>
<style >
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
  a{
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
</style>

