import React from 'react'
import Nav from 'components/nav-bar/nav-bar'
import {connect} from 'react-redux'
import { initState, HomeProps } from '../../type'

const { NavBarInstead} = Nav

const PageCon: React.FC<HomeProps> = (prop) => {
  let style = {
    height: prop.screenHeight - 70
  }
  return (
    <div>
      {prop.page > 0 && <NavBarInstead></NavBarInstead>}
      <div style={style}>
        {prop.children}
      </div>
    </div>
  )
}


const mapStateToProps = (state: any): initState => {
  return {
    ...state.reducer,
    page: state.wsReducer.page
  }
}

export default connect(mapStateToProps)(PageCon)