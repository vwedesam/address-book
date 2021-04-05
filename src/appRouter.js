import { Route, BrowserRouter, Switch } from 'react-router-dom'
import ContactList from './components/contactList'
import editContact from './components/editContact'
import Login from './components/login'
import Profile from './components/profile'
import SignUp from './components/signup'
import Sidebar from './layouts/sidebar'

export const AppRouter = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} exact />
                <Route path="/signup" component={SignUp} exact />                    
                <Sidebar>
                    <Route path="/" component={ContactList} exact />
                    <Route path="/edit-contact" component={editContact} />
                    <Route path="/user-profile" component={Profile} />
                </Sidebar>
            </Switch>
        </BrowserRouter>
    )
}