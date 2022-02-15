
const biodataController = require('../controller/biodataController.js')
const bioRouter = require('express').Router();

bioRouter.get("/hello", biodataController.renderHello)
bioRouter.get("/", biodataController.viewAll)
bioRouter.get("/add", biodataController.getAddForm)
bioRouter.post("/add", biodataController.addbiodata)
bioRouter.get("/:id/delete", biodataController.deleteBiodata)
bioRouter.get("/:id/edit", biodataController.getEditForm)
bioRouter.post("/:id/edit", biodataController.editBiodata)
bioRouter.get("/:id", biodataController.viewById)
bioRouter.get("/cari/:email", biodataController.viewByEmail)


module.exports = bioRouter;