import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../context/auth";
import { useContactContext } from "../context/contactList";
import ContentWrapper from "../layouts/contentWrapper";
import Header from "../layouts/header";
import Delete from "./modal/delete";


function ContactList() {

    const { isAuth, authUser } = useAuthContext();
    const { getContactlist, deleteContact } = useContactContext();
    const [contactList, setContactList] = useState([]);
    const [idToDelete, setIdToDelete] = useState();
    const deleteRef = useRef();
    const { uid: userId } = authUser;

    useEffect(() => {
        getContactlist(userId)
            .on('value', function (snapShot) {
                let list = [];
                snapShot.forEach((element) => {
                    list.push({ uid: element.key, ...element.val() })
                });
                setContactList(list);
            })
    }, [])

    const onPrint = () => {
        window.print();
    }
    const handlePDF = () => {

    }

    const handleDelete = (uid, e) => {
        setIdToDelete(uid);
        deleteRef.current.click();
    }

    return (
        <>
            <Delete contactUID={idToDelete} userId={userId} deleteContact={deleteContact} />
            <button ref={deleteRef} style={{ display: "none"}} data-toggle="modal" aria-expanded="false" data-target="#deleteContact" aria-haspopup="true" ></button>
            <Header title="Contact List" />
            <ContentWrapper>
                <div className="card-body">
                    <div className="table-responsive">
                        <div className="row justify-content-between">
                            <div className="col-sm-6 col-md-6">
                                <div id="user_list_datatable_info" className="dataTables_filter">
                                    <form className="mr-3 position-relative">
                                        <div className="form-group mb-0">
                                            <input type="search" className="form-control" id="exampleInputSearch" placeholder="Search Contact List ..." aria-controls="user-list-table" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <div className="user-list-files d-flex">
                                    <a href="#" className="bg-primary" onClick={onPrint}>Print</a>
                                    <a className="bg-primary" href="#" onClick={handlePDF}>Pdf</a>
                                </div>
                            </div>
                        </div>
                        <table id="user-list-table" className="table table-striped tbl-server-info mt-4" role="grid" aria-describedby="user-list-page-info">
                            <thead>
                                <tr className="ligth">
                                    <th>s/n</th>
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>Email</th>
                                    <th style={{ minWidth: "100px" }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contactList.length > 0 ?
                                    contactList.map((contact, index) =>
                                        <tr key={index}>
                                            <td className="text-center">{index + 1}</td>
                                            <td> {contact.name} </td>
                                            <td> {contact.phoneNumber} </td>
                                            <td> {contact.email} </td>
                                            <td>
                                                <div className="flex align-items-center list-user-action">
                                                    <NavLink className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="edut" data-original-title="Edit" to={`edit-contact/${contact.uid}`}><i className="fas fa-edit"></i></NavLink>
                                                    <button style={{border: 'solid 0px'}} onClick={()=> handleDelete(contact.uid)} className="iq-bg-primary" title="Delete" > &nbsp; <i className="fas fa-trash"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                    : <tr><td>contact List is empty </td></tr>}
                            </tbody>
                        </table>
                    </div>
                    <div className="row justify-content-between mt-3">
                        <div id="user-list-page-info" className="col-md-6">
                            <span>Showing 1 to 5 of 5 entries</span>
                        </div>
                        <div className="col-md-6">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-end mb-0">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </>
    )

}


export default ContactList;