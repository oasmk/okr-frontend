import React,{Component, useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
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
import { getDepartment, postUser } from '../config';

// Create.propTypes = {
    
// };

class Create extends Component {
    constructor(props){
        super(props)
        this.state={
            modal:false,
            listDepart:[],
            status:'Active',
            role:'Director',
            is_active:true
            // department_name:'Health',


        }
    }
    // const [modal, setModal] = useState(false);
    // const [request,setRequest ] = useState([]);

 handleChange=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
        [name]: value
    })
}

componentDidMount(){
    const token = localStorage.getItem('token');
    axios.get(getDepartment)
    .then((res) =>{this.setState({listDepart:res.data  }) })
    .catch(error => console.log("Error detected: " + error)) 

}

handleSubmit=()=>{
    // const mytoken = "eyJraWQiOiJTVUI0UnJqUkx2T21tXC9DS3FWbGZKNDFhd1REVml3SmRSZWZjdGFTeVwvSWM9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJmOTAxNTdjYi01MTVkLTQwMDQtYmExMi05MmQ2YTkwN2FjNzkiLCJhdWQiOiI2MGk1OGN2NDViMGNrNHJvbmpkZTZlMWtidiIsImV2ZW50X2lkIjoiMzFmNTg4YTEtNWU2My00ZmJjLTk3NDItYzk0YjZkYTEzMWU0IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MTkzNjI4OTEsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX2h0RzFnUFpTViIsImNvZ25pdG86dXNlcm5hbWUiOiJvamFzbWFqZ2FvbmthcjQ0NUBnbWFpbC5jb20iLCJwaG9uZV9udW1iZXIiOiIrOTE5ODUwNDQ0NDEyIiwiZXhwIjoxNjE5MzY2NDkxLCJjdXN0b206cm9sZSI6IkJ5ZGVsIERpcmVjdG9yIiwiaWF0IjoxNjE5MzYyODkxLCJlbWFpbCI6Im9qYXNtYWpnYW9ua2FyNDQ1QGdtYWlsLmNvbSJ9.OZuO4T5x-6gATkl_hjc3IUWgK7lEh_UqXqYxMOQEOuJiOn4PwGjHB2Wdr3zVr_L8SD0wJhq3yM7pIWa7oxHwYPo6liOkYhiBxkThoSjQ_U1at_nCKrVkG7QxDiPXkDczH65ZDLQtFhLV5oiGBEM0nDsHnmKEaLu1pQ6Z-VmWDjXNX7ImS8lIuALtUVpT_bbsRr7nTn9_uAIVuoJA1pQuQDNXCCiYzP2SPDjLpI1otrDx2kzD6FLpi6Rza64gLD21veu1g62U-YmEl2P3IkQFUdj8xrR5B2MUDDj49Aamds6AVNChnGnt74ZhSfEjDAxx5S0HDMiVt5m_PHN3ctKYUg"
    // localStorage.setItem('token', mytoken);
    const token = localStorage.getItem('token');

    // console.log(this.state)

    const postReq = {
        "first_name": this.state.name.split(" ")[0],
        "last_name": this.state.name.split(" ")[1] || '',
        "email": this.state.email,
        "phone_no": "+919850444411",
        "role": this.state.role,
        "department_name":this.state.depart.split(",")[0],
        "department_id":this.state.depart.split(",")[1],
        "is_active":this.state.is_active
    }
   console.log(postReq)
  
   axios.post(postUser,postReq,{headers: {  Authorization: token  }})
   .then((res) => {
    //    console.log(res)
       if(res.status===201){
           alert("create successfully")
       }
   })
   .catch(error => alert(error.message)) ;
}


