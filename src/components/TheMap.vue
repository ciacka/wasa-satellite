<template>
  <div id="the-map">
    <GmapMap
      :options="options"
      :center="{lat:0, lng:0}"
      :zoom="2"
      map-type-id="terrain"
      style="width: 100%; height: 100%"
    >
      <GmapMarker icon="/iss.png" :position="iss.position"/>
    </GmapMap>
  </div>
</template>

<script>
import { findSatelliteById } from "@/api/wtia";

const ISS_ID = process.env.VUE_APP_ISS_NOMAD_ID;

export default {
  name: "TheMap",

  data() {
    return {
      iss: {
        position: {
          lat: null,
          lng: null,
        },
      },

      options: {
        mapTypeControl: false,
        streetViewControl: false,
      },
    };
  },

  created() {},

  methods: {
    async fetchISSData() {
      const issData = await findSatelliteById(ISS_ID);
      this.iss.position.lat = issData.latitude;
      this.iss.position.lng = issData.longitude;
    },
  },
};
</script>

<style lang="scss" scoped>
#the-map {
  width: 100%;
  height: 100%;
}
</style>


