var axios = require('axios')
var MockAdapter = require('axios-mock-adapter')

var mock = new MockAdapter(axios)

mock.onGet('sale/sales').reply(200, {
  
})
