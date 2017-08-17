const goodRequest = {
  body: {
    name: 'John',
    surname: 'Snow'
  }
}

const badRequest = {
  body: {
    name: 'The viper'
  }
}

const parameters = ['name', 'surname']

module.exports.goodRequest = goodRequest
module.exports.badRequest = badRequest
module.exports.parameters = parameters
