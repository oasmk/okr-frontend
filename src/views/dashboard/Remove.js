import React,{useState} from 'react';
import PropTypes from 'prop-types';
import CIcon from '@coreui/icons-react'
import deleteIcon from '../all_icon/delete.svg'
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

Remove.propTypes = {
    
};

function Remove(props) {
    const [modal, setModal] = useState(false)
    return (
        <>
                   <CIcon src={deleteIcon} className="normalIcon" alt="Logo" onClick={() => setModal(!modal)} />
        <CModal 
              show={modal} 
              onClose={setModal}
              style={{marginTop:'350px'}}
            >
              <CModalHeader closeButton style={{border:'none'}}>
                <CModalTitle> <p>Strategi, Tiltak og mål</p></CModalTitle>
              </CModalHeader>
                   <CModalBody>
                   <CFormGroup row className="my-0">
                   <CCol xs="12" lg="12">
                        <CFormGroup>
                       <p>Are you sure do you want to delete this Titak?</p>
                        
                        </CFormGroup>
                        </CCol>
                     </CFormGroup>
                <CFormGroup row className="my-0">
                          <CCol xs="12" sm="3"><CButton block className="outlineButton">Yes</CButton></CCol>
                        <CCol xs="12" sm="3"><CButton block className="outlineButton"  onClick={() => setModal(false)}>Cancel</CButton></CCol>
                </CFormGroup>
                 </CModalBody>

            </CModal>
            
        </>
    );
}

export default Remove;