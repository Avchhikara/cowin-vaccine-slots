/**
 * Returns a list of all district's code
 */
const getDistricts = async (url, states, https, callback) => {
  for (let { state_id } of states) {
    const data = await https.get(url + "/" + state_id);
    callback(data);
  }
};

module.exports = getDistricts;
