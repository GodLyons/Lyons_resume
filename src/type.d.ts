// 初始化store
export interface initState {
  readonly screenHeight: number,
  readonly screenWidth: number
}
// Home页面的props
export interface HomeProps extends initState {
  [propName: string]: any
}
