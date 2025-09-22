import React from 'react'
import AuthContext from './AuthContext'

const AppProviders = ({ children }) => {
    return (
        <AuthContext>
            {children}
        </AuthContext>
    )
}

export default AppProviders