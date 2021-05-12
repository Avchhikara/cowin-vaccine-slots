const handler = async (url, districtId, https, callback) => {
  const today = new Date();
  const date = `${today.getDate()}-${
    today.getMonth() + 1
  }-${today.getFullYear()}`;

  const finalURL = `${url}?district_id=${districtId}&date=${date}`;
  const data = await https.get(finalURL);
  callback(data);
};

module.exports = handler;
