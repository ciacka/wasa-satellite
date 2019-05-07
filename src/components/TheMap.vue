<template>
  <div id="the-map">
    <GmapMap
      :options="options"
      :center="{lat:0, lng:0}"
      :zoom="2"
      map-type-id="terrain"
      style="width: 100%; height: 100%"
    >
      <GmapMarker
        v-for="satellite in satellites"
        :key="satellite.id"
        :icon="`/${satellite.icon}`"
        :position="satellite.position"
      />
    </GmapMap>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { findSatelliteById } from "@/api/wtia";

export default {
  name: "TheMap",

  data() {
    return {
      options: {
        mapTypeControl: false,
        streetViewControl: false,
      },
    };
  },

  computed: mapState({
    satellites: state => state.satellites,
  }),
};
</script>

<style lang="scss" scoped>
#the-map {
  width: 100%;
  height: 100%;
}
</style>


