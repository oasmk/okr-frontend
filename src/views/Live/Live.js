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
import '../style.css'
Live.propTypes = {
    
};

function Live(props) {
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
                                <CLabel className="formlabel"> Ansvarlig avdeling * </CLabel>
                                   <CSelect  name="email" className="formtext">
                                    <option value="null">Helse og mestring </option>
                                    <option value="null">select email1 </option>

                                 </CSelect>
                                </CFormGroup>
                              </CCol>
                        </CFormGroup>
                           <CFormGroup row className="my-0">
                              <CCol xs="12" sm="6" lg="4">
                                <CFormGroup>
                                <CLabel className="formlabel"> Velg kategori (Strategi, Mål)*</CLabel>
                                   <CSelect  name="email" className="formtext">
                                    <option value="null">Strategi</option>
                                    <option value="null">select email1 </option>
                                 </CSelect>
                                </CFormGroup>
                              </CCol>
                        </CFormGroup>
                        <CFormGroup row className="my-0">
                            <CCol xs="12" lg="5">
                            <CFormGroup>
                                <CLabel className="formlabel">Navn *</CLabel>
                                <CInput type="text" placeholder="All skal kunne bo trygt i egnet hjem" name="date" className="formtext" />
                            </CFormGroup>
                            </CCol>
                            <CCol xs="6" lg="2">
                                <CFormGroup>
                                    <CLabel className="formlabel">Status * </CLabel>
                                    <CSelect  name="email" className="formtext">
                                    <option value="null">Strategi</option>
                                    <option value="null">select email1 </option>
                                 </CSelect>
                                </CFormGroup>
                            </CCol>
                            <CCol xs="6" lg="2">
                                <CFormGroup>
                                    <CLabel className="formlabel"> Prioritering * </CLabel>
                                    <CSelect  name="email" className="formtext">
                                    <option value="null">Strategi</option>
                                    <option value="null">select email1 </option>
                                 </CSelect>
                                </CFormGroup>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row className="my-0">
                            <CCol xs="12" lg="7">
                            <CFormGroup>
                                <CLabel className="formlabel">Beskrivelse *</CLabel>
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
                                <CLabel className="formlabel">Periode til*</CLabel>
                                <CInput type="date" className="formtext" />
                            </CFormGroup>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row className="my-0">
                            <CCol xs="12" sm="6" lg="4">
                                <CFormGroup>
                                    <CLabel className="formlabel">Eier * </CLabel>
                                        <Multiselect
                                        options={usersData} // Options to display in the dropdown
                                        // selectedValues={this.state.selectedList} // Preselected value to persist in dropdown
                                        onSelect={onSelect} // Function will trigger on select event
                                        onRemove={onRemove} // Function will trigger on remove event
                                        displayValue="name"// Property name to display in the dropdown options
                                        className="formtext"
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
                            <CCol xs="12" sm="6" lg="4">
                                <CFormGroup>
                                    <CLabel className="formlabel">Ansvarlig Avdelingsleder * </CLabel>
                                        <Multiselect
                                        options={usersData} // Options to display in the dropdown
                                        // selectedValues={this.state.selectedList} // Preselected value to persist in dropdown
                                        onSelect={onSelect} // Function will trigger on select event
                                        onRemove={onRemove} // Function will trigger on remove event
                                        displayValue="name"// Property name to display in the dropdown options
                                        />  
                                </CFormGroup>
                            </CCol>
                                <CCol xs="0" sm="1" lg="1">
                                <CFormGroup>
                                <img  htmlFor="mulselect" src={search} className="normalicon2 d-none d-sm-block"  alt="Logo" /> 
                                </CFormGroup>
                                </CCol>
                         </CFormGroup>
                    <CFormGroup >
                        <CLabel className="formlabel">Last opp dokumenter</CLabel>. 
                        <CCol xs="12" sm="6" lg="3">
                        <input type="file" name="file" id="file" multiple className="inputfile" 
                        onChange={(e)=> setFiles({
                            file1: e.target.files[0],
                            file2: e.target.files[1]
                            })  } />
                          <label htmlFor="file"> &nbsp; documents 
                          <img style={{marginLeft:'150px'}} src={docu} className="normalIcon" alt="Logo" /></label>
                          <p >{document.file1 && <span> {document.file1.name}</span> }, 
                        
                        &nbsp;{document.file2 && <span> {document.file2.name}</span> }</p>
                        </CCol>
                     </CFormGroup> 
                     <CFormGroup row className="my-0">
                        <CCol xs="6" sm="1"><CButton block className="outlineButton">Lagre</CButton></CCol>
                        <CCol xs="6" sm="1"><CButton block className="outlineButton">Avbryt</CButton></CCol>
                        </CFormGroup>
                        </CCardBody>
                    </CCard>
                    </CCol>
                </CRow>
            
        </>
    );
}

export default Live;