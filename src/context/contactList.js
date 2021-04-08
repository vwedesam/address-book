import { createContext, useContext } from 'react';
import firebase, { db } from '../firebase';


const ContactContext = createContext();
const dbName = "contactList";
const limit = 2;

export function ContactProvider({ children }){

    const getContactlist = (userId) =>{
        return db.collection(dbName).where('userId', '==', userId)
    }

    const addToContactList = (userId, body) =>{
        body.createdAt = Date.now();
        return db.collection(dbName).add({
           ...body,
           userId
        })
    }

    const getContact = (contactId) =>{
        return db.collection(dbName).doc(contactId).get()
    }

    const updateContact = (contactId, body) =>{
        return db.collection(dbName).doc(contactId).update({...body})
    }

    const deleteContact = (contactId) =>{
        return db.collection(dbName).doc(contactId).delete()
    }

    const onHandleSearch = (q) =>{
        return db.collection(dbName).where('name', '==', q).get()
    }

    return (
        <ContactContext.Provider value={{
            addToContactList,
            getContactlist,
            getContact,
            onHandleSearch,
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
