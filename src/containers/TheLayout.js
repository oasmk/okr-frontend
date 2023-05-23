import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'

const TheLayout = () => {
  // <div className="c-app"  style={{background: '#FBFBFB'}}>

  return (
    <div className="c-app"  style={{background: '#E5E5E5'}}>
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body ourmainlayout" style={{backgroundColor:'#E5E5E5'}}>
          <TheContent/>
        </div>
        {/* <TheFooter/> */}
      </div>
    </div>
  )
}

export default TheLayout
