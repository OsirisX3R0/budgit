const Schedules = require("../../../controllers/schedules.controller");

module.exports = async (_, res) => {
  try {
    let schedules = await Schedules.get();

    res.json(schedules);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
