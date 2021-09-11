<template>
  <div>
    <br>
    <h1>Vue Js Add Multiple Markers on Google Maps Example - Tutsmake.com</h1>
 
    <gmap-map
      :center="center"
      :zoom="17"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m"
        @click="center=m"
      ></gmap-marker>
    </gmap-map>
 
  </div>
</template>
 
<script>
export default {
  name: "GoogleMap",
  data() {
    return {
       center: {lat: 10.0, lng: 10.0},
            markers: [{
              position: {lat: 10.0, lng: 10.0}
            }, {
              position: {lat: 11.0, lng: 11.0}
            }],
      currentPlace: null
    };
  },
 
  mounted() {
    this.geolocate();
  },
 
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    geolocate: function() {
 
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
 
        this.markers = [
          {
              lat:   27.173318010989814,
              lng: 31.203325213413848,
              label: 'Surat'
          },
          {
              lat:  27.18358761954615,
              lng: 31.19641584278114,
              label: 'Ahmedabad'
          },
          {
              lat: 27.167285607047653,
              lng: 31.204183520324747,
              label: 'Rajkot'
          }
      ];
 
    }
  }
};
</script>