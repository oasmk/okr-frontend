import React from 'react';
import PropTypes from 'prop-types';
import { CCol, CRow } from '@coreui/react';
import admin from '../all_icon/landing/admin.svg'
import desdir from '../all_icon/landing/desdir.svg'
import health from '../all_icon/landing/health.svg'
import section from '../all_icon/landing/section.svg'
import manager from '../all_icon/landing/manager.svg'
import header from '../all_icon/landing/header.svg'


Landing.propTypes = {
    
};

function Landing(props) {
    return (
        <div style={{background: '#FBFBFB',height:'100vh'}}>
        <CRow className="border">
            
            <img src={header} style={{width:'100%'}}/>
        </CRow>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <CRow >
            <CCol xs="12" lg="1"></CCol>
            <CCol xs="12" lg="2"> <img src={admin} /></CCol>
            <CCol xs="12" lg="2"> <img src={desdir} /></CCol>
            <CCol xs="12" lg="2"> <img src={health} /></CCol>
            <CCol xs="12" lg="2"> <img src={section} /></CCol>
            <CCol xs="12" lg="2"> <img src={manager} /></CCol>
            <CCol xs="12" lg="1"></CCol>
        </CRow>
            
        </div>
    );
}

export default Landing;