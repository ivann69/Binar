const router = require('./routes')
const express = require('express')
// const path = require('path');
const app = express()
const port = 4000
//const biodataRouter = require("./routes")

// app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// const apiRouter = require('express').Router()
// const v1 = require('express').Router()

// app.use("/api", apiRouter)
// apiRouter.use("/v1", v1)

    //if this on, will redirect to default not routes
// app.get("/", (req, res) => {
//     res.send("heyyyyy")
// })


// app.get("/biodata", (req, res) => {
//   res.render('biodata/index')
// })
// app.get("/biodata", (req, res) => {
//   res.render('/add')
// })
// app.get("/biodata", (req, res) => {
//   res.render('biodata/edit')
// })
// app.get("/useredit", (req, res) => {
//   res.render('user/useredit')
// })
// app.get("/useradd", (req, res) => {
//   res.render('user/useradd')
// })
// app.get("/userindex", (req, res) => {
//   res.render('user/userindex')
// })


app.use(router)


app.listen(port, () => {
  console.log(`running on port: ${port}`)
})