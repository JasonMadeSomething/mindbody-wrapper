const mindBodyURL = 'https://api.mindbodyonline.com/public/v6/'

function getSalesConfig (token, siteId, params) {
  return {
    method: 'get',
    baseURL: mindBodyURL,
    url: 'sale/sales',
    headers: {
      'Content-Type': 'application/json',
      SiteId: siteId,
      'Api-Key': process.env.ApiKey,
      Authorization: token
    },
    ... params && { params: params }
  }
}

function getServicesConfig (token, siteId, params) {
  return {
    method: 'get',
    baseURL: mindBodyURL,
    url: 'sale/services',
    headers: {
      'Content-Type': 'application/json',
      SiteId: siteId,
      'Api-Key': process.env.ApiKey,
      Authorization: token
    },
    ... params && { params: params }
  }
}

function getProductsConfig (token, siteId, params) {
  return {
    method: 'get',
    baseURL: mindBodyURL,
    url: 'sale/products',
    headers: {
      'Content-Type': 'application/json',
      SiteId: siteId,
      'Api-Key': process.env.ApiKey,
      Authorization: token
    },
    ... params && { params: params }
  }
}
