const Billers = require("../../../controllers/billers.controller");

module.exports = async (req, res) => {
  try {
    let { coupons } = await Billers.update(+req.query.id, req.body);

    return res.json(coupons);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
