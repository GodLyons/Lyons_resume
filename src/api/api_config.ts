import axios from 'axios'

interface getConfig {
  params: any,
  [propName: string]: any
}

const instance = axios.create({
  baseURL: 'http://localhost:3000/resume',
  timeout: 1000
})

instance.interceptors.request.use((config: any) => {
  // console.log(config)
  return config
}, (error: any) => {
  return Promise.reject(error)
})

instance.interceptors.response.use((res: any) => {
  const {code, message} = res.data
  if (code === '-1') {
    console.error(message)
  } else if (code === '-3') {
    console.error('系统异常')
  }
  return res.data
}, (error: any) => {
  return Promise.reject(error)
})

const _post = (url: string, params: any, config?: any) => {
  return instance.post(url, params, config)
}

const _get = (url: string, config?: getConfig) => {
  return instance.get(url, config)
}
export default {
  _post,
  _get
}