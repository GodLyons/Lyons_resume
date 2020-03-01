import React from 'react'
import {connect} from 'react-redux'
import { initState, HomeProps } from '../../type'

const PageCon: React.FC<HomeProps> = (prop) => {
  let style = {
    height: prop.screenHeight,
    overflow: 'hidden'
  }
  return (
    <div>
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