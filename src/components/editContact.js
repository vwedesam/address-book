import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAuthContext } from "../context/auth";
import { useContactContext } from "../context/contactList";
import ContentWrapper from "../layouts/contentWrapper";
import Header from "../layouts/header";


function EditContact() {

    const history = useHistory();
    const { getContact, updateContact } = useContactContext();
    const { authUser } = useAuthContext();
    const [fields, setFields] = useState({name:'', email:'', phoneNumber:''});
    const [msg, setMsg] = useState('');

    let { contactId } = useParams();
    const { uid: userId } = authUser;

    const handleChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateContact(userId, contactId, {
            name,
            email,
            phoneNumber
            })
            .then(()=> {
                setMsg("contact Update Successfully !!!")
            })
            .catch(err=>{
                setMsg(err.message)
            })
    }

    useEffect(() => {
        getContact(userId)
            .then(snapShot => {
                if(snapShot.child(contactId).exists()) setFields(snapShot.child(contactId).val());
                else history.push("/");
            })
            .catch(err => {
                setMsg(err.message)
            })
        return true;
    }, [userId, contactId]);

    const { name, email, phoneNumber } = fields;

    return (
        <>
            <Header title="Edit Contact" />
            <ContentWrapper>
                <div className="card card-block card-stretch pb-2">
                    <div className="card-body write-card pb-4">
                        <div className="row">
                            <div className="col-md-8">
                                {msg ?
                                    <div className="alert bg-white alert-success" role="alert">
                                        <div className="iq-alert-text"> {msg} </div>
                                    </div> : ""}
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label className="label-control"> Name </label>
                                        <input type="text" className="form-control" name="name" placeholder="Enter Name ..." value={name} onChange={handleChange}  required />
                                    </div>
                                    <div className="fomr-group">
                                        <label className="label-control"> Phone Number </label>
                                        <input type="number" className="form-control" name="phoneNumber" placeholder="Enter Phone Number ..." value={phoneNumber.trim()} onChange={handleChange}  required />
                                    </div>
                                    <div className="form-group">
                                        <label className="label-control"> Email </label>
                                        <input type="email" className="form-control" name="email" placeholder="Enter email ..." value={email} onChange={handleChange}  required />
                                    </div>
                                    <button type="submit" className="btn btn-primary ml-1">
                                        Save !
                                    </button>
                                </form>
                            </div>
                            <div className="col-md-4" id="default">
                                <div className="card card-block card-stretch card-height card-bottom-border-info note-detail" id="update-note">
                                    <div className="card-header d-flex justify-content-between pb-1">
                                        <div className="icon iq-icon-box-2 icon-border-info rounded" id="note-icon">
                                            <svg width="23" className="svg-icon" id="iq-main-01" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" style={{ strokeDasharray: "83px, 103px", strokeDashoffset: "0px" }}></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="card-body rounded">
                                        <h4 className="card-title text-ellipsis short-1" id="note-title"> {name} </h4>
                                        <p className="mb-3 text-ellipsis short-6" id="note-description">{email}</p>
                                        <p className="mb-3 text-ellipsis short-6" id="note-description">{phoneNumber}</p>
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

export default EditContact;
