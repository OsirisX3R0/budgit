const Billers = require("../../../../controllers/billers.controller");

module.exports = async (req, res) => {
  try {
    let deleted = await Billers.delete(+req.query.id);

    return res.json(deleted);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
