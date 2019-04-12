var express = require("express");
var controller = require("../controllers/controller");
var router = express.Router();

/* GET Todos. */
router.get("/", controller.index);
router.get("/notcompleted", controller.notcompleted);
router.get("/:id", controller.show);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

module.exports = router;
