import { initState, reduxAction } from '../type'
import {combineReducers} from 'redux'
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

function wsReducer (state:any = {page: 0}, action: reduxAction) {
  switch (action.type) {
    case 'WINDOW_SCROLL':
      return Object.assign({}, {
        page: action.text
      })
    default:
      return state
  }
}

export default combineReducers({
  reducer,
  wsReducer
})