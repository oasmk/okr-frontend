import React,{useState} from 'react';
import Picker from 'emoji-picker-react';
import {
    CCard,
    CCardBody,
    CToast,
    CToastBody,
    CToaster,
    CCol,
    CRow,
    CInput,
    CButton
  } from  '@coreui/react'

  import person from '../all_icon/person.png'
  import smile from '../all_icon/temp/smile.svg'
  import close from '../all_icon/close.png'

const Measures = props => {
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [alertEmoji, setEmoji] = useState(false);


    const onEmojiClick = (event, emojiObject) => {
      setChosenEmoji(emojiObject);
    };


    // to show Emoji 
    const showEmoji = ()=>{
        return  <CToaster  position='bottom-center'  className=" bg-white" >
                    <CToast show={alertEmoji} >
                        <CToastBody>
                        <img className="float-right" width="20px" src={close} onClick={()=>setEmoji(false)}/>
                        <Picker onEmojiClick={onEmojiClick}  />
                        </CToastBody>
                    </CToast>
                </CToaster>
              
      }



    return (
        <>
        <CRow>
            <CCol xs="12">
            <CCard accentColor="danger">
                <CCardBody className="formtext">
                <div class="row">
                <div class="col-10  ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
                <div class="col-2"> <CButton block shape="pill" style={{background: '#2B2859',color:'white'}}>View Details</CButton></div>
                </div>
                    <p className="subhead">Oversikt strategiske mål og budsjett </p>
                    <p className="formtext">Oversikt strategiske mål og budsjett </p>
                    <br/>
                    <div className="row" style={{background:'#FBFBFD'}}>
                        <div className="col-4"><p className="formlabel"> Completion Status: <span className="smallbox">80</span>%</p></div>
                        <div className="col-4"></div>
                        <div className="col-4"><p className="documentpara float-right">5 kommentarer</p></div>
                        <div className="col-4"></div>
                    </div>

                    <div class="media">
                        <img class="mr-3"src={person} style={{borderRadius:'50%'}} alt="Generic placeholder image"/>
                        <div class="media-body ">
                            <div className="comment">

                            <h5 class="mt-0">Media heading</h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </div>

                            <div class="media mt-3">
                            <a class="pr-3" href="#">
                                <img src={person} style={{borderRadius:'50%'}} alt="Generic placeholder image"/>
                            </a>
                            <div class="media-body comment">
                                <h5 class="mt-0">Media heading</h5>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </div>
                            </div>
                        </div>
                        </div>
                    <div class="media mt-3">
                        <img src={person} style={{borderRadius:'50%'}}
                         class="align-self-start mr-3"  alt="Generic placeholder image"/>
                        <div class="media-body comment">
                            <h5 class="mt-0">Top-aligned media</h5>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                            <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        </div>
                       
                    </div>
                        <div className="ml-5 persontask">reply  <span className="commentdate">20 mar 2021</span></div>
                    {/* <div className="row" >
                        <div className="col-1"><img src={person} style={{borderRadius:'50%'}} /> </div>
                        <div className="col-10 comment" >
                            <p className="formtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                             incididunt ut labore et dolore magna aliqua.</p> 
                    <p className="lighttext">Eier</p>
                             
                             </div>

                    </div> */}
                    {/* <div className="row">
                        <div className="col-7"><p className="formtext">Avdelingsdirektør "admnistrasjonsavdeling"</p></div>
                        <div className="col-1"></div>
                        <div className="col-4"><p className="documentpara">2 kommentarer</p></div>
                    </div> */}

 

                <div class="row mt-5 text-center">
                <div class="col-sm-1"> <img class="mr-3"src={person} style={{borderRadius:'50%'}} alt="Generic placeholder image"/></div>
                <div class="col-sm-10">

                    <div class="row">
                    <div class="col-12"> <CInput type="text" className="formtext" /></div>  </div>
                    <div class="row ">
                    <div class="col-1">
                        <div className="imagediv"><input type="file" className="imagefile" accept="image/gif, image/jpeg, image/png" /></div>
                        <div className="attachdiv ml-5"><input type="file" className="attachfile" /></div>   
                    </div>

                    <div class="col-1"><img src={smile} onClick={()=>setEmoji(true)}/></div>
                    <div className="col"></div>
                    <div class="col-1 subhead">Post</div>
                    </div>
                    


                </div>
                </div>
                {showEmoji()}
                </CCardBody>
            </CCard>  
            </CCol>
        </CRow>


      
            
        </>
    );
};

Measures.propTypes = {
    
};

export default Measures;