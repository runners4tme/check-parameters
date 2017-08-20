const allParametersArePresent = require('../index')

const parameters = ['param1', 'param2', 'param3', 'param4', 'param5']

/**
* Example of how to use the package with express js
*/

const addResource = (req, res, next) => {
  if (allParametersArePresent(req, parameters)) {
    // create the resource here.
  } else {
    // handle the missing parameters here.
  }
}

module.exports.addResource = addResource
