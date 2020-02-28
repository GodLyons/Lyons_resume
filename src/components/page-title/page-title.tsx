import React from 'react'
import { titleProps } from '../../type'
import {Transition} from 'react-transition-group'

const PageTitle: React.FC<titleProps> = (prop) => {
  console.log(prop.inprop)
  const duration = 500

  const defaultStyle = {
    transition: `width ${duration}ms ease-in-out`,
    width: 0
  }
  const transitionStyle:any = {
    entering: { width: 80 },
    entered:  { width: 80 },
    exiting:  { width: 0 },
    exited:  { width: 0 }
  }
  const borderStyle = {
    margin: '0 auto',
    border: '0',
    borderBottom: '3px solid #E87E04'
  }
  return (
    <>
      <div style={{
        textAlign: 'center',
        fontSize: '30px'
      }}>{prop.children}</div>
      <Transition in={prop.inprop} timeout={duration}>
        {(state) => (
          <div style={{
            ...defaultStyle,
            ...borderStyle,
            ...transitionStyle[state]
          }}>
          </div>
        )}
      </Transition>
    </>
  )
}

export default PageTitle