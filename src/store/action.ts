import { reduxAction } from '../type'
export function windowScroll (text: number | string): reduxAction {
  return {
    type: 'WINDOW_SCROLL',
    text
  }
}