import { Route, BrowserRouter, Switch } from 'react-router-dom'
import ContactList from './components/contactList'
import EditContact from './components/editContact'
import LockScreen from './components/auth/lockscreen'
import Login from './components/auth/login'
import Profile from './components/profile'
import SignUp from './components/auth/signup'
import Sidebar from './layouts/sidebar'
import ProtectedRoute from './middleware/protectedRoute'
import UnProtectedRoute from './middleware/unProtectedRoute'
import NotFound from './components/notFound'
import LogOut from './components/auth/logout'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/lock-screen" component={LockScreen} exact />
                <UnProtectedRoute path="/login" exact>
                    <Login />
                </UnProtectedRoute>
                <UnProtectedRoute path="/signup">
                    <SignUp />
                </UnProtectedRoute>
                <Sidebar>
                    <ProtectedRoute path="/" exact >
                        <ContactList />
                    </ProtectedRoute>
                    <ProtectedRoute path="/edit-contact/:contactId" >
                        <EditContact />
                    </ProtectedRoute>
                    <ProtectedRoute path="/user-profile" >
                        <Profile />
                    </ProtectedRoute>
                    <Route path="/logout">
                        <LogOut />
                    </Route>
                    <Route component={NotFound} exact />
                </Sidebar>
            </Switch>
        </BrowserRouter>
    )
}