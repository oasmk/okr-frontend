import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Auth } from 'aws-amplify';
import 'crypto-js/lib-typedarrays'; // add this line
import Amplify, {Auth} from 'aws-amplify';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CCol,
  CFormGroup,
  CLabel,
  CForm,
  CText,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  Link
} from "react-router-dom";
import CIcon from '@coreui/icons-react'
import logo from '../../all_icon/logo.svg'
import {loginname} from '../../style'
import jwt_decode from "jwt-decode";
import {BehaviorSubject} from 'rxjs';



const Forgot = (props) => {
const [username,setUsername] = useState("")
const history = useHistory();




const handleSubmit = async(event)=>{
    event.preventDefault();
    console.log(username)

    if(username===""){
      alert("Please enter user email")
    }
  else{

    
    // Send confirmation code to user's email
    Auth.forgotPassword(username)
    .then(data => console.log(data))
    .catch(err =>alert(err.message));
  }

}


  
  return (
      <>
        <CRow style={{height:'105px'}}>
          <CCol className="col-2 bg-white"><img src={logo} style={{marginLeft:40,marginTop:10}} /> </CCol>
          <CCol className="bg-white col-10">  </CCol>
        </CRow>
        <CRow className="justify-content-center" style={{height:'80vh',justifyContent:'center'}} >
          <CCol md="4">
            <CCardGroup>
              <CCard style={{marginTop:125}} >
                <CCardHeader style={{height:70,justifyContent:'center'}}> 
                  <CRow style={{marginTop:15}} >

                  <CCol className="col-6"  style={{fontSize:14,textTransform:"uppercase",fontWeight:'600',color:'#242526'}}  >Glemt passord?</CCol>
                  <CCol className="col-4"></CCol>
                  <CCol className="col-2"><img src={logo} style={{width:40}} />   </CCol>
                  </CRow>
                </CCardHeader>
                <CCardBody>
                  <CForm>
                    <CFormGroup row className="my-0">
                      <CCol className="col-2" ></CCol>
                        <CCol xs="12" lg="8">
                        <CFormGroup>
                            <CLabel className="formlabel" style={{fontWeight:'600',fontSize:14,color:'#242526'}} >Epost*</CLabel>
                            {/* <CInput size="xl" type="text" placeholder="Natasha Panjkovic" name="date" className="formtext" /> */}
                            <CInput size="lg" type="text" name="input-large" className="input-lg" style={{height:50}} value={username}
                            onChange={(e)=>setUsername(e.target.value)} />
                        </CFormGroup>
                        </CCol>
                </CFormGroup>
 
                    <CFormGroup row className="my-0">
                      <CCol className="col-2" ></CCol>
                        <CCol xs="12" lg="8">
                        <CFormGroup>
                          <CRow  >
                        <CCol xs="12" sm="4"><CButton block className="outlineButton" 
                        style={{height:61,width:110, font:'Open Sans',fontWeight:'600',fontSize:'18px',color:'#2B2859'}} onClick={handleSubmit} >Sende inn</CButton></CCol>
                        <CCol xs="12" sm="4"><CButton block style={{height:61,font:'Open Sans',fontWeight:'600',fontSize:'18px',color:'#2B2859'}} color="link"
                        onClick={()=>setUsername('')}>Klar</CButton></CCol>
                          </CRow>
                        </CFormGroup>
                        </CCol>
                </CFormGroup>
                    <CFormGroup row className="my-0">
                      <CCol className="col-2" ></CCol>
                        <CCol xs="12" lg="8">
                        <CFormGroup>
                          <CRow  >
                          <Link to="/login">  <p style={ {font:'Open Sans',fontWeight:'400',fontSize:'14px',color:'#2C2C2C',marginLeft:20,textDecoration:'underline',lineHeight:'19px'}} >
                            Logg Inn</p> </Link>

                          </CRow>
                        </CFormGroup>
                        </CCol>
                </CFormGroup>

                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
   
    </>
  )
}

export default Forgot
