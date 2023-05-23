import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CSelect,
    CModalHeader,
    CModalTitle,
    CRow,
    CFormGroup,
    CTextarea,
    CInput,
    CLabel
  } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Multiselect } from 'multiselect-react-dropdown';
// import usersData from '../users/UsersData'
import docu from '../all_icon/document.svg'
import search from '../all_icon/search.svg'
import green from '../all_icon/green.svg'
import red from '../all_icon/red.svg'
import file from '../all_icon/file.svg'
import '../style.css'
View.propTypes = {
    
};

function View(props) {
    const [document,setFiles] = useState({file1:{},file2:{}})
    console.log(document)

 const   onSelect = (selectedList, selectedItem) => {
        console.log(selectedList)
   }
   
  const onRemove = (selectedList, removedItem)=> {
       //  this.setState({final:selectedList})  
       // console.log(selectedList,removedItem)
       // var rst = this.state.remove_student;
       // rst += ","+removedItem.id.toString();
       // this.setState({remove_student: rst})

   }
   
    return (
        <>
        <CRow>
                    <CCol>
                      <CCard style={{border:'none'}}>
                          <CCardBody>
                          <p className="subhead">All skal kunne bo trygt i egnet hjem</p>
                           <CFormGroup row className="my-0">
                              <CCol xs="12" sm="6" lg="4">
                                <CFormGroup>
                                <CLabel className="formlabel1"> Ansvarlig avdeling</CLabel>
                                   <p className="formtext">Helse og mestring</p>
                                </CFormGroup>
                              </CCol>
                        </CFormGroup>
                        <CFormGroup row className="my-0">
                            <CCol xs="4" lg="2">
                            <CFormGroup>
                                <CLabel className="formlabel1">Kategori</CLabel>
                                <p className="formtext">Strategi</p>
                            </CFormGroup>
                            </CCol>
                            <CCol xs="4" lg="2">
                                <CFormGroup>
                                    <CLabel className="formlabel1">Status</CLabel>
                                    <p className="formtext"><img src={green}/> Aktiv</p>
                                </CFormGroup>
                            </CCol>
                            <CCol xs="4" lg="2">
                                <CFormGroup>
                                    <CLabel className="formlabel1"> Prioritering </CLabel>
                                    <p className="formtext"><img src={red}/> Aktiv</p>
                                </CFormGroup>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row className="my-0">
                            <CCol xs="12" lg="7">
                            <CFormGroup>
                                <CLabel className="formlabel1">Beskrivelse</CLabel>
                                <p className="formtext">Øke antall boliger til eldre med demens</p>
                            </CFormGroup>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row className="my-0">
                            <CCol xs="12" sm="6" lg="4">
                            <CFormGroup>
                                <CLabel className="formlabel1">Periode  fra</CLabel>
                                <p className="formtext">1.3.20 til 31.12.20</p>
                            </CFormGroup>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row className="my-0">
                            <CCol xs="12" sm="6" lg="4">
                                <CFormGroup>
                                    <CLabel className="formlabel1">Eier</CLabel>
                                    <p className="formtext">Natasha Panjkovic</p>
                                </CFormGroup>
                                
                            </CCol>
                         </CFormGroup>
                    <CFormGroup >
                        <CLabel className="formlabel1">dokumenter</CLabel>
                        <p> <img src={file}/> <span  className="documentpara">Natasha Panjkovic</span></p>
                     </CFormGroup> 

                </CCardBody>
            </CCard>
            </CCol>
        </CRow>
            
        </>
    );
}

export default View;