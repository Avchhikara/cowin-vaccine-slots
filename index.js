require("dotenv").config();

const { locations, urls } = require("./config.json");

const httpsClient = require("./httpsClient");
const db = require("./mongodb");
const getDistricts = require("./utils/getDistricts");
const getCalenderByDistrict = require("./utils/getCalendarByDistrict");
const saveSession = require("./utils/saveSession");

(async function () {
  await getDistricts(
    urls.base_url + urls.districts,
    locations,
    httpsClient,
    async ({ districts }) => {
      for (let { district_id } of districts) {
        await getCalenderByDistrict(
          urls.base_url + urls.calendarByDistrict,
          district_id,
          httpsClient,
          async ({ centers }) => {
            centers.forEach(async (center) => {
              await saveSession(center);
            });
          }
        );
      }
    }
  );
})();
