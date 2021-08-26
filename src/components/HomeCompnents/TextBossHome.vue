<template>
     <v-container>
  
      <v-card class="justify-center bounce-in-top" id="cardBoss">
        <v-card-title class="textBoss font-weight-bold justify-center">
          كلمه السيد الرئيس مجلس الإداره والعضو المنتدب
          <br />
          السيد المهندس / محمد صلاح عبد الغفار
        </v-card-title>
        <v-row>
          <v-col sm="12" md="6" lg="6">
            <v-img
              src="require('@/assets/Images/readme.jpg')"
              class="photoBoss"
            ></v-img>
          </v-col>
          <v-col sm="12" md="6" lg="6" class="textBoss"
            >الماء هو القلب النابض للحياة، وهو المكون الأساسي لكل ما هو موجود
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
          </v-col>
        </v-row>
      </v-card>

      <v-row></v-row>
    </v-container>
</template>
<script>
export default {
    
}
</script>
<style>
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
</style>