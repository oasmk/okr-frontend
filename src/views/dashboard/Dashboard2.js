import React from 'react';
import PropTypes from 'prop-types';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import { 
     CBadge,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CRow,
    CProgress,
    CFade,
    CSwitch,
    CLink} from '@coreui/react';
import {
    CChartBar,
    CChartLine,
    CChartDoughnut,
    CChartRadar,
    CChartPie,
    CChartPolarArea
    } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import red from '../all_icon/red.svg'
import search2 from '../all_icon/search2.svg'
import person from '../all_icon/person.png'
import { Auth } from 'aws-amplify';


const searchIcon ={
    transform: 'translate(-50px,5px)'
  }
const Dashboard2 = props => {



async function signOut() {
  console.log('click')
    try {
      const value =  await Auth.signOut();
      localStorage.setItem('token', '');
      console.log(value)
    } catch (error) {
        console.log('error signing out: ', error);
    }
}



    return (
        <>

  <button onClick={signOut} >click</button>

        <CRow>
            <CCol xs="12" sm="6">
            <CCard>
        <CCardHeader>
          Doughnut Chart
        </CCardHeader>
        <CCardBody>
          <CChartDoughnut
            datasets={[
              {
                backgroundColor: [
                  '#41B883',
                  '#E46651',
                  '#00D8FF',
                  '#DD1B16'
                ],
                data: [40, 20, 80, 10]
              }
            ]}
            labels={['VueJs', 'EmberJs', 'ReactJs', 'AngularJs']}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>
            </CCol>
            <CCol xs="12" sm="6">
            <CCard>
        <CCardHeader>
          Bar Chart
        </CCardHeader>
        <CCardBody>
          <CChartBar
            datasets={[
              {
                label: 'GitHub Commits',
                backgroundColor: '#f87979',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
              }
            ]}
            labels="months"
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>
            </CCol>
        </CRow>




        <CRow>
            <CCol xs="12" sm="4">
              <CCard >
                <CCardBody className="formtext">
                    <p className="subhead">Bydels direktør strategisk mål</p>
                    <div className="row">
                        <div className="col-10">
                          <input class="form-control " type="text" placeholder="Select objective …"/>
                        </div>
                        <div className="col-1">
                        <img src={search2} alt="search" style={searchIcon} />
                        </div>
                    </div>
                    <p className="formtext">Oversikt strategiske mål og budsjett </p>
                    <CProgress
                    className="progress-xs mt-2"
                    precision={1}
                    color="#1E43AA"
                    value={40}
                />
                    <div className="row" >
                        <div className="col-2 percenttext">80% <p className="lighttext">status</p> </div>
                        <div className="col-4"></div>
                        <div className="col-4 totalbudgettext"> 10000 <p className="lighttext">Total budsjett</p></div>
                    </div>
                </CCardBody>
            </CCard> 
            </CCol>
            <CCol xs="12" sm="4">
              <CCard >
                <CCardBody className="formtext">
                    <p className="subhead">Oversikt strategiske mål og budsjett </p>
                    <div className="row">
                        <div className="col-10">
                          <input class="form-control " type="text" placeholder="Select objective …"/>
                        </div>
                        <div className="col-1">
                        <img src={search2} alt="search" style={searchIcon} />
                        </div>
                    </div>
                    <p className="formtext">Oversikt strategiske mål og budsjett </p>
                    <CProgress
                    className="progress-xs mt-2"
                    precision={1}
                    color="#1E43AA"
                    value={40}
                />
                    <div className="row" >
                        <div className="col-2 percenttext">80% <p className="lighttext">status</p> </div>
                        <div className="col-4"></div>
                        <div className="col-4 totalbudgettext"> 10000 <p className="lighttext">Total budsjett</p></div>
                    </div>
                </CCardBody>
            </CCard> 
            </CCol>
            <CCol xs="12" sm="4">
              <CCard >
                <CCardBody className="formtext">
                    <p className="subhead">Av seksjonsleder</p>
                    <div className="row">
                        <div className="col-10">
                          <input class="form-control " type="text" placeholder="Select manager …"/>
                        </div>
                        <div className="col-1">
                        <img src={search2} alt="search" style={searchIcon} />
                        </div>
                    </div>
                    <p className="formtext">Oversikt strategiske mål og budsjett </p>
                  
                    <div className="row" >
                        <div className="col-1"><img src={person} style={{borderRadius:'50%'}} /> </div>
                        <div className="col-5 personname ml-2" >Adam Larssen <p className="persondesig">WIP</p> </div>

                        <div className="col-4 totalbudgettext"> 11 <p className="persontask">Task</p></div>
                    </div>
                    <CProgress
                    className="progress-xs mt-2"
                    precision={1}
                    color="#1E43AA"
                    value={40}
                />
                    <div className="row" >
                        <div className="col-4 percenttext">9 <p className="persontask">Utført</p> </div>
                        <div className="col-4 percenttext" color="#F0CC18">1 <p className="persontask">WIP</p> </div>

                        <div className="col-4 totalbudgettext"> 10000 <p className="persontask">Ikke startet</p></div>
                    </div>
                </CCardBody>
            </CCard> 
            </CCol>








        </CRow>

            
        </>
    );
};

Dashboard2.propTypes = {
    
};

export default Dashboard2;