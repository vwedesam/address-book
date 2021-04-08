import { NavLink } from "react-router-dom";


function ListTable({ contactList, userId, handleDelete }) {
    return (
        <>
            {
                contactList.length > 0 ?
                    contactList.map((contact, index) =>
                        <tr key={index}>
                            <td className="text-center">{index + 1}</td>
                            <td> {contact.name} </td>
                            <td> {contact.phoneNumber} </td>
                            <td> {contact.email} </td>
                            <td>
                                <div className="flex align-items-center list-user-action">
                                    <NavLink className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="edut" data-original-title="Edit" to={`edit-contact/${contact.uid}`}><i className="fas fa-edit"></i></NavLink>
                                    <button style={{ border: 'solid 0px' }} onClick={() => handleDelete(contact.uid)} className="iq-bg-primary" title="Delete" > &nbsp; <i className="fas fa-trash"></i></button>
                                </div>
                            </td>
                        </tr>
                    )
                    :<tr><td>contact List is empty</td></tr>
            }
        </>
    )
}


export default ListTable;