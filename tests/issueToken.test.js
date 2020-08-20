var axios = require('axios')
var MockAdapter = require('axios-mock-adapter')

var mock = new MockAdapter(axios)

mock.onPost('/usertoken/issue',
  { data: { username: 'testUser', password: 'testPassword' } }
).reply(200, {
  TokenType: 'Bearer',
  AccessToken: 'foobar',
  User: {
    id: 1,
    FirstName: 'Test',
    LastName: 'User',
    Type: 'Staff'
  }
})
