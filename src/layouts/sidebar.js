import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "../components/modal";


function Sidebar({ children }) {
    return (
        <>
            <Modal />
            <div id="loading">
                <div id="loading-center"></div>
            </div>
            {/* loader END  */}
            {/* Wrapper Start  */}
            <div className="wrapper">
                <div className="iq-top-navbar">
                    <div className="iq-navbar-custom">
                        <nav className="navbar navbar-expand-lg navbar-light p-0">
                            <div className="iq-navbar-logo d-flex align-items-center justify-content-between">
                                <i className="fas fa-align-justify wrapper-menu"></i>
                                <a href="#" className="header-logo">
                                    <img src="../assets/images/logo.png" className="img-fluid rounded-normal light-logo" alt="logo" />
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="iq-sidebar  sidebar-default ">
                    <div className="iq-sidebar-logo d-flex align-items-center justify-content-between">
                        <a href="#" className="header-logo">
                            <img src="../assets/images/logo.png" className="img-fluid rounded-normal light-logo" alt="logo" /> <h4 className="logo-title ml-3"> Address Book </h4>
                        </a>
                        <div className="iq-menu-bt-sidebar">
                            <i className="fas fa-times wrapper-menu"></i>
                        </div>
                    </div>
                    <div className="sidebar-caption dropdown d-block mt-3">
                        <a href="#" className="iq-user-toggle d-flex align-items-center justify-content-between" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="../assets/images/user/1.jpg" className="img-fluid rounded avatar-50 mr-3" alt="user" />
                            <div className="caption">
                                <h6 className="mb-0 line-height">Bud Wiser</h6>
                            </div>
                            <i className="fas fa-angle-down"></i>
                        </a>
                        <div className="dropdown-menu w-100 border-0 my-2" aria-labelledby="dropdownMenuButton">
                            <NavLink className="dropdown-item mb-2" to="/user-profile">
                                <i className="las la-user-edit font-size-20 mr-1"></i>
                                <span>Edit Profile</span>
                            </NavLink>
                            <hr className="my-2" />
                            <button className="dropdown-item" href="auth-sign-in.html">
                                <i className="las la-sign-out-alt font-size-20 mr-1"></i>
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>
                    <div className="data-scrollbar" data-scroll="1">
                        {/* Add new Contact */}
                        <div className="sidebar-btn mb-3">
                            <button data-toggle="modal" data-target="#exampleModalScrollable" aria-haspopup="true" aria-expanded="false" className="btn btn-primary pr-5 position-relative iq-user-toggle d-flex align-items-center justify-content-between" style={{ height: "40px" }}>
                                <span className="btn-title"><i className="ri-add-line mr-3"></i>Add New </span>
                                <span className="note-add-btn" style={{ height: "40px" }}><i className="las la-angle-down"></i></span>
                            </button>
                        </div>
                        <nav className="iq-sidebar-menu">
                            <ul id="iq-sidebar-toggle" className="iq-menu">
                                <li className="">
                                    <NavLink to="/" className="svg-icon">
                                        <i>
                                            <svg className="svg-icon" id="iq-main-1" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                            </svg>
                                        </i>
                                        <span>Your Contact List</span>
                                    </NavLink>
                                    <ul id="index" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                    </ul>
                                </li>
                                <li className="">
                                    <a href="/" className="svg-icon">
                                        <i>
                                            <svg width="20" className="svg-icon" id="iq-main-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" style={{ strokeDasharray: "80px, 100px", strokeDashoffset: "0px" }}></path>
                                            </svg>
                                        </i>
                                        <span>Bin</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="p-3"></div>
                    </div>
                </div>
                <div className="content-page">
                    {children}
                </div>
            </div>
        </>
    )
}


export default Sidebar;