import React from 'react'
import {connect} from 'react-redux'
import { initState, HomeProps } from '../../type'
import img from '../../asset/banner1.jpeg'
import './index.css'
import {Button} from 'antd'

const Home: React.FC<HomeProps> = (prop) => {
  console.log(prop)
  let style = {
    height: prop.screenHeight,
    width: prop.screenWidth,
    backgroundImage: `url(${img})`
  }
  const toGithub = ():void => {
    window.open('https://wwww.baidu.com')
  }
  return (
    <div className="home-index" style={style}>
      <div className="home-title">Hello,I'm Lyons</div>
      <div className="home-desc">前端不仅仅是一种职业，更是爱好</div>
      <div className="home-btn">
        <span className="black-btn home-btn-in">
          关于我
        </span>
        <span className="white-btn home-btn-in">
          我的项目
        </span>
      </div>
      <img onClick={toGithub} className="home-img" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_orange_ff7600.png?resize=149%2C149" alt="前往github"/>
    </div>
  )
}
const mapStateToProps = (state: initState) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(Home)