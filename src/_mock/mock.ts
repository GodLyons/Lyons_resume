import Mock from 'mockjs'

const mock = (url: string, ...rest: any) => {
  const baseUrl: string = 'http://localhost:3030/resume'
  return Mock.mock(`${baseUrl}${url}`, ...rest)
}

// 获取头像的url
mock('/getImageUrl', 'get', req => {
  console.log(req)
})