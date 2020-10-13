const Sku = require("../../models/sku");

module.exports = {
  getAllSku: async (req, res) => {
    const sku = await Sku.find({});
    try {
      res.send(sku);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getSkuById: async (req, res) => {
    const sku = await Sku.findById(req.params.id);
    try {
      res.send(sku);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  addSku: async (req, res) => {
    const sku = await Sku.create(req.body);
    try {
      res.send(brand);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  updateSku: async (req, res) => {
    const brand = await Sku.findByIdAndUpdate(req.params.id, req.body);
    try {
      await brand.save();
      res.send(brand);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  deleteSku: async (req, res) => {
    const sku = await Sku.findByIdAndDelete(req.params.id);
    try {
      if (sku) {
        res.status(200).send(`sku id: ${req.params.id} has been deleted`);
      } else {
        res.status(404).send("not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
