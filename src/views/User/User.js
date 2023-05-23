import React, { lazy,useState,useEffect} from 'react'
import axios from 'axios'
import {
  CBadge,
  CButton,
  CFormGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol, 
  CCollapse,
  CProgress,
  CRow,
  CInput,
  CLabel
  
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// import MainChartExample from '../charts/MainChartExample.js'
// import { tablehead, tablepara, tabletitle } from '../style.js'
import New from './Create'
import Edit from './Edit'
import Remove from '../Stretgry/Remove'
import rightarrow from '../all_icon/rightarrow.svg'
import downarrow from '../all_icon/downarrow.svg'
// import usersData from '../users/UsersData'
import { element } from 'prop-types'
import search from '../all_icon/search.svg'
import Create from '../Stretgry/Create.js'
import { getUser } from '../config.js'



// const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
// const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const User = () => {
  const [data,setData]  = useState([])


  

useEffect(()=>{
  const token = localStorage.getItem('token');
   axios.get(getUser,{headers: {  Authorization: token  }})
  .then((res) => setData(res.data))
  .catch(error => console.log("Error detected: " + error)) ;
},[])

  return (
    <>
    <CRow>
        <CCol xs="3"><p className="mainhead" style={{fontSize:24,color:'#2B2859'}} >Administrere brukere</p>  </CCol>
        <CCol xs="8"></CCol>
        {/* <CCol xs="1"> <CButton block className="outlineButton">Ny mål</CButton></CCol> */}
    </CRow>

     <CRow>
        <CCol>
          <CCard className="mb-0" >
                <CCardBody>
                <CFormGroup row className="my-0">
                        <CCol xs="6" sm="1"><New /></CCol>
                       
                </CFormGroup>
                <br/>
                <p className="subhead" style={{color:'#2B2859',fontSize:24,fontWeight:'600'}} >Administrere brukere</p>
                <CFormGroup row className="my-0">
                            <CCol xs="12" sm="6" lg="3">
                                <CFormGroup>
                                    <CLabel className="formlabel">Søk </CLabel>
                                    <CInput type="text" className="formtext" style={{height:50}} />
                                </CFormGroup>
                            </CCol>
                            <CCol xs="0" sm="1" lg="1">
                                <CFormGroup>
                                <img  htmlFor="mulselect" src={search} className="normalicon2 d-none d-sm-block"  alt="Logo" style={{marginLeft:-10,marginTop:5}} /> 
                                </CFormGroup>
                                </CCol>
                </CFormGroup>
                <table className="table table-striped ">
                <thead className="tablehead" style={{border:'2px solid white'}} >
                        <tr>
                          <th>Brukernavn</th>
                          <th>Ansatt ID</th>
                          <th>Status</th>
                          <th>E-post</th>
                          <th>Rolle</th>
                          <th>Avdeling</th>
                          <th>Veileder</th>     
                          <th >Handling</th>
                        </tr>
                      </thead>
                      <tbody className="tablepara" >
      
                        {data.map((list,index)=>(
                        <tr  key={index} >  
                            <td className="usertitle">{list.first_name} {list.last_name}</td>
                            <td>{list.department_id}</td>
                            <td>{list.is_active?'Aktiv':'Inaktiv'} </td>
                            <td>{list.email} </td>
                            <td>{list.role}</td>
                            <td>{list.department_name}</td>
                            <td>Natasha Panjkovic</td>
                            <td>
                                <CRow className="align-items-center row">
                                  <CCol sm="1"> <Edit/></CCol>
                                  {/* <CCol sm="1"><Remove /></CCol> */}
                                </CRow>
                            </td>   
                          </tr>

                          ))}
                          </tbody>
                    </table>
                  </CCardBody>
              </CCard>
        </CCol>
      </CRow>


      <br/><br/>
     
    </>
  )
}

export default User
