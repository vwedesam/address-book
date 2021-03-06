import { NavLink, useHistory } from "react-router-dom";
import AddNewContact from "../components/modal/addNewContact";
import { useAuthContext } from "../context/auth";
import { useContactContext } from "../context/contactList";


function Sidebar({ children }) {

    const { addToContactList } = useContactContext();
    const { authUser } = useAuthContext();

    const { photoURL } = authUser;

    return (
        <>
            <AddNewContact addToContactList={addToContactList} />
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
                            <img src={ photoURL ? photoURL : "../assets/images/user/1.jpg" } className="img-fluid rounded avatar-50 mr-3" alt="user" />
                            <div className="caption">
                                <h6 className="mb-0 line-height">Bud Wiser</h6>
                            </div>
                        </a>
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
                                    <NavLink to="/user-profile" className="svg-icon">
                                        <i className="">
                                            <svg className="svg-icon" id="iq-user-1-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </i><span className="">Profile</span>
                                    </NavLink>
                                </li>
                                <li className="">
                                    <NavLink to="/" className="svg-icon">
                                        <i>
                                            <svg className="svg-icon" id="iq-main-1" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                            </svg>
                                        </i>
                                        <span>Your Contact List</span>
                                    </NavLink>
                                </li>
                                <li className="">
                                          <a href="/logout" className="svg-icon">
                                              <i className="">
                                                  <svg className="svg-icon" id="iq-auth-1-1" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                  </svg>
                                              </i>
                                              <span className="">Logout</span>
                                          </a>
                                      </li>
                                <li className="">
                                    <a href="#" className="svg-icon">
                                        <i>
                                            <svg width="20" className="svg-icon" id="iq-main-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" style={{ strokeDasharray: "80px, 100px", strokeDashoffset: "0px" }}></path>
                                            </svg>
                                        </i>
                                        <span> comming soon !!</span>
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