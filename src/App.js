import { AppRouter } from "./appRouter"
import { AuthProvider } from "./context/auth";
import { ContactProvider } from "./context/contactList";

function App() {
  return (
    <div className="wrapper">
        <AuthProvider>
            <ContactProvider>
                <AppRouter/>
            </ContactProvider>
        </AuthProvider>
    </div>
  );
}

export default App;
