const Crawler = require('crawler')
const AppModel = require('../database/models/App')

const crawler = new Crawler({
  maxConnections: 10,
  callback: function (error, res, done) {
    if (error) {
      console.log('Error ------', error)
    } 
    
    done()
  }
})

crawler.queue([{
  uri: 'https://pwa.rocks/',

  callback: function (error, res, done) {
    if (error) {
      console.log('error', error)
      return
    }

    const $ = res.$      
    const listItem = $('.list__item')

    let countRegisters = 0
    
    const appsToSave = []

    listItem.each((index, item) => {
      const name = $(item).find('.app__title').text()
      const url = $(item).attr('href')
      const dataTags = $(item).attr('data-tags')
      
      const tags = dataTags ? dataTags.split(' ') : ''

      appsToSave.push({
        name,
        url,
        tags,
      })
    })

    console.log(appsToSave)

    AppModel.collection.insert(appsToSave, err => {
      if (err) {
        return console.error(err);
      } else {
        console.log("Multiple documents inserted to Collection");
      }
    })

    done()
  }
}])