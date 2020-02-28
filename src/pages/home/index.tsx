import React from 'react'
import {connect} from 'react-redux'
import { initState, HomeProps } from '../../type'
import img from 'asset/banner1.jpeg'
import './index.css'
import Nav from 'components/nav-bar/nav-bar'
import PageCon from './PageCon'
import {BackTop} from 'antd'
import Pages from './AboutMe'

const {JobIntention, AboutMe, MyProject, MySkill, ConnectMe} = Pages

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
  const toPage = (page: number):void => {
    console.log(123)
    document.documentElement.scrollTop = prop.screenHeight * page
  }
  return (
    <>
    <BackTop/>
    <div className="home-index" style={style}>
      <div className="home-title">Hello,I'm Lyons</div>
      <div className="home-desc">前端不仅仅是一种职业，更是爱好</div>
      <div className="home-btn">
        <span className="black-btn home-btn-in" onClick={() => toPage(1)}>
          关于我
        </span>
        <span className="white-btn home-btn-in" onClick={() => toPage(3)}>
          我的项目
        </span>
      </div>
      <img onClick={toGithub} className="home-img" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_orange_ff7600.png?resize=149%2C149" alt="前往github"/>
    </div>

    <Nav.NavBar screenHeight={prop.screenHeight}></Nav.NavBar>

    <PageCon>
      <AboutMe page={prop.page}></AboutMe>
    </PageCon>
    <PageCon>
      <JobIntention page={prop.page}></JobIntention>
    </PageCon>
    <PageCon>
      <MyProject page={prop.page}></MyProject>
    </PageCon>
    <PageCon>
      <MySkill page={prop.page}></MySkill>
    </PageCon>
    <PageCon>
      <ConnectMe page={prop.page}></ConnectMe>
    </PageCon>
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