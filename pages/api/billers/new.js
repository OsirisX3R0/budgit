const Billers = require("../../../controllers/billers.controller");

module.exports = async (req, res) => {
  try {
    let data = {
      ...req.body,
      category: !req.body.category ? null : req.body.category,
      default_amount: !req.body.default_amount ? null : req.body.default_amount,
    };
    let biller = await Billers.create({ data });

    res.json(biller);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
