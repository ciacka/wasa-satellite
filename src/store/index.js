import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    availableSatellites: [{ id: "25544", name: "International Space Station" }],
  },
  actions: {},
});