const https = require("https");

function handleGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk.toString()));
      res.on("end", () => {
        resolve(JSON.parse(data));
      });
      res.on("error", (err) => {
        reject(err);
      });
    });
  });
}

module.exports = {
  get: handleGet,
};
