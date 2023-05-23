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
import usersData from '../users/UsersData'
import docu from '../all_icon/document.svg'
import search from '../all_icon/search.svg'
import '../style.css'
import Sideview from './Sideview';
Task.propTypes = {
    
};

function Task(props) {
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
                    <CCol xs="12" sm="6">
                      <CCard style={{border:'none'}}>
                          <CCardBody>
                          <p className="subhead">Bydels direktør strategisk mål</p>
                           <CFormGroup row className="my-0">
                              <CCol xs="12" sm="6" lg="4">
                                <CFormGroup>
                                <CLabel className="formlabel"> Ansvarlig avdeling * </CLabel>
                                   <CSelect  name="email" className="formtext">
                                    <option value="null">Helse og mestring </option>
                                    <option value="null">select email1 </option>

                                 </CSelect>
                                </CFormGroup>
                              </CCol>
                        </CFormGroup>
                        <CFormGroup row className="my-0">
                            <CCol xs="12" lg="5">
                            <CFormGroup>
                                <CLabel className="formlabel">Navn Mål*</CLabel>
                                <CInput type="text" placeholder="All skal kunne bo trygt i egnet hjem" name="date" className="formtext" />
                            </CFormGroup>
                            </CCol>
                            <CCol xs="6" lg="2">
                                <CFormGroup>
                                    <CLabel className="formlabel"> Prioritering * </CLabel>
                                    <CSelect  name="email" className="formtext">
                                    <option value="null">Høy</option>
                                    <option value="null">select email1 </option>
                                 </CSelect>
                                </CFormGroup>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row className="my-0">
                            <CCol xs="12" lg="7">
                            <CFormGroup>
                                <CLabel className="formlabel">Beskrivelse av mål *</CLabel>
                                <CTextarea 
                                    id="textarea-input" 
                                    rows="3"
                                    className="formtext"
                                    name="description"
                                    placeholder="Øke antall boliger til eldre med demens" 
                                    />
                            </CFormGroup>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row className="my-0">
                            <CCol xs="12" sm="6" lg="4">
                            <CFormGroup>
                                <CLabel className="formlabel">Periode  fra*</CLabel>
                                <CInput type="date" className="formtext" />
                            </CFormGroup>
                            </CCol>
                            <CCol xs="12" sm="6" lg="4">
                            <CFormGroup>
                                <CLabel className="formlabel">Budsjett *</CLabel>
                                <CInput type="text" className="formtext" />
                            </CFormGroup>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row className="my-0">
                            <CCol xs="12" sm="6" lg="10">
                                <CFormGroup>
                                    <CLabel className="formlabel">Eier * </CLabel>
                                        <Multiselect
                                        options={usersData} // Options to display in the dropdown
                                        // selectedValues={this.state.selectedList} // Preselected value to persist in dropdown
                                        onSelect={onSelect} // Function will trigger on select event
                                        onRemove={onRemove} // Function will trigger on remove event
                                        displayValue="name"// Property name to display in the dropdown options
                                        // className="formtext"
                                        />
                                </CFormGroup>
                                
                            </CCol>
                            <CCol xs="0" sm="1" lg="1">
                                <CFormGroup>
                                <img  htmlFor="mulselect" src={search} className="normalicon2 d-none d-sm-block"  alt="Logo" /> 
                                </CFormGroup>
                                </CCol>
                         </CFormGroup>
                     <CFormGroup row className="my-0">
                        <CCol xs="6" sm="3"><CButton block className="outlineButton">Opprett mål</CButton></CCol>
                        <CCol xs="6" sm="2"><CButton block className="outlineButton">Slett</CButton></CCol>
                        </CFormGroup>
                        </CCardBody>
                    </CCard>
                    </CCol>
                    <CCol xs="12" sm="6">
                        <Sideview/>
                    </CCol>
                </CRow>
            
        </>
    );
}

export default Task;