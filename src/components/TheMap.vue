<template>
  <div id="the-map">
    <GmapMap
      :options="options"
      :center="{lat:10, lng:10}"
      :zoom="3"
      map-type-id="terrain"
      style="width: 100%; height: 100%"
    >
      <GmapMarker :key="index" :position="iss.position"/>
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: "TheMap",

  data() {
    return {
      iss: {
        position: {
          lat: 19,
          lng: 40,
        },
      },

      options: {
        mapTypeControl: false,
        streetViewControl: false,
      },
    };
  },

  mounted() {
    setTimeout(() => (this.iss.position.lat = 20), 2000);
  },
};
</script>

<style lang="scss" scoped>
#the-map {
  width: 100%;
  height: 100%;
}
</style>


