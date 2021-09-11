<template>
  <div>
    <gmap-map :center="center" :zoom="zoom" ref="map">
      <gmap-marker
        :key="index"
        v-for="(location, index) in locations"
        :position="{ lat: location.lat, lng: location.lng }"
        :clickable="true"
        
        @click="openInfoWindow(location);"
      />
      <gmap-info-window
        v-if="selectedLocation !== null"
        :position="{ lat: selectedLocation.lat, lng: selectedLocation.lng }"
        :opened="infoBoxOpen"
        @closeclick="infoBoxOpen = false;"
      >
        <div class="infoWindow" style="width: 300px;">
          <button @click="closeInfoWindow();"><v-icon>close</v-icon></button>
          <h2 id="infoWindow-location" class="gray--text">{{ selectedLocation.name }}</h2>
          <h3>{{selectedLocation.address}}</h3>
          <h4>{{selectedLocation.phone}}</h4>
      
        </div>
      </gmap-info-window>
    </gmap-map>
  </div>
</template>

<script>
export default {
  data: () => ({
    zoom: 8,
    center: { lat:27.222235281679712, lng: 31.194109557433396 },
    selectedLocation: null,
    infoBoxOpen: false,
     locations: [
        {
          Id: 1,
          name: "فرع ديروط",
          lat:  27.445213637942377,
          lng:  30.821815489409442,
         phone:"088-2131662",
         address:"شارع البحر الاعظم "
          
        },
        {
          Id: 2,
          name: "فرع منفلوط",
          lat: 27.311585834234137,
          lng: 30.971398428679304,phone:"088-2131662",
          address:"شارع جسر ابومنديل - بجوار المعهد الديني "
        },
        {
          Id: 3,
          name: "فرع القوصيه",
          lat: 27.43971362706084,
          lng: 30.82680233566733,
          phone:"088-2131662",
          address:"منطقة حسيب - امام المرور القديم"
        },
        {
          Id: 4,
          name: "الفرع الرئيسي",
          lat: 27.173048030143857,
          lng: 31.203093855181375
          ,phone:"088-2131662 ",
          address:"محطه مياه المرشحه بنزله عباللاه- اسيوط"
        },
        {
          Id: 5,
          name: "فرع شرق اسيوط ",
          lat: 27.18512873828474,
          lng: 31.194855097768585
        },
        {
          Id: 6,
          name: "فرع غرب أسيوط ",
          lat:  27.17557501593394,
          lng:31.17646148223588
        },
        {
          
          Id: 7,
          name: "فرع أبنوب  ",
          lat: 27.26748453868315,
          lng: 31.151932937089843
        },
        {
     
          Id: 8,
          name: "فرع مركز الفتح ",
          lat: 27.175626839427586,
          lng: 31.183935995653986
        },
        {
          Id: 9,
          name: "فرع مركز البداري ",
          lat: 26.9924993574445,
          lng: 31.410070861364876
        },
        {
          Id: 10,
          name: "فرع الغنايم ",
          lat: 26.995696801098525,
          lng: 31.254902339832437
        },
        {
          Id: 11,
          name: "فرع أبوتيج ",
          lat: 27.051081544529556,
          lng: 31.319819026342646
        },
        {
       
          Id: 12,
          name: "فرع صدفه ",
          lat: 26.949598924427598,
          lng: 31.365471048103668
        },
          {
       
          Id: 12,
          name: "فرع مركزأسيوط ",
          lat: 26.949598924427598,
          lng: 31.365471048103668
        },
        
        
        
      ]
    
    
  }),
  methods: {
    openInfoWindow(location) {
      console.log(location);
      this.selectedLocation = location;
      this.infoBoxOpen = true;
    },
    closeInfoWindow() {
      this.infoBoxOpen = false;
    },
  },

  
};
</script>

<style>
.vue-map-container {
  height: 640px;
}
</style>