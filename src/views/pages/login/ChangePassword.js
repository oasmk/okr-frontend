import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
  CFormText,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import logo from '../../all_icon/logo.svg'
import {loginname} from '../../style'
import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import {BehaviorSubject} from 'rxjs';


const ChangePassword = (props) => {
  const [oldpass,setOldPass] = useState("")
  const [newpass,setNewPass] = useState("")
  const [confirmpass,setConfirm] = useState("")
  const [match,setMatch] = useState(false)

  const location = useLocation()
  

const handleSubmit = async(event)=>{
    event.preventDefault();
    const congitoUser = new BehaviorSubject(null);
    const user = location.state;


    if(oldpass===""){
      alert("Please enter temporary old password")
    }
    else if(newpass=="" || confirmpass===""){
      alert("Field cannot be empty")
    }
    else if(newpass!=confirmpass){
      alert("Confirm password should be same as new password")
    }

   else if(newpass===confirmpass){

    //  console.log("call")
     
                 Auth.signIn(user)
                      .then((data) => {
                        console.log(data)
                        // console.log(user)
                        congitoUser.next(data);
                        if (user) {
                          if (data.challengeName === 'NEW_PASSWORD_REQUIRED') {
                            console.log("in")

                            congitoUser.subscribe((value) => {
                              console.log("thsi value",value)
                              Auth.completeNewPassword(value, "Ravi@1234", [])
                                .then((data) => {
                                console.log(data);
                                })
                                .catch((err) => console.error('Error', err));
                            });
      
                         

                          } else {
                            console.log("out")
                            // this.router.navigateByUrl('/home');
                          }
                        }
                      });


     }

}



  
  return (

      <>
        <CRow style={{height:'105px'}}>
          <CCol className="col-2 bg-white"><img src={logo} style={{marginLeft:40,marginTop:10}} /> </CCol>
          <CCol className="bg-white col-10">  </CCol>
        </CRow>
        <CRow className="justify-content-center" style={{height:'80vh',justifyContent:'center',backgroundColor:'#E5E5E5'}} >
          <CCol md="4">
            <CCardGroup>
              <CCard style={{marginTop:125}} >
                <CCardHeader style={{height:70,justifyContent:'center'}}> 
                  <CRow style={{marginTop:15}} >

                  <CCol className="col-4" style={{fontSize:14,textTransform:"uppercase",fontWeight:'600'}} >Bytt passord</CCol>
                  <CCol className="col-6"></CCol>
                  <CCol className="col-2"><img src={logo} style={{width:40}} />   </CCol>
                  </CRow>
                </CCardHeader>
                <CCardBody>
                  <CForm>
                    <CFormGroup row className="my-0">
                      <CCol className="col-2" ></CCol>
                        <CCol xs="12" lg="8">
                        <CFormGroup>
                            <CLabel className="formlabel" style={{fontWeight:'600',fontSize:14}} >Nåværende passord *</CLabel>
                            {/* <CInput size="xl" type="text" placeholder="Natasha Panjkovic" name="date" className="formtext" /> */}
                            <CInput size="lg" type="text" name="input-large" className="input-lg" style={{height:50}} onChange={(e)=>setOldPass(e.target.value)} />
                            <span style={{flexDirection:'column'}}>
                            <span style={{color:'#FF383D',fontSize:11,fontWeight:'600'}} >Feil Passord   </span>
                             <span style={{color:'#2C2C2C',fontSize:14,fontWeight:'400',textDecoration:'underline',marginLeft:175}} >Glemt passord?</span>    
                            </span>
                        </CFormGroup>
                        </CCol>
                </CFormGroup>
                    <CFormGroup row className="my-0">
                      <CCol className="col-2" ></CCol>
                        <CCol xs="12" lg="8">
                        <CFormGroup>
                            <CLabel className="formlabel" style={{fontWeight:'600',fontSize:14}} >Nytt passord</CLabel>
                            {/* <CInput size="xl" type="text" placeholder="Natasha Panjkovic" name="date" className="formtext" /> */}
                            <CInput size="lg" type="password" name="input-large" className="input-lg" style={{height:50}} onChange={(e)=>setNewPass(e.target.value)} />
                            {newpass.length>7 &&  <p className="help-block" style={{color:'#2C2C2C',fontSize:11,fontWeight:'600'}}>Passord styrke: <span style={{color:'#FF383D',fontWeight:'600'}} > Svak</span></p> }
                        </CFormGroup>
                        </CCol>
                </CFormGroup>
                    <CFormGroup row className="my-0">
                      <CCol className="col-2" ></CCol>
                        <CCol xs="12" lg="8">
                        <CFormGroup>
                            <CLabel className="formlabel" style={{fontWeight:'600',fontSize:14}} >Skriv inn nytt passord</CLabel>
                            {/* <CInput size="xl" type="text" placeholder="Natasha Panjkovic" name="date" className="formtext" /> */}
                            <CInput size="lg" type="password" name="input-large" className="input-lg" style={{height:50}} onChange={(e)=>setConfirm(e.target.value)} />
                         {newpass===confirmpass && newpass!="" && <p className="help-block" style={{color:'#589B11',fontSize:11,fontWeight:'600'}}> Passordmatch</p> }
                        </CFormGroup>
                        </CCol>
                </CFormGroup>





                    <CFormGroup row className="my-0">
                      <CCol className="col-2" ></CCol>
                        <CCol xs="12" lg="8">
                        <CFormGroup>
                          <CRow  >
                        <CCol xs="12" sm="3"><CButton block className="outlineButton" 
                        style={{height:61,width:85, font:'Open Sans',fontWeight:'600',fontSize:'18px',color:'#2B2859'}} onClick={handleSubmit} >Lagre</CButton></CCol>
                        <CCol xs="12" sm="3"><CButton block style={{height:61,width:71,font:'Open Sans',fontWeight:'600',fontSize:'18px',color:'#2B2859'}}>Klar</CButton></CCol>
                          </CRow>
                        </CFormGroup>
                        </CCol>
                </CFormGroup>
                    <CFormGroup row className="my-0">
                      <CCol className="col-2" ></CCol>
                        <CCol xs="12" lg="8">
                        <CFormGroup>
                          <CRow  >
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

export default ChangePassword
