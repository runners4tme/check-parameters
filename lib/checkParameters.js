const allParametersArePresent = (request, parameters) => {
  let present = true
  const body = Object.assign({}, request.body)
  for (let paramIndex = 0; paramIndex < parameters.length; paramIndex++) {
    if (body.hasOwnProperty(parameters[paramIndex])) {
      continue
    } else {
      present = false
      break
    }
  }
  return present
}

module.exports = allParametersArePresent
