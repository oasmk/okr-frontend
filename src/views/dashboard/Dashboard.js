import React, { lazy,useState,createRef, useEffect} from 'react'
import axios from 'axios'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// import MainChartExample from '../charts/MainChartExample.js'
// import { tablehead, tablepara, tabletitle } from '../style.js'
import Edit from '../Stretgry/Edit'
import Remove from './Remove'
import rightarrow from '../all_icon/rightarrow.svg'
import downarrow from '../all_icon/downarrow.svg'
// import usersData from '../users/UsersData'
import { element } from 'prop-types'
import { tablehead, tablepara,tabletitle,talerow } from '../style.js'
import {getObjective} from '../config'


// const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
// const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  const [visible, setVisible] = useState(false)
  const [show, setArrow] = useState(true)
  const [data,setData]  = useState([])





 
useEffect(()=>{

  const token = localStorage.getItem('token');
  
  // const token = "eyJraWQiOiJtNGdxT01qdWN5Yys5MkViKzN6cExWRFVNU2FiYndOeTl2OXpzakZGR3ZBPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJmOTAxNTdjYi01MTVkLTQwMDQtYmExMi05MmQ2YTkwN2FjNzkiLCJldmVudF9pZCI6IjMxZjU4OGExLTVlNjMtNGZiYy05NzQyLWM5NGI2ZGExMzFlNCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MTkzNjI4OTEsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX2h0RzFnUFpTViIsImV4cCI6MTYxOTM2NjQ5MSwiaWF0IjoxNjE5MzYyODkxLCJqdGkiOiIyMTEzZWE1Mi1mNzUwLTQxZjMtODE0Ny1jMjgyYjU4NzQwZDIiLCJjbGllbnRfaWQiOiI2MGk1OGN2NDViMGNrNHJvbmpkZTZlMWtidiIsInVzZXJuYW1lIjoib2phc21hamdhb25rYXI0NDVAZ21haWwuY29tIn0.MrZt4kZNda0lcvrBZFVikxrKqrRMGNzadxClWUka2g9ClFV6Xfohdl_FcJKk9sTvswx9WNOI8DGvrY8vJm-eFa6nmYAVFUYedMUnS-GkwgSYjdGYoGPsYU7dveKteOdNaPv7OCAlspL-lFNShXNwfhVpsfTqqOGFZhP4R9xMLwvtE-5GXFHrxnToS6Ys7uzJv8qIX9G0F6Z9_V5a2ApBEv48godghTIaiG9q1EG7YIGeyxC0wOjNOmJlTIHYqmauMifj_0ETO3qnsMc94I2SARk6ooop81AX1D-WhmddOmiiMlEFhS08y0a0_8LALCH8tm-tCSxMlXXErYjDUCmsBQ"
  axios.get(getObjective,{headers: {  Authorization: token  }})
  .then((res) => setData(res.data))
  .catch(error => console.log("Error detected: " + error)) ;
},[])



// console.log(data     )






  const selectRow  = createRef(null);
  // const [userList,setUser] = useState([]);
  // console.log(usersData)

const element =`<td >
                  &nbsp; &nbsp; &nbsp; &nbsp; my data Lorem ipsum dolor sit amet</td>
                <td >Høy</td>
                <td >Aktiv</td>
                <td>01/03/2020</td>
                <td>01/09/2020</td>
                <td>Natasha Panjkovic</td>
                <td >  <CProgress
                      className="progress-xs mt-2"
                      precision={1}
                
                      color="success"
                      value={40}
                    />
                  <span >40%</span> </td>
                <td>
                   
                </td>
              </tr>`

 

// console.log(showElement)
// var test = [];
// test.push(<p>hello</p>)

// selectRow.current.parentNode.appendChild('tr');
// fe
// console.log(show)
const showMore =(event)=>{
  
  // console.log(event.target.parentElement.nextSibling)
  
  if(show){
    event.target.firstChild.src = downarrow
    event.target.parentElement.nextSibling.innerHTML = element  
  }
  else{
    event.target.firstChild.src = rightarrow
    event.target.parentElement.nextSibling.remove()
    
  }
  
  setArrow(!show)
  
}


  return (
    <>
    <CRow>
        <CCol xs="3"><p className="mainhead">Strategi, Tiltak og mål</p>  </CCol>
        <CCol xs="8"></CCol>
        <CCol xs="1"> <CButton block className="outlineButton" to="/create" style={{width:131,height:49,color:'#2B2859',fontSize:18,fontWeight:'600',float:'right'}} >Ny mål</CButton></CCol>
    </CRow>

     <CRow>
        <CCol>
          <CCard className="mb-0 mt-2 shadow " >
          
                <table className="table px-2 " >
                <thead className="tablehead"  style={{border:'2px solid white'}} >
                        <tr >
                          <th>Strategi</th>
                          <th>Prioritering</th>
                          <th>Status</th>
                          <th>Startdato</th>
                          <th>Sluttdato</th>
                          <th>Eier</th>
                          <th>% Fullført</th>       
                          <th ></th>
                          <th >Handling</th>
                        </tr>
                      </thead>
                      <tbody className="tablepara " ref={selectRow} id="accesspoint">
      
                        {data.map((list,index)=>( 
                        <tr  key={index} >  
                            <td onClick={(e)=>showMore(e)} style={{fontSize:13,fontWeight:'700',textDecoration:'underline'}} >
                              <img src={rightarrow}/> {list.name} </td>
                            <td>{list.priority}</td>
                            <td >{list.status}</td>
                            <td>{list.start_timestamp}</td>
                            <td>{list.end_timestamp}</td>
                            <td>{list.assigned_to_names}</td>
                            <td style={{flexDirection:'row'}}> 
                             <CProgress
                                  className="progress-xs mt-2"
                                  precision={2}
                                  color="success"
                                  value={list.completion_percentage}
                                  // style={{width:'50%'}}
                                />
                                </td>
                              <td>
                              <span >{list.completion_percentage}% </span>

                              </td>
                            <td>
                                <CRow>
                                  <CCol sm="1"> <Edit/></CCol>
                                  <CCol sm="1"><Remove /></CCol>
                                </CRow>
                            </td>   
                          </tr>

                          ))}
                          </tbody>
                    </table>
             
              </CCard>
        </CCol>
      </CRow>
      <br/><br/>
    </>
  )
}

export default Dashboard