render(){

    // console.log(this.state.listDepart)

    return (
        <>
        <CButton block className="outlineButton"   onClick={() => this.setState({modal:!this.state.modal})} style={{fontSize:18,fontWeight:'600',height:49,width:124}} >Ny bruker</CButton>
        <CModal 
              show={this.state.modal} 
              onClose={()=>this.setState({modal:false})}
              style={{paddingLeft:15,paddingRight:15}}
            >
              <CModalHeader closeButton style={{border:'none'}}>
                <CModalTitle>  <p className="subhead" style={{fontWeight:'600',fontSize:18,color:'#2B2859'}} >Ny Bruker</p></CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CFormGroup row className="my-0">
                        <CCol xs="12" lg="12">
                        <CFormGroup>
                            <CLabel className="formlabel">Navn</CLabel>
                            <CInput type="text"  name="name" className="formtext" style={{height:50}} onChange={this.handleChange} />
                        </CFormGroup>
                        </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                    <CCol xs="6" lg="6">
                        <CFormGroup>
                            <CLabel className="formlabel">Ansatt ID </CLabel>
                            <CInput type="text"  className="formtext" name="employee_id" style={{height:50}} onChange={this.handleChange} />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="6" lg="6">
                        <CFormGroup>
                            <CLabel className="formlabel"> Status</CLabel>
                            <CSelect  name="is_active" className="formtext" style={{height:50}} onChange={this.handleChange} >
                            <option value={true} style={{height:50}}>Aktiv</option>
                            <option value={false} style={{height:50}}>Inaktiv</option>
                            {/* <option value="hold">På vent</option> */}
                            </CSelect>
                        </CFormGroup>
                    </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                        <CCol xs="12" lg="12">
                        <CFormGroup>
                            <CLabel className="formlabel">E-post</CLabel>
                            <CInput type="text" name="email" className="formtext" style={{height:50}} onChange={this.handleChange} />
                        </CFormGroup>
                        </CCol>
                </CFormGroup> 
                <CFormGroup row className="my-0">
                    <CCol xs="6" lg="6">
                        <CFormGroup>
                            <CLabel className="formlabel">Betegnelse </CLabel>
                            <CSelect  name="role" className="formtext" style={{height:50}} onChange={this.handleChange} >
                            <option value="Director">Direktør</option>
                            <option value="Section Chief" style={{height:50}}>Section Sjef</option>
                            <option value="Section Chief" style={{height:50}}>Section Sjef</option>
                            <option value="Avdelings Leder" style={{height:50}}>Avdelings Leder</option>
                            </CSelect>
                        </CFormGroup>
                    </CCol>
                    <CCol xs="6" lg="6">
                        <CFormGroup>
                            <CLabel className="formlabel"> Avdeling  </CLabel>
                            <CSelect  name="depart" className="formtext" style={{height:50}}  onChange={this.handleChange}>
                                <option value="null" style={{height:50}}>select Avdeling </option>
                        {this.state.listDepart.map((single,index)=>(
                            <option value={`${single.name},${single.id}`} key={index} style={{height:50}}>{single.description}</option>
                            ))}
                            </CSelect>
                        </CFormGroup>
                    </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                            <CCol xs="12" sm="6" lg="8">
                                <CFormGroup>
                                    <CLabel className="formlabel">Veileder</CLabel>
                                    <CInput type="text" className="formtext"  style={{height:50}} />
                                </CFormGroup>
                            </CCol>
                            <CCol xs="0" sm="1" lg="1">
                                <CFormGroup>
                                <img  htmlFor="mulselect" src={search} className="normalicon2 d-none d-sm-block"  alt="Logo" style={{marginLeft:-10,marginTop:5}} /> 
                                </CFormGroup>
                                </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                        <CCol xs="12" sm="3"><CButton block className="outlineButton" style={{height:61}} onClick={this.handleSubmit} >Opprett</CButton></CCol>
                        <CCol xs="12" sm="5"><CButton block className="outlineButton" style={{height:61}}>Lagre og skape nye</CButton></CCol>
                        <CCol xs="12" sm="3"><CButton block className="outlineButton" style={{height:61}}  onClick={() => this.setState({modal:false})}>Avbryt</CButton></CCol>
                     </CFormGroup>
              </CModalBody>

            </CModal>
            
        </>
    )}
}

export default Create;