import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        items: [
            {
              src: require("@/assets/Images/3.png"),
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
              src: require("@/assets/Images/6.jpg"),
              title: "  تطبيق الخط الساخن 125",
              subTitle:
                "يتيح تطبيق الخط الساخن التواصل مع شركه المياه اسيوط لحل المشكلات ",
              link: "/",
              details: "تعرف عل المزيد",
              animeClass: "roll-in-blurred-left",
            },
            {
              src:  require("@/assets/Images/5.jpg"),
              title: "  الائحه الموحده للعقود والمشتريات الخاصة بالشركه",
              subTitle:
                "تعرف علي  لائحه العقود والمضتريات الخاصه بالشركه القابضه لمياه الشرب والصرف الصحي",
              link: "/",
              details: "تعرف عل المزيد",
              animeClass: "bounce-in-top",
            },
            {
              src: require("@/assets/Images/1.png"),
              title: "  معامل علي اعلي مستوي ",
              subTitle:
                "الاهتمام بمعايير منظمة الصحه العالمية للتاكد من جودة المياه بأحدث المعايير والتقنيات",
              link: "/",
              details: "تعرف عل المزيد",
              animeClass: "slide-in-elliptic-top-fwd",
            },
          ],
    
    arrayMsg: [
        { id:"1",item: "  كلمه الرئيس ", link: "/contact/1" ,details:"همنسيىمن منسىيمبنسيمن منيتبمنستنم"},
        {id:"2",
          item: " | تطورات الشركه القابضه لمياه الشرب و الصرف الصحي ",
          link: "/contact/2",
          details:"همنسيىمن منسىيمبنسيمن منيتبمنستنم"
        },
        {id:"3",
          item: " | تطورات الشركه القابضه لمياه الشرب و الصرف الصحي  ",
          link: "/contact/3",
          details:"همنسيىمن sd منيتبمنستنم"
        },
        {
          id:"4",
          item: " | تطورات الشركه القابضه لمياه الشرب و الصرف الصحي  ",
          link: "/contact/4",
          details:"همنسيىمن ghjgj منيتبمنستنم"
        },
        {
          id:"5",
          item: " |  تطورات الشركه القابضه لمياه الشرب و الصرف الصحي  ",
          link: "/contact/5",
          details:"همنسيىمن ghjgj منيتبمنستنم"
        },
        {
          id:"6",
          item: " | تطورات الشركه القابضه لمياه الشرب و الصرف الصحي  ",
          link: "/contact/6",
          details:"همنسيىمن ghjgj منيتبمنستنم"
        },
        {
          id:"7",
          item: " |  تطورات الشركه القابضه لمياه الشرب و الصرف الصحي  ",
          link: "/contact/7",
          details:"همنسيىمن ghjgj منيتبمنستنم"
        },
        {
          id:"8",
          item: " | تطورات الشركه القابضه لمياه الشرب و الصرف الصحي  ",
          link: "/contact/8",
          details:"همنسيىمن ghjgj منيتبمنستنم"
          
        },
        {
          id:"9",
          item: "  تطورات الشركه القابضه لمياه الشرب و الصرف الصحي  ",
          link: "/contact/9",
          details:"همنسيىمن ghjgj منيتبمنستنم"
        },
      ],
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
      social_media: [
        {
          name: "facebook",
          link: "https://www.facebook.com/ASCWWeg",
          srcmedia: require("@/assets/facebook.svg"),
        },
        {
          name: "Instagram",
          link: "/instagram",
          srcmedia: require("@/assets/instagram.svg"),
        },
        {
          name: "youtube",
          link: "https://youtube.com/channel/UC73LZeR5Yr5TE7fsTzvZSVw",
          srcmedia: require("@/assets/youtube.svg"),
        },
      ],
    },
    mutations:{
      getArrItem: (state) => (id) => {
        return state.items.find(item => item.id === id);
      }
    },
    actions:{
      findSelectedItem:(state=>
      {
        return state.arrayMsg
      })
    }
   
    
    
  })