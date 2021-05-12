const { Schema, model } = require("mongoose");

const SessionSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  sessionId: {
    type: String,
    required: true,
  },
  vaccine: {
    type: String,
    required: true,
  },
  centerName: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  centerId: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  feeType: {
    type: String,
    required: true,
  },
  availableCapacity: {
    type: Number,
    required: true,
  },
  minAgeLimit: {
    type: String,
    required: true,
  },
});

module.exports = model("Session", SessionSchema);
