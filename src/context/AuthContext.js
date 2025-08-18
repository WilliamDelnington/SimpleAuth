import React, { useState } from 'react'

export const AuthContext = React.createContext()

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(localStorage.getItem("token"))

    // useEffect(() => {
    //     if (token) {

    //     }
    // }, [token])

  return (
    <AuthContext.Provider value={{user, setUser, token, setToken}}>
        {children}
    </AuthContext.Provider>
  )
}
