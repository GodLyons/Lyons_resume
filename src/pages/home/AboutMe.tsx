import React, { useState } from 'react'
import PageTitle from 'components/page-title/page-title'
import {pageProps} from 'type'
import './page.css'

const pageStyle = {
  paddingTop: 100,
  overflow: 'hidden'
}

const AboutMe: React.FC<pageProps> = prop => {
  const imgStyle = {
    marginTop: 50,
    width: 200,
    height: 200,
    borderRadius: '50%'
  }
  return (
    <div style={{
      textAlign: 'center',
      ...pageStyle}}>
      <PageTitle inprop={prop.page === 1}>关于我</PageTitle>
      <img style = {imgStyle} src="http://img3.imgtn.bdimg.com/it/u=1268102386,1821594743&fm=11&gp=0.jpg" alt="头像"/>
      <article>
        我是Lyons，毕业于河南工业大学，。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
      </article>
      <article>
        我的兴趣爱好是唱跳 rap篮球。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
      </article>
    </div>
  )
}

const JobIntention: React.FC<pageProps> = prop => {
  return (
    <div className="job-intention page-commen" style={pageStyle}>
      <PageTitle inprop={prop.page === 2}>求职意向</PageTitle>
    </div>
  )
}

const MyProject: React.FC<pageProps> = prop => {
  return (
    <div className="page-commen" style={pageStyle}>
      <PageTitle inprop={prop.page === 3}>项目</PageTitle>
    </div>
  )
}

const MySkill: React.FC<pageProps> = prop => {
  return (
    <div className="my-skill page-commen" style={pageStyle}>
      <PageTitle inprop={prop.page === 4}>技术掌握</PageTitle>
    </div>
  )
}
const MyExperience: React.FC<pageProps> = prop => {
  return (
    <div className="my-experience page-commen" style={pageStyle}>
      <PageTitle inprop={prop.page === 5}>我的经历</PageTitle>
    </div>
  )
}

const ConnectMe: React.FC<pageProps> = prop => {
  return (
    <div className="page-commen connect-me" style={pageStyle}>
      <PageTitle inprop={prop.page === 6}>联系我</PageTitle>
    </div>
  )
}

export default {
  AboutMe,
  JobIntention,
  MyProject,
  MySkill,
  MyExperience,
  ConnectMe
}