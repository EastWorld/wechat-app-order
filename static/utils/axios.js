import axios from '../../node_modules/axios/dist/axios'
const CONFIG = require('../../config.js')

axios.defaults.adapter = function (config) {
  // 发交易之前显示加载中
  wx.showLoading({ title: '拼命加载中...' })
  // 发交易调用(开发放开注释)
  return new Promise((resolve, reject) => {
    let _url = 'https://api.it120.cc'
    if (!config.publicDomain) {
      _url += ('/' + CONFIG.subDomain)
    }
    _url += config.url
    if (config.data) {
      config.data = JSON.parse(config.data)
    }
    config.url = _url
    if (!config.header) {
      config.header = {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }
    config.success = res => {
      return resolve(res || {})
    }
    config.complete = res => {
      wx.hideLoading()
      // TODO:
    }
    wx.request(config)
  })
}

export default axios
