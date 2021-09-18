import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {

    menuItems: [
      {
        title: "الرئيسيه",
        icon: "home",
        link: "/",
      },
      {
        title: "عن الشركه",
        active: true,
        subMenuItem: [
          { text: "نبذة عن الشركة", subLinkItem: "/AnElsherka", },
          { text: "قرار إنشاء الشركة", subLinkItem: "/birthOfCompany" },
          { text: "فروع الشركه", subLinkItem: "/branchOfCompany" },
          { text: "الرؤيه والرساله", subLinkItem: "/visionAndMessage" },
          { text: "الهيكل التنظيمي", subLinkItem: "/organizationStructure" },
          { text: "إنجازات الشركة", subLinkItem: "/companyAchivement" },

        ],
      },
      {
        title: "التوعيه وخدمه العملاء",
        active: true,
        subMenuItem: [
          { text: "التوعيه و الأتصال", subLinkItem: "/adviceAndContact" },
          { text: "ركن الأطفال", subLinkItem: "/forKids" },
          { text: "لك سيدتي", subLinkItem: "/toWomen" },
        ],
      },
      {
        title: "جوده المياه",
        active: false,

        subMenuItem: [
          { text: "جوده المياه", subLinkItem: "/water-quality" },
          { text: "تنقيه مياه الشرب", subLinkItem: "/refining-water" },
          { text: " المعمل المركزي لمياه الشرب", subLinkItem: "/lab-of-company-water" },
        ],
      },
      {
        title: "المناقصات",
        active: true,
        subMenuItem: [
          {
            text: " إحلال وتجديد شبكات المياه علي مستوي محافظه الوادي الجديد",
            subLinkItem: "/إحلال وتجديد شبكات المياه علي مستوي محافظه الوادي الجديد",
          },
          { text: "توريد طلمبات اعماق غاطسه ", subLinkItem: "/توريد طلمبات اعماق غاطسه" },
          { text: "شبكات مدنيه باريس بالوادي الجديد", subLinkItem: "/شبكات مدنيه باريس بالوادي الجديد" },
          { text: "صرف صحي أبوتيج", subLinkItem: "/صرف صحي أبوتيج" },
          { text: "صرف صحي البداري", subLinkItem: "/tendersCompany/5" },
          { text: "عمليه إحلال و تجديد الداخليه", subLinkItem: "/tendersCompany/6" },
          { text: "عمليه احلال و تجديد طرد ", subLinkItem: "/tendersCompany/7" },
          {
            text: "عمليه احلال و تجديد شبكات المياعلي مستوي محافظه اسيوط ",
            subLinkItem: ""
          },
        ],
      },
      {
        title: "الصرف الصحي",
        active: true,
        subMenuItem: [{ text: "معالجه الصرف الصحي", subLinkItem: "/sewage-treatment" },
        {
          text: "تعريف بأهميه التخلص الاَمن من الصرف الصحي",
          subLinkItem: "/Riddence-waste-water",
        },
       
        {
          text: "معالجه الصرف الصحي الخام و أنواع محطات المعالجه",
          subLinkItem: "/kind-of-waste-water",
        },
        { text: "أهميه الحفاظ علي شبكه الصرف الصحي ", subLinkItem: "/save-web-waste-water" },
        { text: "دور إداره الصرف الصناعي", subLinkItem: "/waste-water-in-manufactring" },
        { text: " الصرف الصناعي", subLinkItem: "/manufactring-waste" },
        ],
      },
      {
        title: "وظائف",
        active: true,
        subMenuItem: [
          { text: "مسابقات و وظائف", subLinkItem: "/jobs-and-compitaion" },
          { text: "نتائج المسابقات", subLinkItem: "/result-Of-compitaion" },
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
        src: require("@/assets/Images/5.jpg"),
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
      { id: "1", item: "  كلمه الرئيس ", link: "/contact/1", details: "همنسيىمن منسىيمبنسيمن منيتبمنستنم" },
      {
        id: "2",
        item: " | تطورات الشركه القابضه لمياه الشرب و الصرف الصحي ",
        link: "/contact/2",
        details: "همنسيىمن منسىيمبنسيمن منيتبمنستنم"
      },
      {
        id: "3",
        item: " | تطورات الشركه القابضه لمياه الشرب و الصرف الصحي  ",
        link: "/contact/3",
        details: "همنسيىمن sd منيتبمنستنم"
      },
      {
        id: "4",
        item: " | تطورات الشركه القابضه لمياه الشرب و الصرف الصحي  ",
        link: "/contact/4",
        details: "همنسيىمن ghjgj منيتبمنستنم"
      },
      {
        id: "5",
        item: " |  تطورات الشركه القابضه لمياه الشرب و الصرف الصحي  ",
        link: "/contact/5",
        details: "همنسيىمن ghjgj منيتبمنستنم"
      },
      {
        id: "6",
        item: " | تطورات الشركه القابضه لمياه الشرب و الصرف الصحي  ",
        link: "/contact/6",
        details: "همنسيىمن ghjgj منيتبمنستنم"
      },
      {
        id: "7",
        item: " |  تطورات الشركه القابضه لمياه الشرب و الصرف الصحي  ",
        link: "/contact/7",
        details: "همنسيىمن ghjgj منيتبمنستنم"
      },
      {
        id: "8",
        item: " | تطورات الشركه القابضه لمياه الشرب و الصرف الصحي  ",
        link: "/contact/8",
        details: "همنسيىمن ghjgj منيتبمنستنم"

      },
      {
        id: "9",
        item: "  تطورات الشركه القابضه لمياه الشرب و الصرف الصحي  ",
        link: "/contact/9",
        details: "همنسيىمن ghjgj منيتبمنستنم"
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
        subText: "يمكن من خلال التطبيق إرسال الشكاوي والمقترحات إلى الشركة كما يتيح ارسال إشعارات للمواطنين بالأعطال والكسور، وتنبيهات بمواعيد انقطاع المياه وأعمال الصيانة ودفع الفاتورة باستخدام التطبيق.."
      },
      {
        item: "أدفع فاتورتك  ",
        color: "",
        link: "/about",
        img: require("@/assets/Images/pay_your_pall.png"),
        subText: "تتيح الخدمة سداد فاتورة مياه الشرب والصرف الصحى الكترونيا بمحافظات (القاهرة، الجيزة، المنوفية، البحيرة، كفرالشيخ، سوهاج، الاسكندرية، البحر الاحمر، مطروح، سيناء)، وجارى تفعيلها بباقى المحافظات."
      },
      {
        item: "استعلم عن فاتورتك",
        color: "",
        link: "/about",
        img: require("@/assets/Images/cal_Y_pay.jpg"),
        subText: "تتيح حساب قيمة الفاتورة الشهرية نظير كمية المياه المستهلكة، وفقا للتسعيرة المعتمدة من رئاسة مجلس الوزراء، تحقيقا لمبدأ الشفافية، وإمكانية ترشيد الاستهلاك."
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
    branchOfCompany: [
      { id: 1, nameOfBranch: 'فرع الرئيسي ', phone: "088-2131662 ", address: "محطه مياه المرشحه بنزله عباللاه- اسيوط", img: '', center: { lat: '27.222235281679712', long: '31.194109557433396' } },
      { id: 1, nameOfBranch: 'فرع منطقه ديروط ', phone: "088-2131662", address: "شارع البحر الاعظم ", img: '', center: { lat: '27.222235281679712', long: '31.194109557433396' } },
      { id: 2, nameOfBranch: 'فرع منطقه القوصية ', phone: "088-2131662", address: "منطقة حسيب - امام المرور القديم", img: '', center: { lat: '27.222235281679712', long: '31.194109557433396' } },
      { id: 3, nameOfBranch: 'فرع منطقه منفلوط ', phone: "088-2131662", address: "شارع جسر ابومنديل - بجوار المعهد الديني ", img: '', center: { lat: '27.222235281679712', long: '31.194109557433396' } },
      { id: 4, nameOfBranch: 'فرع مركز أسيوط ', phone: "088-2131662", address: "شارع الجمهوريه خلف فندق الوطنيه ", img: '', lat: '27.222235281679712', long: '31.194109557433396' },
      { id: 5, nameOfBranch: 'فرع شرق أسيوط ', phone: "088-2131662", address: "شارع الهلالي امام مديرية الاسكان ", img: '', lat: '27.222235281679712', long: '31.194109557433396' },
      { id: 6, nameOfBranch: 'فرع غرب أسيوط ', phone: "088-2131662", address: "شارع 23 يوليو خلف بنك ناصر ", img: '', lat: '27.222235281679712', long: '31.194109557433396' },
      { id: 7, nameOfBranch: 'فرع أبنوب  ', phone: "088-2131662", address: "شارع الصيانة بجوار المخبز الالى ", img: '', lat: '27.222235281679712', long: '31.194109557433396' },
      { id: 8, nameOfBranch: 'فرع مركز الفتح  ', phone: "088-2131662", address: "الناصريه أمام مركز الشرطة", img: '', lat: '27.222235281679712', long: '31.194109557433396' },
      { id: 9, nameOfBranch: 'فرع مركز البداري ', phone: "088-2131662", address: "شارع جمال عبدالناصر امام السجل المدنى ", img: '', lat: '27.222235281679712', long: '31.194109557433396' },
      { id: 10, nameOfBranch: 'فرع مركز الغنايم ', phone: "088-2131662 ", address: "محطه مياه شرق السوهاجيه ", img: '', lat: '27.222235281679712', long: '31.194109557433396' },
      { id: 11, nameOfBranch: 'فرع مركز أبوتيج ', phone: "088-2131662", address: "شارع المحطه البحريه امام المحكمة ", img: '', lat: '27.222235281679712', long: '31.194109557433396' },
      { id: 12, nameOfBranch: 'فرع مركز صدفه ', phone: "088-2131662", address: "شارع المحطه البحريه امام الصيانة", img: '', lat: '27.222235281679712', long: '31.194109557433396' }

    ],
    tendersArray: [
      { id: 1, namePdf: "achivement.pdf" },
      { id: 2, namePdf: "people_assistant.pdf" },
      { id: 3, namePdf: "demo.pdf" },
      { id: 4, namePdf: "achivement.pdf" },
      { id: 5, namePdf: "people_assistant.pdf" },
      { id: 6, namePdf: "demo.pdf" },
      { id: 7, namePdf: "achivement.pdf" }
    ]

  },
  mutations: {
    getArrItem: (state) => (id) => {
      return state.items.find(item => item.id === id);
    }
  },
  actions: {
    findSelectedItem: (state => {
      return state.arrayMsg
    })
  }




})