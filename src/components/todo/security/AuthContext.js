import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(false)

    const login = (username, password) => {
        if (username === 'in28minutes' && password === 'dummy') {
            setAuthenticated(true)
            return true
        } else {
            setAuthenticated(false)
            return false
        }
    }

    const logout = () => setAuthenticated(false);

    const valueToBeShared = { isAuthenticated, login, logout }

    return (
        <AuthContext.Provider value={valueToBeShared}>
            {children}
        </AuthContext.Provider>
    )
}