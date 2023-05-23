import React,{createRef, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import logo from '../views/all_icon/logo.svg' 
import logo2 from '../views/all_icon/logo2.jpg' 
import dashboard from '../views/all_icon/dashboard.svg'
import dashboard2 from '../views/all_icon/dashboard2.svg'
import create from '../views/all_icon/create.svg'
import create2 from '../views/all_icon/create2.svg'
import overview from '../views/all_icon/overview.svg'
import overview2 from '../views/all_icon/overview.svg'
import wheel from '../views/all_icon/wheel.svg'
import wheel2 from '../views/all_icon/wheel2.svg'
import admin from '../views/all_icon/admin.svg'
import jwt_decode from "jwt-decode";
import {accessrole} from '../views/config'

const TheSidebar = () => {
  const [isdashboard,setDashboard] = useState(false)
  const [iscreate,setCreate] = useState(false)
  const [isoverview,setOverview] = useState(false)
  const [iswheel,setWheel] = useState(false)
  const [isadmin,setAdmin] = useState(false)


  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)
  const BG = {background:'white'}
  const listRef  = createRef(null);

const handleDashboard=()=>{
  setDashboard(true)
  setCreate(false)
  setOverview(false)
  setWheel(false)
  setAdmin(false)
}
const handleCreate=()=>{
  setDashboard(false)
  setCreate(true)
  setOverview(false)
  setWheel(false)
  setAdmin(false)
}
const handleOverview=()=>{
  setDashboard(false)
  setCreate(false)
  setOverview(true)
  setWheel(false)
  setAdmin(false)
}
const handleWheel=()=>{
  setDashboard(false)
  setCreate(false)
  setOverview(false)
  setWheel(true)
  setAdmin(false)
}


  return (
    <CSidebar
      show={show}
      style={{background:'white',width:'120px'}}
      
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none shadow-sm" to="/"  style={{background:'white',height:210}}>

        <div style={{height:97}}>
          {/* fsldhflkj */}
        <CIcon
          // className="c-sidebar-brand-full my-3 "
          style={{background:'white',border:2,position:'absolute',top:0,left:0}}
          src={logo2}
          width={200}
          height={97}
        /> 
        </div>
        {/* <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />  */}
      </CSidebarBrand>

      <div ref={listRef}>
   {accessrole==='Bydel Director' && <CSidebarBrand to='/dashboard' className="mt-3"   style={BG}  onClick={handleDashboard} >
           <img src={isdashboard===true?dashboard2:dashboard}  />
      </CSidebarBrand> }
      {accessrole==='Bydel Director' &&  <CSidebarBrand to='/create' className="mt-3"   style={BG}  onClick={handleCreate} >
           <img src={iscreate===true?create2:create}  />
      </CSidebarBrand>}
       {accessrole==='Bydel Director' &&  <CSidebarBrand to='/create' className="mt-3"   style={BG}  onClick={handleOverview} >
           <img src={isoverview===true?overview2:overview}  />
      </CSidebarBrand>}
       {accessrole==='Bydel Director' &&  <CSidebarBrand to='/create' className="mt-3"   style={BG}  onClick={handleWheel} >
           <img src={iswheel===true?wheel2:wheel}  />
      </CSidebarBrand>}
     {accessrole==="Admin" && <CSidebarBrand to='/user' className="mt-3"   style={BG}  onClick={handleWheel} >
           <img src={iswheel===true?admin:admin}  />
      </CSidebarBrand>}

      </div>

    </CSidebar>
  )
}

export default React.memo(TheSidebar)
