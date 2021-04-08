import { useEffect, useRef, useState } from "react";
import { useAuthContext } from "../context/auth";
import { useContactContext } from "../context/contactList";
import ContentWrapper from "../layouts/contentWrapper";
import Header from "../layouts/header";
import ContactTable from "./contactTable";
import Delete from "./modal/delete";


function ContactList() {

    const { isAuth, authUser } = useAuthContext();
    const { getContactlist, deleteContact, onHandleSearch } = useContactContext();
    const [loading, setLoading] = useState(false);
    const [contactList, setContactList] = useState([]);
    const [contactUID, setContactUID] = useState();
    const [searchQuery, setSearchQuery] = useState('');
    const deleteRef = useRef();
    const { uid: userId } = authUser;

    useEffect(() => {
        setLoading(true)
        if (userId) {
            fetchContactList(userId);
        }
    }, [userId])

    const onPrint = () => {
        window.print();
    }
    const handlePDF = () => {

    }

    const fetchContactList = (userId) => {
        getContactlist(userId)
            .onSnapshot((querySnapshot) => {
                // get the last document
                // const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
                if (querySnapshot.docs.length > 0) {
                    let list = [];
                    querySnapshot.docs.forEach(doc => {
                        list.push({ ...doc.data(), uid: doc.id });
                    })
                    setContactList(list)
                }
                setLoading(false);
            })
    }

    const handSearch = (e) => {
        onHandleSearch(e.target.value)
            .then(snapShot => {
                if (snapShot.docs.length > 0) {
                    let list = [];
                    snapShot.docs.forEach(doc => {
                        list.push({ ...doc.data(), uid: doc.id });
                    })
                    setContactList(list)
                }

                if (e.target.value == "") {
                    fetchContactList(userId);
                }
            })
        setSearchQuery(e.target.value);
    }

    const handleDelete = (uid, e) => {
        setContactUID(uid);
        deleteRef.current.click();
    }

    return (
        <>
            <Delete contactUID={contactUID} userId={userId} deleteContact={deleteContact} />
            <button ref={deleteRef} style={{ display: "none" }} data-toggle="modal" aria-expanded="false" data-target="#deleteContact" aria-haspopup="true" ></button>
            <Header title="Contact List" />
            <ContentWrapper>
                <div className="card-body">
                    <div className="table-responsive">
                        <div className="row justify-content-between">
                            <div className="col-sm-6 col-md-6">
                                <div id="user_list_datatable_info" className="dataTables_filter">
                                    <form className="mr-3 position-relative">
                                        <div className="form-group mb-0">
                                            <input type="search" value={searchQuery} onChange={handSearch} className="form-control" id="exampleInputSearch" placeholder="Search Contact List ..." aria-controls="user-list-table" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <div className="user-list-files d-flex">
                                    <button data-toggle="modal" data-target="#exampleModalScrollable" aria-haspopup="true" aria-expanded="false" className="btn btn-primary pr-5 position-relative iq-user-toggle d-flex align-items-center justify-content-between" style={{ height: "40px" }}>
                                        <span className="btn-title"><i className="ri-add-line mr-3"></i>Add New </span>
                                        <span className="note-add-btn" style={{ height: "40px" }}><i className="las la-angle-down"></i></span>
                                    </button>
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
                                {loading ? <tr><td>loading ...</td></tr> : <ContactTable contactList={contactList} userId={userId} handleDelete={handleDelete} />}
                            </tbody>
                        </table>
                    </div>
                </div>
            </ContentWrapper>
        </>
    )

}


export default ContactList;