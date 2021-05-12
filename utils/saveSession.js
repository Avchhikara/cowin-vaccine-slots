const Session = require("./../model/Session");
const parseDate = require("./dateFromString");
const getSession = require("./getSession");

module.exports = async (center) => {
  const {
    center_id,
    pincode,
    state_name,
    district_name,
    name,
    from,
    to,
    fee_type,
    sessions = [],
  } = center;
  for (let session of sessions) {
    const { session_id, date, available_capacity, min_age_limit, vaccine } =
      session;
    // First checking if the session already exist or not
    const sn = await getSession(session_id, center_id);
    if (sn.length == 0) {
      const ssn = new Session({
        date: parseDate(date),
        sessionId: session_id,
        vaccine,
        centerName: name,
        pincode,
        centerId: center_id,
        state: state_name,
        district: district_name,
        from,
        to,
        feeType: fee_type,
        availableCapacity: available_capacity,
        minAgeLimit: min_age_limit,
      });
      await ssn.save();
    }
  }
};
