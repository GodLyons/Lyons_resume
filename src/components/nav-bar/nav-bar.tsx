import React from 'react'
import './nav-bar.css'
import { navState } from '../../type'
import {connect} from 'react-redux'
import {Anchor} from 'antd'
const {Link} = Anchor

interface navProp {
  page: number,
  dispatch: any
}

const NavBar: React.FC<navProp> = (prop) => {
  let initState = [
    {name: '关于我', active: false, id: 'page1'},
    {name: '求职意向', active: false, id: 'page2'},
    {name: '项目', active: false, id: 'page3'},
    {name: '技术掌握', active: false, id: 'page4'},
    {name: '联系我', active: false, id: 'page5'}
  ]
  if (prop.page > 0) {
    initState[prop.page - 1].active = true
  }
  return (
    <div className={`nav-bar ${prop.page > 0 ? 'fixed' : ''}`}>
      <div className="nav-logo">Lyons简历</div>
      <div className="nav-list">
        {initState.map((item: navState, index: number) => (
          <div className={`nav-item ${item.active ? 'active' : ''}`} key={index}>{item.name}</div>
        ))}
      </div>
    </div>
  )
}

const NavBarInstead: React.FC = () => {
  let style = {
    height: 70
  }
  return (
    <div style={style}></div>
  )
}
const mapStateToProps = (state: any) => {
  return {
    page: state.wsReducer.page
  }
}

// const mapDispatchToProps =

export default {
  NavBar: connect(mapStateToProps)(NavBar),
  NavBarInstead
}