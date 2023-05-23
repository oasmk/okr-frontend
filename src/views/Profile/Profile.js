import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
    CButton,
    CCard,
    CCardBody,
    CLabel,
    CCol,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CFormGroup,

    CSelect,
    CRow,
    // CFormGroup,
    // CLabel,

    CTextarea,
    CInput,
 
    
  } from '@coreui/react'
  import calender from '../all_icon/calender.svg'

const myurl = 'https://5.imimg.com/data5/DB/JO/GLADMIN-70100492/admin-login-portal-500x500.png';
function Profile(props) {
   const wrapper =  useRef(null);
   const [image,setImage] = useState({
       imageFile:{},
       fileUrl:myurl
   })
   useEffect(()=>{
       wrapper.current.style.background = 'url('+image.fileUrl+')'
       wrapper.current.style.backgroundSize = 'cover'

   },[image])



    return (
        <>
        <CRow>
            <CCol xs="12">
                <CCard style={{border:'none'}}>
                    <CCardBody>
                    <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <div  className="wrapper"  ref={wrapper} > 
                                <input type="file" className="my_file"
                                 onChange={(e)=>{
                                     setImage({imageFile: e.target.files[0],fileUrl: URL.createObjectURL(e.target.files[0])    });

                                     }} />
                            </div>
                        
                    
                        </CCol>
                </CFormGroup>
                    <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                        <CFormGroup>
                            <CLabel className="formlabel">Navn *</CLabel>
                            <CInput type="text" placeholder="Natasha Panjkovic" name="date" className="formtext" />
                        </CFormGroup>
                        </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                    <CCol xs="6" lg="2">
                        <CFormGroup>
                            <CLabel className="formlabel">Ansatt ID * </CLabel>
                            <CInput type="text" placeholder="12345" className="formtext" />
                        </CFormGroup>
                    </CCol>
                </CFormGroup>

                <CFormGroup row className="my-0">
                    <CCol xs="6" lg="2">
                        <CFormGroup>
                            <CLabel className="formlabel">Betegnelse </CLabel>
                            <CSelect  name="email" className="formtext">
                            <option value="null">Direktør</option>
                            <option value="null">select email1 </option>
                            </CSelect>
                        </CFormGroup>
                    </CCol>
                    <CCol xs="6" lg="2">
                        <CFormGroup>
                            <CLabel className="formlabel"> Avdeling </CLabel>
                            <CSelect  name="email" className="formtext">
                            <option value="null">Ackiv</option>
                            <option value="null">select email1 </option>
                            </CSelect>
                        </CFormGroup>
                    </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                        <CFormGroup>
                            <CLabel className="formlabel">E-post *</CLabel>
                            <CInput type="text" placeholder="natasha.panjkovic@kommune.no" name="date" className="formtext" />
                        </CFormGroup>
                        </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                            <CCol xs="12" sm="6" lg="2">
                                <CFormGroup>
                                    <CLabel className="formlabel">Fødselsdato</CLabel>
                                    <CInput type="date" className="formtext" placeholder="Natasha Panjkovic|" />
                                </CFormGroup>
                            </CCol>
                            <CCol xs="0" sm="1" lg="1">
                                <CFormGroup>
                                <img  htmlFor="mulselect" src={calender} className="normalicon2 d-none d-sm-block"  alt="Logo" /> 
                                </CFormGroup>
                                </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                        <CCol xs="12" sm="1"><CButton block className="outlineButton" >Opprett</CButton></CCol>
                        <CCol xs="12" sm="1"><CButton block className="outlineButton">Slett</CButton></CCol>

                     </CFormGroup>

                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
            
        </>
    );
}

export default Profile;