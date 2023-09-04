import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)

    const login = (username, password) => {
        if (username === 'in28minutes' && password === 'dummy') {
            setAuthenticated(true)
            setUsername(username)
            return true
        } else {
            setAuthenticated(false)
            return false
        }
    }

    const logout = () => setAuthenticated(false);

    const valueToBeShared = { isAuthenticated, login, logout, username }

    return (
        <AuthContext.Provider value={valueToBeShared}>
            {children}
        </AuthContext.Provider>
    )
}