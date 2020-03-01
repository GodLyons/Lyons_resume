import Mock from 'mockjs'
import {resType} from 'type'

const _mock = (url: string, callback: any) => {
  const baseUrl: string = 'http://localhost:3000/resume'
  Mock.mock(`${baseUrl}${url}`, callback)
}

const resTemplate = (data: any, message: string, code: string):resType => {
  return {
    data,
    message,
    code
  }
}

// 获取关于我的信息
_mock('/getAboutMe', (req: any) => {
  return resTemplate({
    imgUrl: 'http://img3.imgtn.bdimg.com/it/u=1268102386,1821594743&fm=11&gp=0.jpg',
    info: [
      '我是Lyons，毕业于河南工业大学，999jjjjjjjj999999999999999999999999999000000000808786686767678686876678687686。',
      '我的兴趣爱好是唱跳 rap篮球我的兴趣爱好是唱跳 rap篮球我的兴趣爱好是唱跳 rap篮球我的兴趣爱好是唱跳 rap篮球我的兴趣爱好是唱跳 rap篮球我的兴趣爱好是唱跳 rap篮球。'
    ]
  }, '获取关于我信息成功', '0')
})