const { Users } = require("../models")

class userController {
  static renderHello(req, res) {
    res.send("hello")
  }

  static viewAll(req, res) {
    Users.findAll({
      order: [["id", 'ASC']]
    })
      .then((data) => {
        res.render("user", { data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  static viewById(req, res) {
    const id = req.params.id
    Users.findByPk(id)
      .then((data) => {
        // karena di ejs untuk menampilkan datanya data wajib berupa array, karena nampilin datanya itu prosesnya nge loop data, maka dari itu datanya dibuat menjadi arrray
        data = [data]
        res.render("user", { data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  static viewByUsername(req, res) {
    const username = req.params.username
    Users.findOne({
      where: { username: username }
    })
      .then((data) => {
        data = [data]
        res.render("user", { data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  static getAddForm(req, res) {
    res.render("user/add")
  }

  static addUser(req, res) {
    // bikin penampung object buat input data ke db
    let newUser = {
        username: req.body.username,
        password: req.body.password
    }

    Users.create(newUser)
      .then((_) => {
        res.redirect("/user")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static getEditForm(req, res) {
    const id = req.params.id
    Users.findByPk(id)
      .then((data) => {
        console.log(data)
        res.render('user/edit', { data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static editUser(req, res) {
    const id = req.params.id
    let updatedUser = {
      username: req.body.username,
      password: req.body.password
    }
    Users.update(updatedUser, {
      where: {
        id: id
      }
    })
      .then(() => {
        res.redirect("/user")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static deleteUser(req, res) {
    const id = req.params.id
    Users.destroy({
      where: { id: id }
    })
      .then(() => {
        res.redirect("/user")
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = userController;