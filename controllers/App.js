const { AppModel } = require('../database')

// const getAllAround = (req, res) => {
//   const meters = req.body.meters

//   App.find({
    
//   }).then(results => {
//     res.send(JSON.stringify(results))
//   })
// }

const add = (req, res) => {
  const {
    name,
    url,
    tags,
  } = req.body

  const app = new AppModel({
    name,
    url,
    tags,
  })

  app.save((err, register) => {
    if (err) {
      console.log(err)
      return
    }

    console.log('Register added: , ', register)

    res.send(JSON.stringify({
      status: 'added',
      app: register,
    }))
  })
}

module.exports = {
  add,
}