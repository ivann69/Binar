const historyController = require ("../controller/historyController.js")
const historyRouter = require('express').Router();


historyRouter.get("/hello", historyController.renderHello)
historyRouter.get("/", historyController.viewAll)
historyRouter.get("/add", historyController.getAddForm)
historyRouter.post("/add", historyController.addHistory)
historyRouter.get("/:id/delete", historyController.deletehistory)
historyRouter.get("/:id/edit", historyController.getEditForm)
historyRouter.post("/:id/edit", historyController.edithistory)
historyRouter.get("/:id", historyController.viewById)
historyRouter.get("/cari/:menang", historyController.viewByMenang)



module.exports = historyRouter