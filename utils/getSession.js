const Session = require("./../model/Session");

module.exports = async (sessionId, centerId) => {
  const data = await Session.find({
    sessionId,
    centerId,
  });
  return data;
};
