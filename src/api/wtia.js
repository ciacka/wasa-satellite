/**
 * WTIA (Where the ISS at) API handler.
 *
 * @link   https://wheretheiss.at/w/developer
 */

import Axios from "axios";

const baseURL = process.env.VUE_APP_WTIA_API_ENDPOINT;
const axios = Axios.create({ baseURL });

/**
 * Returns information about satellite's current position and other related information.
 *
 * @access public
 *
 * @param {number} id NORAD's catalog satellite id.
 */
export const findSatelliteById = async id => {
  const path = `/satellites/${id}`;
  const result = await axios.get(path);
  return result.data;
};
