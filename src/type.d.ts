// 初始化store
export interface initState {
  readonly screenHeight: number,
  readonly screenWidth: number
}
// Home页面的props
export interface HomeProps extends initState {
  [propName: string]: any
}
// nav-bar
export interface navState {
  name: string,
  active: boolean
}
// redux
export interface reduxAction {
  type: string,
  text: string | number
}
// page-title
export interface titleProps {
  inprop: boolean,
  [propName: string]: any
}
// page
export interface pageProps {
  page: number
}
export interface resType {
  code: string,
  data: any,
  message: string
}