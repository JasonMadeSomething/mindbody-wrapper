const mindBodyURL = 'https://api.mindbodyonline.com/public/v6/'

function issueTokenConfig (siteId, apiKey, data) {
  return {
    method: 'post',
    baseURL: mindBodyURL,
    url: '/usertoken/issue',
    headers: {
      'Content-Type': 'application/json',
      SiteId: siteId,
      'Api-Key': apiKey
    },
    data: data
  }
}

module.exports = issueTokenConfig
