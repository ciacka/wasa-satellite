<template>
  <div id="the-sidebar">
    <h1>Welcome to WASA</h1>
    <span class="description">Where a satellite at?</span>

    <h4>Show satellites</h4>
    <ul class="satellites-list">
      <li v-for="satellite in satellites" :key="satellite.id">
        <input type="checkbox" :checked="visible.includes(satellite.id)">
        {{ satellite.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TheSidebar",

  computed: mapState({
    satellites: state => state.availableSatellites,
    visible: state => state.visibleSatellites,
  }),
};
</script>


<style lang="scss" scoped>
#the-sidebar {
  padding: 20px;
  width: 250px;

  h1 {
    font-size: 24px;
    margin-bottom: 5px;
  }

  .description {
    display: block;
    margin-bottom: 50px;
  }

  .satellites-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
}
</style>

