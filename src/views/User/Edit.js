import React,{useState} from 'react';
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

    CSelect,
    CRow,
    CFormGroup,
    CTextarea,
    CInput,
 
    
  } from '@coreui/react'
  import search from '../all_icon/search.svg'
  import CIcon from '@coreui/icons-react'
import editIcon from '../all_icon/edit.svg'

Edit.propTypes = {
    
};

function Edit(props) {
    const [modal, setModal] = useState(false)
    return (
        <>
         <CIcon src={editIcon} className="normalIcon" alt="Logo" onClick={() => setModal(!modal)} />
        <CModal 
              show={modal} 
              onClose={setModal}
            >
              <CModalHeader closeButton style={{border:'none'}}>
                <CModalTitle>  <p className="subhead">Endre brukerinformasjon</p></CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CFormGroup row className="my-0">
                        <CCol xs="12" lg="12">
                        <CFormGroup>
                            <CLabel className="formlabel">Navn *</CLabel>
                            <CInput type="text" placeholder="Natasha Panjkovic" name="date" className="formtext" />
                        </CFormGroup>
                        </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                    <CCol xs="6" lg="6">
                        <CFormGroup>
                            <CLabel className="formlabel">Ansatt ID * </CLabel>
                            <CInput type="text" placeholder="12345" className="formtext" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="6" lg="6">
                        <CFormGroup>
                            <CLabel className="formlabel"> Status * </CLabel>
                            <CSelect  name="email" className="formtext">
                            <option value="null">Ackiv</option>
                            <option value="null">select email1 </option>
                            </CSelect>
                        </CFormGroup>
                    </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                        <CCol xs="12" lg="12">
                        <CFormGroup>
                            <CLabel className="formlabel">E-post *</CLabel>
                            <CInput type="text" placeholder="natasha.panjkovic@kommune.no" name="date" className="formtext" />
                        </CFormGroup>
                        </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                    <CCol xs="6" lg="6">
                        <CFormGroup>
                            <CLabel className="formlabel">Betegnelse </CLabel>
                            <CSelect  name="email" className="formtext">
                            <option value="null">Direktør</option>
                            <option value="null">select email1 </option>
                            </CSelect>
                        </CFormGroup>
                    </CCol>
                    <CCol xs="6" lg="6">
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
                            <CCol xs="12" sm="6" lg="8">
                                <CFormGroup>
                                    <CLabel className="formlabel">Veileder</CLabel>
                                    <CInput type="text" className="formtext" placeholder="Natasha Panjkovic|" />
                                </CFormGroup>
                            </CCol>
                            <CCol xs="0" sm="1" lg="1">
                                <CFormGroup>
                                <img  htmlFor="mulselect" src={search} className="normalicon2 d-none d-sm-block"  alt="Logo" /> 
                                </CFormGroup>
                                </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                          <CCol xs="12" sm="3"><CButton block className="outlineButton">Lagre</CButton></CCol>
                        <CCol xs="12" sm="3"><CButton block className="outlineButton"  onClick={() => setModal(false)}>Avbryt</CButton></CCol>
                </CFormGroup>
              </CModalBody>

            </CModal>
            
        </>
    );
}

export default Edit;