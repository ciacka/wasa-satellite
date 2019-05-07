import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

const key = process.env.VUE_APP_GMAPS_API_KEY;

Vue.use(VueGoogleMaps, {
  load: {
    key,
  },
});
