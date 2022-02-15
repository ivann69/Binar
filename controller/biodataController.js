const { Biodata } = require("../models")

class biodataController {
  static renderHello(req, res) {
    res.send("hello")
  }

  static viewAll(req, res) {
    Biodata.findAll({
      order: [["id", 'ASC']]
    })
      .then((data) => {
        res.render("biodata", { data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  static viewById(req, res) {
    const id = req.params.id
    Biodata.findByPk(id)
      .then((data) => {
        // karena di ejs untuk menampilkan datanya data wajib berupa array, karena nampilin datanya itu prosesnya nge loop data, maka dari itu datanya dibuat menjadi arrray
        data = [data]
        res.render("biodata", { data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  static viewByEmail(req, res) {
    const email = req.params.email
    Biodata.findOne({
      where: { email: email }
    })
      .then((data) => {
        data = [data]
        res.render("biodata", { data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  static getAddForm(req, res) {
    res.render("biodata/add")
  }

  static addbiodata(req, res) {
    // bikin penampung object buat input data ke db
    let newBiodata = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender,
      birthday: req.body.birthday,
      email: req.body.email,
    }

    Biodata.create(newBiodata)
      .then((_) => {
        res.redirect("/biodata")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static getEditForm(req, res) {
    const id = req.params.id
    Biodata.findByPk(id)
      .then((data) => {
        console.log(data)
        res.render('biodata/edit', { data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static editBiodata(req, res) {
    const id = req.params.id
    let updatedbiodata = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender,
      birthday: req.body.birthday,
      email: req.body.email,
    }
    Biodata.update(updatedbiodata, {
      where: {
        id: id
      }
    })
      .then(() => {
        res.redirect("/biodata")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static deleteBiodata(req, res) {
    const id = req.params.id
    Biodata.destroy({
      where: { id: id }
    })
      .then(() => {
        res.redirect("/biodata")
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = biodataController;