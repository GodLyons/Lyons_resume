import { store } from '../store/store'
import { windowScroll } from '../store/action'
try {
  // 页面高度
  let screenHeight: number = store.getState().reducer.screenHeight || 0
  let statePage: number = store.getState().wsReducer.page

  window.onscroll = () => {
    // 页面滚动的高度
    // console.log(store.getState().wsReducer.page)
    let top: number = document.documentElement.scrollTop
    let rest: number = top % screenHeight
    let page: number = (top - rest) / screenHeight
    if (statePage !== page) {
      store.dispatch(windowScroll(page))
      statePage = page
    }
  }
} catch (e) {
  console.log(e.message)
}