import { initState } from '../type'
// 获取屏幕的高度
const screenHeight: number = window.innerHeight ||
                             document.documentElement.clientHeight ||
                             document.body.clientHeight;
// 获取屏幕的宽度
const screenWidth: number = window.innerWidth ||
                            document.documentElement.clientWidth ||
                            document.body.clientWidth

const istate: initState = {
  screenHeight,
  screenWidth
}

function reducer (state = istate) {
  return state
}

export default reducer