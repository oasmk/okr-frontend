import React from 'react';
import PropTypes from 'prop-types';
import {
    CBadge,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CRow,
    CCollapse,
    CFade,
    CSwitch,
    CLink
  } from  '@coreui/react'
  import CIcon from '@coreui/icons-react'
  import red from '../all_icon/red.svg'

const Sideview = props => {
    return (
        <>
                  <CCard accentColor="danger">
              <CCardHeader className="subhead">
              Navn Mål <CBadge shape="pill" style={{background:'#1E43AA',color:'white'}} >80%</CBadge>
                <div className="card-header-actions">

                  <CLink className="card-header-action">
                    <CIcon name='cil-chevron-top' />
                  </CLink>
                  <CLink className="card-header-action" >
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
                <CCardBody className="formtext">
                    <div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </div>
                    <br/>
                    <div className="row" style={{background:'#FBFBFD'}}>
                        <div className="col-4"><p className="formtext"><img src={red}/>&nbsp; Prioritering: Aktiv</p></div>
                        <div className="col-4"></div>
                        <div className="col-4"><p className="formtext">Budsjett: <b> 10000</b></p></div>
                        <div className="col-4"></div>
                    </div>
                    <p className="lighttext">Eier</p>
                    <div className="row">
                        <div className="col-7"><p className="formtext">Avdelingsdirektør "admnistrasjonsavdeling"</p></div>
                        <div className="col-1"></div>
                        <div className="col-4"><p className="documentpara">2 kommentarer</p></div>
                    </div>
                </CCardBody>
            </CCard> 
        </>
    );
};

Sideview.propTypes = {
    
};

export default Sideview;