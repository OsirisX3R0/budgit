const Payments = require("../../../controllers/payments.controller");

module.exports = async (req, res) => {
  try {
    let payments = await Payments.get(+req.query.month, +req.query.year);

    res.json(payments);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
