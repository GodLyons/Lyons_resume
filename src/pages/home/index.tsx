import React from 'react'
import {connect} from 'react-redux'
import { initState, HomeProps } from '../../type'
import img from 'asset/banner1.jpeg'
import './index.css'
import Nav from 'components/nav-bar/nav-bar'

const Home: React.FC<HomeProps> = (prop) => {
  console.log(prop)
  let style = {
    height: prop.screenHeight,
    width: prop.screenWidth,
    backgroundImage: `url(${img})`
  }
  const toGithub = ():void => {
    window.open('https://github.com/GodLyons/Lyons_resume')
  }
  const aboutMe = ():void => {
    console.log(123)
    document.documentElement.scrollTop = prop.screenHeight
  }
  return (
    <>
    <div className="home-index" style={style}>
      <div className="home-title">Hello,I'm Lyons</div>
      <div className="home-desc">前端不仅仅是一种职业，更是爱好</div>
      <div className="home-btn" onClick={aboutMe}>
        <span className="black-btn home-btn-in">
          关于我
        </span>
        <span className="white-btn home-btn-in">
          我的项目
        </span>
      </div>
      <img onClick={toGithub} className="home-img" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_orange_ff7600.png?resize=149%2C149" alt="前往github"/>
    </div>

    <Nav.NavBar></Nav.NavBar>
    <a href="#uuu">111111</a>
    {/* 当导航栏脱离标准文档流的时候，通过NavBarInstead去替代它的位置 */}
    {prop.page > 0 && <Nav.NavBarInstead></Nav.NavBarInstead>}
    {
      Array.from({length: 100}).map((index) => {
        return (
          <div>123</div>
        )
      })
    }
    <div id="uuu">888</div>
    </>
  )
}
const mapStateToProps = (state: any): initState => {
  return {
    ...state.reducer,
    page: state.wsReducer.page
  }
}

export default connect(mapStateToProps)(Home)