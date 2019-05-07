import Vue from "vue";
import Vuex from "vuex";
import * as api from "@/api/wtia";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    loadingInProgress: false,
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
    UPDATE_LOADING_STATE: (state, inProgress) => {
      state.loadingInProgress = inProgress;
    },

    UPDATE_SATELLITE_POSITION: (state, { satellite, position }) => {
      satellite.position = position;
    },

    UPDATE_SATELLITE_VISIBILITY: (state, { satellite, visible }) => {
      satellite.visible = visible;
    },
  },
  actions: {
    updateSatellitesData: ({ commit, state }) => {
      // When loading in progress do not execute this function now
      if (state.loadingInProgress === true) return;

      commit("UPDATE_LOADING_STATE", true);

      state.satellites
        .filter(satellite => satellite.visible === true)
        .forEach(async satellite => {
          const { latitude, longitude } = await api.findSatelliteById(
            satellite.id
          );
          const position = { lat: latitude, lng: longitude };
          commit("UPDATE_SATELLITE_POSITION", { satellite, position });
        });

      commit("UPDATE_LOADING_STATE", false);
    },

    toggleSatellite: ({ commit }, satellite) => {
      const visible = !satellite.visible;
      commit("UPDATE_SATELLITE_VISIBILITY", { satellite, visible });
    },
  },
});
