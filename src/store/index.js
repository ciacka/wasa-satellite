import Vue from "vue";
import Vuex from "vuex";
import * as api from "@/api/wtia";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    satellites: [
      {
        id: 25544,
        name: "International Space Station",
        icon: "iss.png",
        position: null,
        visible: true,
      },
    ],
  },
  getters: {
    isAnyVisible: state =>
      state.satellites.filter(satellite => satellite.visible === true).length >
      0,
  },
  mutations: {
    UPDATE_SATELLITE_VISIBILITY: (state, { satellite, visible }) => {
      satellite.visible = visible;
    },
  },
  actions: {
    updateSatellitesData: ({ commit }) => {
      console.log("updateSatellitesData");
    },

    toggleSatellite: ({ commit }, satellite) => {
      const visible = !satellite.visible;
      commit("UPDATE_SATELLITE_VISIBILITY", { satellite, visible });
    },
  },
});
