<template>
  <div id="the-sidebar">
    <h1>Welcome to WASA</h1>
    <span class="description">Where a satellite at?</span>

    <h4>Show satellites</h4>
    <ul class="satellites-list">
      <li v-for="satellite in satellites" :key="satellite.id">
        <input type="checkbox" :checked="satellite.visible" @change="toggleSatellite(satellite)">
        {{ satellite.name }}
      </li>
    </ul>

    <footer>
      <div class="credits">
        Satellite icon made by
        <a
          href="https://www.flaticon.com/authors/phatplus"
          title="phatplus"
        >phatplus</a> from
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
        >CC 3.0 BY</a>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "TheSidebar",

  computed: mapState({
    satellites: state => state.satellites,
  }),

  methods: {
    ...mapActions(["toggleSatellite"]),
  },
};
</script>


<style lang="scss" scoped>
#the-sidebar {
  display: flex;
  flex-direction: column;
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
    flex: 1;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  footer {
    font-size: 12px;
  }
}
</style>

