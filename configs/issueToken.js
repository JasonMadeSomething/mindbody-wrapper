const mindBodyURL = 'https://api.mindbodyonline.com/public/v6/'

function issueTokenConfig (siteId, username, password) {
  return {
    method: 'post',
    baseURL: mindBodyURL,
    url: '/usertoken/issue',
    headers: {
      'Content-Type': 'application/json',
      SiteId: siteId,
      'Api-Key': process.env.ApiKey
    },
    data: { Username: username, Password: password }
  }
}

module.exports = issueTokenConfig
