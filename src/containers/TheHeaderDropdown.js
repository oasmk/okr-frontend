import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import {
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";
import { Auth } from 'aws-amplify';

const TheHeaderDropdown = () => {
  const history = useHistory();


  const handleLogout = async()=>{
   
          try {
              await Auth.signOut();
              localStorage.setItem('token', '');
              window.location.reload()
              history.push({
                pathname: '/login'
            });
              
          } catch (error) {
              console.log('error signing out: ', error);
          }
      
    // console.log('log')
  }
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/6.jpg'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem onClick={handleLogout}>  Logout  </CDropdownItem>
 
     
     
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
