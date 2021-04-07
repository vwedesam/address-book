import { useRef } from "react";


function Delete({contactUID, userId, deleteContact}) {

    const closeRef = useRef();

    const handleDelete = async () =>{
        if(contactUID){
            deleteContact(userId, contactUID);
            closeRef.current.click();
        }
    }

    return (
        <>
            <div className="modal fade " tabIndex="-1" role="dialog" id="deleteContact" aria-labelledby="deleteContact" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="text-center"><i className="fas fa-exclamation-triangle fa-7x"></i></div>
                            <div className="text-center mt-1" style={{ color: 'maroon'}}> Are you sure? </div>
                            <div className="text-center mt-2" style={{ color: 'maroon'}}> You won't be able to revert this! </div>
                            <div className="text-center mt-2">
                                <button onClick={handleDelete} type="button" className="btn btn-primary ml-1">
                                    <svg width="20" className="svg-icon" id="new-note-save" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" style={{ strokeDasharray: "70px, 90px", strokeDashoffset: "80px" }}></path>
                                    </svg>
                                    Yes Delete it !
                                </button>
                                <button ref={closeRef} type="button" className="btn btn-outline-primary ml-1" data-dismiss="modal" aria-label="Close">
                                    <svg width="20" className="svg-icon" id="new-note-save" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" style={{ strokeDasharray: "70px, 90px", strokeDashoffset: "80px" }}></path>
                                    </svg>
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Delete;