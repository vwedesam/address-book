import { useState } from "react";
import ContentWrapper from "../layouts/contentWrapper";
import Header from "../layouts/header";


function EditContact() {

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
            <Header title="Edit Contact" />
            <ContentWrapper>
                <div className="card card-block card-stretch pb-2">
                    <div className="card-body write-card pb-4">
                        <div className="row">
                            <div className="col-md-8">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label className="label-control"> Name </label>
                                        <input type="text" className="form-control" name="name" placeholder="Enter Name ..." value={name} onChange={handleChange} data-change="input" data-custom-target="#note-title" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="label-control"> Phone Number </label>
                                        <input type="number" style={{ background: 'white', border: 'solid white 2px'}} disabled="true" className="form-control" name="phoneNumber" placeholder="Enter Phone Number ..." value={phoneNumber} onChange={handleChange} data-change="input" data-custom-target="#note-title" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="label-control"> Email </label>
                                        <input type="email" className="form-control" name="email" placeholder="Enter email ..." value={email} onChange={handleChange} data-change="input" data-custom-target="#note-title" required />
                                    </div>
                                    <button type="reset" className="btn btn-outline-primary" data-reset="note-reset">
                                        <svg width="20" className="svg-icon" id="new-note-reset" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" style={{ strokeDasharray: "56px, 76px", strokeDashoffset: "66px" }}></path>
                                        </svg>
                                        Reset
                                    </button>
                                    <button type="submit" className="btn btn-primary ml-1">
                                        <svg width="20" className="svg-icon" id="new-note-save" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" style={{ strokeDasharray: "70px, 90px", strokeDashoffset: "80px" }}></path>
                                        </svg>
                                        Save
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
                                        <div className="card-header-toolbar d-flex align-items-center">
                                            <div className="dropdown">
                                                <span className="dropdown-toggle dropdown-bg" id="dropdownMenuButton4" data-toggle="dropdown" aria-expanded="false" role="button">
                                                    <i className="ri-more-fill"></i>
                                                </span>
                                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton4" >
                                                    <a href="#" className="dropdown-item new-note1" data-toggle="modal" data-custom-target="#new-note1"><i className="ri-eye-line mr-3"></i>View</a>
                                                    <a className="dropdown-item" href="#"><i className="las la-trash-alt mr-3"></i>Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body rounded">
                                        <h4 className="card-title text-ellipsis short-1" id="note-title">Example Note</h4>
                                        <p className="mb-3 text-ellipsis short-6" id="note-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="d-flex align-items-center justify-content-between note-text note-text-info">
                                            <a href="#" className=""><i className="las la-user-friends mr-2 font-size-20"></i>Only Me</a>
                                            <a href="#" className=""><i className="las la-calendar mr-2 font-size-20"></i><span id="note-reminder-date">01 Jan 2021</span></a>
                                        </div>
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
