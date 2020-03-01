import React, { useState, useEffect } from 'react'
import PageTitle from 'components/page-title/page-title'
import {pageProps} from 'type'
import './page.css'
import api from 'api/home'

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
  const [data, setData] = useState({
    imgUrl: '',
    info: []
  })
  useEffect(() => {
    api.getAboutMe().then((res: any) => {
      const {code, data} = res
      if (code === '0') {
        setData(data)
      }
    })
  }, [])
  const articles = data.info.map((item: string, index: number) => (
    <article className="page-article" key={index}>{item}</article>
  ))
  return (
    <div style={{
      textAlign: 'center',
      ...pageStyle}}>
      <PageTitle inprop={prop.page === 1}>关于我</PageTitle>
      <img style = {imgStyle} src={data.imgUrl} alt="头像"/>
      {articles}
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