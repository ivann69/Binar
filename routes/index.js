const usersRouter = require('./usersRouter')
const bioRouter = require('./bioRouter')
const historyRouter = require('./historyRouter')

const router = require('express').Router()

// "/"
router.get("/", (req, res) => {
  res.render("home.ejs")
})

//important slices
router.use("/user", usersRouter)
router.use("/biodata", bioRouter)
router.use("/history", historyRouter)
module.exports = router