const { Halqa } = require("../../handlers/Locations");
const { isProvince } = require("../../middlewares");

const router = require("express").Router();

const handler = new Halqa();
router.post("/", isProvince, handler.createOne);
router.get("/", handler.getAll);
router.get("/:id", handler.getOne);
router.put("/:id", isProvince, handler.updateOne);
router.delete("/:id", isProvince, handler.deleteOne);
router.get("/halqaType", handler.getHalqaListByParentType);

module.exports = router;
