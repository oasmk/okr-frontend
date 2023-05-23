import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
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
import back from '../all_icon/back.svg'
import '../style.css'
import { getDepartment,postObjective } from '../config';



class Create extends Component{
    constructor(props){
        super(props)
        this.state={
            departmentList:[]
        }
    }

handleChange=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
        [name]: value
    })
} 


onSelect = (selectedList, selectedItem) => {
    console.log(selectedList)
}

onRemove = (selectedList, removedItem)=> {
    //  this.setState({final:selectedList})  
    // console.log(selectedList,removedItem)
    // var rst = this.state.remove_student;
    // rst += ","+removedItem.id.toString();
    // this.setState({remove_student: rst})

   }
   componentDidMount(){
       const token = localStorage.getItem('token');
       axios.get(getDepartment,{headers: {  Authorization: token  }})
       .then((res) => this.setState({departmentList:res.data}))
       .catch(error => console.log("Error detected: " + error)) ;
    }
    
    handleSubmit=()=>{
        // const mytoken = "eyJraWQiOiJTVUI0UnJqUkx2T21tXC9DS3FWbGZKNDFhd1REVml3SmRSZWZjdGFTeVwvSWM9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJmOTAxNTdjYi01MTVkLTQwMDQtYmExMi05MmQ2YTkwN2FjNzkiLCJhdWQiOiI2MGk1OGN2NDViMGNrNHJvbmpkZTZlMWtidiIsImV2ZW50X2lkIjoiMzFmNTg4YTEtNWU2My00ZmJjLTk3NDItYzk0YjZkYTEzMWU0IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MTkzNjI4OTEsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX2h0RzFnUFpTViIsImNvZ25pdG86dXNlcm5hbWUiOiJvamFzbWFqZ2FvbmthcjQ0NUBnbWFpbC5jb20iLCJwaG9uZV9udW1iZXIiOiIrOTE5ODUwNDQ0NDEyIiwiZXhwIjoxNjE5MzY2NDkxLCJjdXN0b206cm9sZSI6IkJ5ZGVsIERpcmVjdG9yIiwiaWF0IjoxNjE5MzYyODkxLCJlbWFpbCI6Im9qYXNtYWpnYW9ua2FyNDQ1QGdtYWlsLmNvbSJ9.OZuO4T5x-6gATkl_hjc3IUWgK7lEh_UqXqYxMOQEOuJiOn4PwGjHB2Wdr3zVr_L8SD0wJhq3yM7pIWa7oxHwYPo6liOkYhiBxkThoSjQ_U1at_nCKrVkG7QxDiPXkDczH65ZDLQtFhLV5oiGBEM0nDsHnmKEaLu1pQ6Z-VmWDjXNX7ImS8lIuALtUVpT_bbsRr7nTn9_uAIVuoJA1pQuQDNXCCiYzP2SPDjLpI1otrDx2kzD6FLpi6Rza64gLD21veu1g62U-YmEl2P3IkQFUdj8xrR5B2MUDDj49Aamds6AVNChnGnt74ZhSfEjDAxx5S0HDMiVt5m_PHN3ctKYUg"
        // localStorage.setItem('token', mytoken);
        const token = localStorage.getItem('token');

        // console.log(token)

        const postReq = {

            "name": this.state.name,
            "description": this.state.description,
            // "department": parseInt(this.state.department),
            "category": this.state.category,
            "priority": this.state.priority,
            "status": this.state.status,
            "creator_id": "1",
            "creator_name": "Ojas",
            "completion_percentage": 0.0,
            "assigned_to_ids": "3, 5",
            "assigned_to_names": "Ravi, Prateek" 
        }
       console.log(postReq)
      
       axios.post(postObjective,postReq,{headers: {  Authorization: token  }})
       .then((res) => {
           if(res.status===201){
               alert("create successfully")
           }
       })
       .catch(error => console.log("Error detected: " + error)) ;
    }
   render(){
   
    return (
        <>
        <span><p style={{color:'#2B2859',fontSize:14,fontWeight:'400'}} ><img src={back} /> Tilbake</p>  </span>
        <p style={{color:'#2B2859',fontSize:24,fontWeight:'600'}} >Opprette strategi og mål</p>
        <CRow>
                    <CCol>
                      <CCard style={{border:'none'}}>
                          <CCardBody>
                          <p className="" style={{color:'#2B2859',fontWeight:'700',fontSize:16}} >Bydels direktør strategisk mål</p>
                           <CFormGroup row className="my-0">
                              <CCol xs="12" sm="6" lg="3">
                                <CFormGroup>
                                <CLabel className="formlabel"> Ansvarlig avdeling <span style={{color:'red'}}>*</span></CLabel>
                                   <CSelect  name="department" className="formtext" style={{height:50}} onChange={this.handleChange} >
                                    <option value={1}>Helse og mestring </option>
                                    <option value={2}>Ikke lenke til noen strategi </option>

                                 </CSelect>
                                </CFormGroup>
                              </CCol>
                        </CFormGroup>
                           <CFormGroup row className="my-0">
                              <CCol xs="12" sm="6" lg="3">
                                <CFormGroup>
                                <CLabel className="formlabel"> Velg kategori (Strategi, Mål) <span style={{color:'red'}}>*</span></CLabel>
                                   <CSelect  name="category" className="formtext"  style={{height:50}} onChange={this.handleChange} >
                                    <option value="Strategy">Strategi</option>
                                    <option value="Mal">Mål </option>
                                    {/* <option value="Tiltak">Mål </option> */}
                                 </CSelect>
                                </CFormGroup>
                              </CCol>
                        </CFormGroup>
                        <CFormGroup row className="my-0">
                            <CCol xs="12" lg="4">
                            <CFormGroup>
                                <CLabel className="formlabel">Navn <span style={{color:'red'}}>*</span></CLabel>
                                <CInput type="text"  style={{height:50}} name="name" className="formtext" onChange={this.handleChange} />
                            </CFormGroup>
                            </CCol>
                            <CCol xs="6" lg="2">
                                <CFormGroup>
                                    <CLabel className="formlabel">Status <span style={{color:'red'}}>*</span> </CLabel>
                                    <CSelect  name="status" className="formtext"  style={{height:50}} onChange={this.handleChange} >
                                    <option value="Active">Aktiv</option>
                                    <option value="Disabled">Inaktiv</option>
                                    {/* <option value="hold">På vent</option> */}
                                 </CSelect>
                                </CFormGroup>
                            </CCol>
                            <CCol xs="6" lg="2">
                                <CFormGroup>
                                    <CLabel className="formlabel"> Prioritering <span style={{color:'red'}}>*</span> </CLabel>
                                    <CSelect  name="priority" className="formtext"  style={{height:50}} onChange={this.handleChange} >
                                    <option value="Low">Lav</option>
                                    <option value="Medium">Medium </option>
                                    <option value="High">Høy </option>
                                 </CSelect>
                                </CFormGroup>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row className="my-0">
                            <CCol xs="12" lg="6">
                            <CFormGroup>
                                <CLabel className="formlabel">Beskrivelse <span style={{color:'red'}}>*</span></CLabel>
                                <CTextarea 
                                    id="textarea-input" 
                                    rows="3"
                                    className="formtext"
                                    name="description"
                                    onChange={this.handleChange}
                                    placeholder="Øke antall boliger til eldre med demens" 
                                    />
                            </CFormGroup>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row className="my-0">
                            <CCol xs="12" sm="6" lg="4">
                            <CFormGroup>
                                <CLabel className="formlabel">Periode  fra <span style={{color:'red'}}>*</span></CLabel>
                                <CInput type="date" className="formtext"  style={{height:50}} name="start_timestamp" onChange={this.handleChange} />
                            </CFormGroup>
                            </CCol>
                            <CCol xs="12" sm="6" lg="4">
                            <CFormGroup>
                                <CLabel className="formlabel">Periode til <span style={{color:'red'}}>*</span></CLabel>
                                <CInput type="date" className="formtext"  style={{height:50}} name="end_timestamp" onChange={this.handleChange} />
                            </CFormGroup>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row className="my-0">
                            <CCol xs="12" sm="6" lg="4">
                                <CFormGroup>
                                    <CLabel className="formlabel">Eier <span style={{color:'red'}}>*</span> </CLabel>
                                        <Multiselect
                                        options={usersData} // Options to display in the dropdown
                                        // selectedValues={this.state.selectedList} // Preselected value to persist in dropdown
                                        onSelect={this.onSelect} // Function will trigger on select event
                                        onRemove={this.onRemove} // Function will trigger on remove event
                                        displayValue="name"// Property name to display in the dropdown options
                                        // className="formtext"
                                        closeIcon="circle"
                                        style={style}
                                        />
                                </CFormGroup>
                                
                            </CCol>
                            <CCol xs="0" sm="1" lg="1">
                                <CFormGroup>
                                <img  htmlFor="mulselect" src={search}  className=" d-none d-sm-block" style={{marginLeft:-30,marginTop:32}}   alt="Logo" /> 
                                </CFormGroup>
                                </CCol>
                         </CFormGroup>
                        <CFormGroup row className="my-0">
                            <CCol xs="12" sm="6" lg="4">
                                <CFormGroup>
                                    <CLabel className="formlabel">Ansvarlig Avdelingsleder <span style={{color:'red'}}>*</span> </CLabel>
                                        <Multiselect
                                        options={usersData} // Options to display in the dropdown
                                        // selectedValues={this.state.selectedList} // Preselected value to persist in dropdown
                                        onSelect={this.onSelect} // Function will trigger on select event
                                        onRemove={this.onRemove} // Function will trigger on remove event
                                        displayValue="name"// Property name to display in the dropdown options
                                        style={style}
                                        />  
                                </CFormGroup>
                            </CCol>
                                <CCol xs="0" sm="1" lg="1">
                                <CFormGroup>
                                <img  htmlFor="mulselect" src={search} className=" d-none d-sm-block" style={{marginLeft:-30,marginTop:32}}  alt="Logo" /> 
                                </CFormGroup>
                                </CCol>
                         </CFormGroup>
                    <CFormGroup >
                        <CLabel className="formlabel">Last opp dokumenter</CLabel>. 
                        <CCol xs="12" sm="6" lg="3" style={{marginLeft:-15}}>
                        <input type="file" name="file" id="file"  multiple className="inputfile" 
                        onChange={(e)=> this.setState({
                            file1: e.target.files[0],
                            file2: e.target.files[1]
                            })  } />
                          <label htmlFor="file" style={{height:50}}> &nbsp; documents 
                          <img style={{position:'absolute',left:330}} src={docu} className="normalIcon"  alt="Logo" /></label>
                          <p >{document.file1 && <span> {document.file1.name}</span> }, 
                        
                        &nbsp;{document.file2 && <span> {document.file2.name}</span> }</p>
                        </CCol>
                        {/* <CCol xs="0" sm="1" lg="1">
                                <CFormGroup>
                                <img  htmlFor="mulselect" src={docu} style={{marginLeft:30}}  alt="Logo" /> 
                                </CFormGroup>
                                </CCol> */}
                     </CFormGroup> 
                     <CFormGroup row className="my-0">
                        <CCol xs="6" sm="1"><CButton block className="outlineButton" style={{height:61,width:85}}  onClick={this.handleSubmit} >Lagre</CButton></CCol>
                        <CCol xs="6" sm="1"><CButton block className="outlineButton" style={{height:61,width:97}} >Avbryt</CButton></CCol>
                     </CFormGroup>

                        </CCardBody>
                    </CCard>
                    </CCol>
                </CRow>
            
        </>
    )}
}

export default Create;



const style = {
    multiselectContainer: { // To change css for multiselect (Width,height,etc..)
    //   height:150,
    // background:'pink'
    },
    searchBox: { // To change search box element look
    //   border: none;
    //   font-size: 10px;
    //   min-height: 50px;
    },
    inputField: { // To change input field position or margin
        // margin: 5px;
        // backgroundColor:'green',
        height:35,
        // border:'2px solid black'
    },
    chips: { // To change css chips(Selected options)
      background: '#2B2859',
      borderRadius:20,
      fontWeight:'400',
      fontFamily:'open sans',
      fontSize:13
    },
    optionContainer: { // To change css for option container 

    },
    option: { // To change css for dropdown options
    //   color: 'blue',
    // background: '#2B2859',
    },
    groupHeading: { // To chanage group heading style
 
    }
  }