<template>
  <div id="app">
    <TheMap/>
    <TheSidebar/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TheMap from "@/components/TheMap.vue";
import TheSidebar from "@/components/TheSidebar.vue";

let interval;

export default {
  name: "App",

  components: {
    TheMap,
    TheSidebar,
  },

  computed: mapGetters(["isAnyVisible"]),

  watch: {
    isAnyVisible(isVisible) {
      if (isVisible) this.turnUpdatesOn();
      if (!isVisible) this.turnUpdatesOff();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    ...mapActions(["updateSatellitesData"]),

    initialize() {
      if (this.isAnyVisible) {
        this.turnUpdatesOn();
      }
    },

    turnUpdatesOn() {
      if (interval === undefined) {
        interval = setInterval(() => this.updateSatellitesData(), 1000);
      }
    },

    turnUpdatesOff() {
      clearInterval(interval);
      interval = undefined;
    },
  },
};
</script>

<style lang="scss">
body,
html,
#app {
  height: 100%;
  width: 100%;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
}
</style>
