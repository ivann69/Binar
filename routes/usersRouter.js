const userController = require('../controller/userController.js')
const usersRouter = require('express').Router();

usersRouter.get("/hello", userController.renderHello)
usersRouter.get("/", userController.viewAll)
usersRouter.get("/add", userController.getAddForm)
usersRouter.post("/add", userController.addUser)
usersRouter.get("/:id/delete", userController.deleteUser)
usersRouter.get("/:id/edit", userController.getEditForm)
usersRouter.post("/:id/edit", userController.editUser)
usersRouter.get("/:id", userController.viewById)
// usersRouter.get("/cari/:username", userController.viewByUsername)



module.exports = usersRouter;