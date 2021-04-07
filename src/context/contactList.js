import { createContext, useContext } from 'react';
import { db } from '../firebase';


const ContactContext = createContext();
const dbName = "contactList"

export function ContactProvider({ children }){

    const getContactlist = (userId) =>{
        return db.ref(`${dbName}/${userId}`).orderByChild("createdAt");
    }

    const addToContactList = (userId, body) =>{
        body.createdAt = Date.now();
        return db.ref(`${dbName}/${userId}`).push({...body});
    }

    const getContact = (userId) =>{
        return db.ref(`${dbName}/${userId}`).get()
    }

    const updateContact = (userId, contactId, body) =>{
        return db.ref(`${dbName}/${userId}/${contactId}`).update({...body})
    }

    const deleteContact = (userId, contactId) =>{
        return db.ref(`${dbName}/${userId}/${contactId}`).remove()
    }

    return (
        <ContactContext.Provider value={{
            addToContactList,
            getContactlist,
            getContact,
            updateContact,
            deleteContact
        }}>
            {children}
        </ContactContext.Provider>
    )
}

export function useContactContext(){
    return useContext(ContactContext);
}
