import { useEffect, useRef, useState } from "react";
import { useAuthContext } from "../context/auth";
import ContentWrapper from "../layouts/contentWrapper";
import Header from "../layouts/header";


function Profile() {

   const { changePassword, updateEmail, updateProfile, authUser } = useAuthContext();
   const [fields, setFields] = useState({ displayName: '', email: '', contact: '', photoURL: '' });
   const [msg, setMsg] = useState('')
   const [error, setError] = useState('')
   const passwordRef = useRef();
   const confirmPasswordRef = useRef();

   const { displayName, email, contact, photoURL = '' } = fields;

   const handleChange = (e) => {
      setFields({
         ...fields,
         [e.target.name]: e.target.value
      })
   }

   const setResponse = (err, msg) =>{
         setError(err);
         setMsg(msg);
      const timeOut = setTimeout(()=>{
         setError('')
         setMsg('')
         clearTimeout(timeOut);
      }, 3000);
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      Promise.all([updateEmail(email), updateProfile({displayName, photoURL})])
         .then(() => {
            setResponse('', 'profile updated successfully !!');
         })
         .catch(err => {
            setResponse(err.message, '');
         })
   }

   useEffect(() => {
      setFields(authUser);
   }, [authUser])

   const handleChangePassword = (e) => {
      e.preventDefault();
      if (passwordRef.current.value == confirmPasswordRef.current.value) {
         changePassword(passwordRef.current.value);
         setResponse('', 'password changed successfully !!');
      }
      else setResponse("password do not match confirm passowrd", '');
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
                           {msg ?
                              <div className="alert bg-white alert-success" role="alert">
                                 <div className="iq-alert-text"> {msg} </div>
                              </div> : ""}
                           {error ?
                              <div className="alert bg-white alert-danger" role="alert">
                                 <div className="iq-alert-text"> {error} </div>
                              </div> : ""}
                           <div className="card-body">
                              <form onSubmit={handleSubmit}>
                                 <div className="form-group row align-items-center">
                                    <div className="col-md-12">
                                       <div className="profile-img-edit">
                                          <div className="crm-profile-img-edit">
                                             <img className="crm-profile-pic avatar-100" src={photoURL ? photoURL : "../assets/images/user/1.jpg"} alt="profile-pic" />
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
                                       <input type="text" className="form-control" id="fname" value={displayName} name="displayName" onChange={handleChange} placeholder="Vwede Sam" required />
                                    </div>
                                    <div className="form-group col-sm-6">
                                       <label htmlFor="lname">Photo URL:</label>
                                       <input type="text" className="form-control" id="lname" value={photoURL} name="photoURL" onChange={handleChange} placeholder="http://img.com/test.jpg" required />
                                    </div>
                                    <div className="form-group col-sm-6">
                                       <label htmlFor="uname">Email:</label>
                                       <input type="text" className="form-control" id="uname" value={email} name="email" onChange={handleChange} placeholder="BudWiser@01" required />
                                    </div>
                                    <div className="form-group col-sm-6">
                                       <label htmlFor="cname">Phone Number</label>
                                       <input type="number" title="Contact Admin to Change Phone Number" className="form-control" id="cname" disabled={true} value={contact} placeholder="This will be used for accessing your Contact list offline" required />
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
                              {msg ?
                                 <div className="alert bg-white alert-success" role="alert">
                                    <div className="iq-alert-text"> {msg} </div>
                                 </div> : ""}
                              {error ?
                                 <div className="alert bg-white alert-danger" role="alert">
                                    <div className="iq-alert-text"> {error} </div>
                                 </div> : ""}
                              <form onSubmit={handleChangePassword}>
                                 <div className="form-group">
                                    <label htmlFor="npass">New Password:</label>
                                    <input type="Password" className="form-control" id="npass" ref={passwordRef} required />
                                 </div>
                                 <div className="form-group">
                                    <label htmlFor="vpass">Confirm Password:</label>
                                    <input type="Password" className="form-control" id="vpass" ref={confirmPasswordRef} required />
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
