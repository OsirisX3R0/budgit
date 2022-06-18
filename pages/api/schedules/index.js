const Schedule = require("../../../controllers/schedules.controller");

module.exports = async (_, res) => {
  try {
    let schedules = await Schedule.get();

    res.json(schedules);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
