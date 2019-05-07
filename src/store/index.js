import Vue from "vue";
import Vuex from "vuex";
import * as api from "@/api/wtia";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    loadingState: "IDLE",
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
    UPDATE_LOADING_STATE: (state, loadingState) => {
      state.loadingState = loadingState;
    },

    UPDATE_SATELLITE_POSITION: (state, { satellite, position }) => {
      satellite.position = position;
    },

    UPDATE_SATELLITE_VISIBILITY: (state, { satellite, visible }) => {
      satellite.visible = visible;
    },
  },
  actions: {
    updateSatellitesData: async ({ commit, state }) => {
      // When loading in progress do not execute this function now
      if (state.loadingState.startsWith("IN_PROGRESS")) return;

      // We have one satellite only now
      const satellite = state.satellites[0];

      // When no response after 5s, set state to IN_PROGRESS_SLOW
      const slowRequestWatcher = setTimeout(
        () => commit("UPDATE_LOADING_STATE", "IN_PROGRESS_SLOW"),
        5000
      );

      try {
        commit("UPDATE_LOADING_STATE", "IN_PROGRESS");

        const { latitude, longitude } = await api.findSatelliteById(
          satellite.id
        );
        const position = { lat: latitude, lng: longitude };

        commit("UPDATE_SATELLITE_POSITION", { satellite, position });
        commit("UPDATE_LOADING_STATE", "IDLE");
      } catch (err) {
        commit("UPDATE_LOADING_STATE", "ERROR");
      }

      clearTimeout(slowRequestWatcher);
    },

    toggleSatellite: ({ commit }, satellite) => {
      const visible = !satellite.visible;
      commit("UPDATE_SATELLITE_VISIBILITY", { satellite, visible });
    },
  },
});
