import { Route, BrowserRouter, Switch } from 'react-router-dom'
import ContactList from './components/contactList'
import EditContact from './components/editContact'
import LockScreen from './components/lockscreen'
import Login from './components/login'
import Profile from './components/profile'
import SignUp from './components/signup'
import Sidebar from './layouts/sidebar'
import ProtectedRoute from './middleware/protectedRoute'
import UnProtectedRoute from './middleware/unProtectedRoute'

export const AppRouter = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/lock-screen" component={LockScreen} />
                <UnProtectedRoute path="/login" exact>
                    <Login/>
                </UnProtectedRoute>
                <UnProtectedRoute path="/signup">
                    <SignUp/>
                </UnProtectedRoute>                    
                <Sidebar>
                    <ProtectedRoute path="/" exact >
                        <ContactList/>
                    </ProtectedRoute>
                    <ProtectedRoute path="/edit-contact/:contactId" >
                         <EditContact/>
                    </ProtectedRoute>
                    <ProtectedRoute path="/user-profile" >
                        <Profile/>
                    </ProtectedRoute>
                </Sidebar>
            </Switch>
        </BrowserRouter>
    )
}