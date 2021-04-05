import { createContext, useContext } from 'react';

const ContactContext = createContext();

export function ContactProvider({ children }){
    return (
        <ContactContext.Provider>
            {children}
        </ContactContext.Provider>
    )
}

export function useContactContext(){
    return useContext(ContactContext);
}
