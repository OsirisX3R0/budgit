const Schedules = require("../../../controllers/schedules.controller");

module.exports = async (req, res) => {
  try {
    // let data = {
    //   ...req.body,
    //   category: !req.body.category ? null : req.body.category,
    //   default_amount: !req.body.default_amount ? null : req.body.default_amount,
    // };
    let schedule = await Schedules.create(req.body);

    res.json(schedule);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
