import { useState } from "react";
import ContentWrapper from "../layouts/contentWrapper";
import Header from "../layouts/header";


function Profile() {

    const [fields, setFields] = useState({});

    const { name, email, phoneNumber } = fields;

    const handleChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        
    }

    return (
        <>
            <Header title="user Profile" />
            <ContentWrapper>

            <div className="col-lg-12">
               <div className="card">
                  <div className="card-body p-0">
                     <div className="iq-edit-list usr-edit">
                        <ul className="iq-edit-profile d-flex nav nav-pills">
                           <li className="col-md-3 p-0">
                              <a className="nav-link active" data-toggle="pill" href="#personal-information">
                              Personal Information
                              </a>
                           </li>
                           <li className="col-md-3 p-0">
                              <a className="nav-link " data-toggle="pill" href="#chang-pwd">
                              Change Password
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
               
            <div className="col-lg-12">
               <div className="iq-edit-list-data">
                  <div className="tab-content">
                     <div className="tab-pane fade active show" id="personal-information" role="tabpanel">
                        <div className="card">
                           <div className="card-body">
                              <form>
                                 <div className="form-group row align-items-center">
                                    <div className="col-md-12">
                                       <div className="profile-img-edit">
                                          <div className="crm-profile-img-edit">
                                             <img className="crm-profile-pic avatar-100" src="../assets/images/user/1.jpg" alt="profile-pic"/>
                                             <div className="crm-p-image bg-primary">
                                                <i className="las la-pen upload-button"></i>
                                                <input className="file-upload" type="file" accept="image/*" />
                                             </div>
                                          </div>                                          
                                       </div>
                                    </div>
                                 </div>
                                 <div className=" row align-items-center">
                                    <div className="form-group col-sm-6">
                                       <label htmlFor="fname">Full Name:</label>
                                       <input type="text" className="form-control" id="fname" placeholder="Vwede Sam"/>
                                    </div>
                                    <div className="form-group col-sm-6">
                                       <label htmlFor="lname">Photo URL:</label>
                                       <input type="text" className="form-control" id="lname" placeholder="http://img.com/test.jpg"/>
                                    </div>
                                    <div className="form-group col-sm-6">
                                       <label htmlFor="uname">Email:</label>
                                       <input type="text" className="form-control" id="uname" placeholder="BudWiser@01"/>
                                    </div>
                                    <div className="form-group col-sm-6">
                                       <label htmlFor="cname">Phone Number</label>
                                       <input type="number" className="form-control" id="cname" value="" placeholder="This will be used for accessing your Contact list offline "/>
                                    </div>
                                 </div>
                                 <button type="submit" className="btn btn-primary mr-2">Submit</button>
                                 <button type="reset" className="btn iq-bg-danger">Cancel</button>
                              </form>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade" id="chang-pwd" role="tabpanel">
                        <div className="card">
                           <div className="card-body">
                              <form>
                                 <div className="form-group">
                                    <label htmlFor="npass">New Password:</label>
                                    <input type="Password" className="form-control" id="npass" value=""/>
                                 </div>
                                 <div className="form-group">
                                    <label htmlFor="vpass">Verify Password:</label>
                                    <input type="Password" className="form-control" id="vpass" value=""/>
                                 </div>
                                 <button type="submit" className="btn btn-primary mr-2">Submit</button>
                                 <button type="reset" className="btn iq-bg-danger">Cancel</button>
                              </form>
                           </div>
                        </div>
                     </div>
                     
                  </div>
               </div>
            </div>

            </ContentWrapper>
        </>
    )

}

export default Profile;
