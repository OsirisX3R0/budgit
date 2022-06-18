const Schedules = require("../../../controllers/schedules.controller");

module.exports = async (req, res) => {
  try {
    let schedule = await Schedules.update(+req.query.id, req.body);

    return res.json(schedule);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
