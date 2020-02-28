import React, { useState } from 'react'
import PageTitle from 'components/page-title/page-title'
import {pageProps} from 'type'


const pageStyle = {
  paddingTop: 100,
  overflow: 'hidden'
}

const AboutMe: React.FC<pageProps> = prop => {
  return (
    <div style={pageStyle}>
      <PageTitle inprop={prop.page === 1 ? true : false}>关于我</PageTitle>
    </div>
  )
}

const JobIntention: React.FC<pageProps> = prop => {
  return (
    <div style={pageStyle}>
      <PageTitle inprop={prop.page === 2 ? true : false}>求职意向</PageTitle>
    </div>
  )
}

const MyProject: React.FC<pageProps> = prop => {
  return (
    <div style={pageStyle}>
      <PageTitle inprop={prop.page === 3 ? true : false}>项目</PageTitle>
    </div>
  )
}

const MySkill: React.FC<pageProps> = prop => {
  return (
    <div style={pageStyle}>
      <PageTitle inprop={prop.page === 4 ? true : false}>技术掌握</PageTitle>
    </div>
  )
}

const ConnectMe: React.FC<pageProps> = prop => {
  return (
    <div style={pageStyle}>
      <PageTitle inprop={prop.page === 5 ? true : false}>联系我</PageTitle>
    </div>
  )
}

export default {
  AboutMe,
  JobIntention,
  MyProject,
  MySkill,
  ConnectMe
}