const Brand = require("../../models/brand");

module.exports = {
  getAllBrand: async (req, res) => {
    const brand = await Brand.find({});
    try {
      res.send(brand);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getBrandById: async (req, res) => {
    const brand = await Brand.findById(req.params.id);
    try {
      res.send(brand);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  addBrand: async (req, res) => {
    const brand = await Brand.create(req.body);
    try {
      res.send(brand);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  updateBrand: async (req, res) => {
    const brand = await Brand.findByIdAndUpdate(req.params.id, req.body);
    try {
      await brand.save();
      res.send(brand);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  deleteBrand: async (req, res) => {
    const brand = await Brand.findByIdAndDelete(req.params.id);
    try {
      if (brand) {
        res.status(200).send(`brand id: ${req.params.id} has been deleted`);
      } else {
        res.status(404).send("not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
