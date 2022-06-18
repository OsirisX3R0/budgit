const Schedules = require("../../../../controllers/schedules.controller");

module.exports = async (req, res) => {
  try {
    let deleted = await Schedules.delete(+req.query.id);

    return res.json(deleted);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
