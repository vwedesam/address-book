import { useRef, useState } from "react";
import { useAuthContext } from "../../context/auth";

function AddNewContact({ addToContactList }) {

    const { authUser } = useAuthContext();
    const [msg, setMsg] = useState('');
    const name = useRef();
    const email = useRef();
    const phoneNumber = useRef();
    const closeRef = useRef();

    const { uid: userId } = authUser;

    const handleSubmit = (e) =>{
        e.preventDefault();
        addToContactList(userId, {
            name: name.current.value, 
            email: email.current.value, 
            phoneNumber: phoneNumber.current.value
        })
        .then(res=>{
            setMsg("contact addedd to List")
            setTimeout(()=>{
                closeRef.current.click();
                setMsg('')
            }, 2000);
        })
    }

    return (
        <>
         <div className="modal fade "  tabIndex="-1" role="dialog" id="exampleModalScrollable" aria-labelledby="exampleModalScrollable" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenteredScrollableTitle"> Add New Contact </h5>
                        <button ref={closeRef} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    { msg ? 
                    <div className="alert bg-white alert-success" role="alert">
                        <div className="iq-alert-text"> {msg} </div>
                    </div> : "" }
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="label-control"> Name </label>
                            <input type="text" className="form-control" name="name" placeholder="Enter Name ..." ref={name}  required />
                        </div>
                        <div className="form-group">
                            <label className="label-control"> Phone Number </label>
                            <input type="number" className="form-control" name="phoneNumber" placeholder="Enter Phone Number ..." ref={phoneNumber} required />
                        </div>
                        <div className="form-group">
                            <label className="label-control"> Email </label>
                            <input type="email" className="form-control" name="email" placeholder="Enter email ..." ref={email} required />
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
                </div>
            </div>
        </div>
        </>
    )
}

export default AddNewContact;