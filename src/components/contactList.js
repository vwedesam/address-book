import { NavLink } from "react-router-dom";
import ContentWrapper from "../layouts/contentWrapper";
import Header from "../layouts/header";

// card-bottom-border-[ primary, info, danger, warning, purple, success ]

function ContactList() {
    return (
        <>
            <Header title="Contact List" />
            <ContentWrapper>
                <div className="card card-block card-stretch" >
                    <div className="card-body custom-notes-space">
                        <div className="rounded p-2 iq-grid body-bg mb-4">
                            <form className="add-notes">
                                <a className="search-link" href="#"><i className="ri-search-line"></i></a>
                                <input type="text" className="text search-input" placeholder="Search Contact List ..." value="" />
                            </form>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="card card-block card-stretch card-height card-bottom-border-info note-detail">
                                    <div className="card-body rounded">
                                        <div className="dropdown float-right" style={{ marginTop: '-15px' }}>
                                            <span className="dropdown-toggle dropdown-bg" id="dropdownMenuButton3" data-toggle="dropdown" aria-expanded="false" role="button">
                                            <i className="fas fa-ellipsis-h"></i>
                                            </span>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton3" >
                                                <NavLink to="/edit-contact" className="dropdown-item edit-note1" data-toggle="modal" data-target="#edit-note1"><i className="fas fa-user-edit mr-3"></i>Edit</NavLink>
                                                <a className="dropdown-item" data-extra-toggle="delete" data-closest-elem=".card" href="#"><i className="fas fa-trash-alt mr-3"></i>Delete</a>
                                            </div>
                                        </div>
                                        <div className="media flex-wrap align-items-top">
                                            <p className="card-title" style={{ marginTop: '-10px' }}>Eshemiedomi Samuel</p>
                                            <p className="card-title" style={{ marginTop: '-10px' }}>samuel@gmail.com</p>
                                            <p className="card-title" style={{ marginTop: '-10px' }}>08134342570</p>
                                        </div>
                                        <p className="mb-3 card-description short"></p>
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



export default ContactList;
