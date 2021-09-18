<template>
  <div>
    <div class="aboutOurCompany">
      <div class="title"><h3>فــروع الشــركــة</h3></div>
      <v-divider></v-divider>
      <v-container>
        <v-row>
          <h4 class="blue--text">
            شركه مياه الشرب والصرف الصحي بأسيوط والوادي الجديد
          </h4>
          <span class="ml-2 mr-2">/</span
          ><span class="gray--text"> فـروع الشركة</span>
        </v-row>
        <v-row class="mt-5">
          <v-col class="subClass" cols="12" sm="12" xs="12" lg="12">
         
            <div>
              <div>
                <h2>فروع الشركه</h2>
                <GoogleMaps></GoogleMaps>
              </div>
              <br />
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            sm="12"
            lg="4"
            md="6"
            v-for="(branchItem, i) in branchOfCompany"
            :key="i"
          >
            <v-card class="mx-auto" max-width="344" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">
                    {{ branchItem.phone }}
                  </div>
                  <v-list-item-title class="text-h5 mb-1">
                    {{ branchItem.nameOfBranch }}
                  </v-list-item-title>
                  <v-list-item-subtitle>{{
                    branchItem.address
                  }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80" >
                  <img
                    alt="user"
                    src='@/assets/Images/ascww-logo.png'
                /></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn
                  outlined
                  rounded
                  text
                  v-bind="{ 'font-weight': 'bold' }"
                  @click="changePostion(branchItem)"
                >
                  بـحــث
                </v-btn>
            
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import GoogleMaps from "../../components/GoogleMaps.vue";
export default {
  name: "GoogleMap",
  components: {
    GoogleMaps
   
  },

  data() {
    return {
      center: { lat: 27.222235281679712, lng: 31.194109557433396 },

    };
  },
  methods: {
    changePostion(mbranchItem) {
      this.$alert(mbranchItem.nameOfBranch +"/"+mbranchItem.phone);
    },
   
  },
  computed: {
    branchOfCompany() {
      return this.$store.state.branchOfCompany;
    },
  },
  props: ["username"],
};
</script>
