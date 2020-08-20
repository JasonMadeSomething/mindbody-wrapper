const mindBodyURL = 'https://api.mindbodyonline.com/public/v6/'

class Config {
  constructor (method, url, headers, params) {
    this.method = method || 'GET'
    this.baseURL = mindBodyURL
    this.url = url
    this.heders = headers
    this.params = params
  }
}
