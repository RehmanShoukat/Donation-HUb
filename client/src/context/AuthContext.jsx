import React, { useState, useEffect, useCallback, createContext, useContext, useReducer } from 'react'
import axios from 'axios';

const AuthContext = createContext();

const initialState = { isAuth: false, isSuperAdmin: false, user: {} }

const reducer = (state, { type, payload }) => {

    switch (type) {
        case "SET_LOGGED_IN":
            const { user } = payload
            const roles = Array.isArray(user.roles)? user.roles: typeof user.roles === "string"? [user.roles]: [];
            const isSuperAdmin = roles.includes("superAdmin")
            const isOwner = roles.includes("owner")
            const isSuperAdminOrOwner = roles.some(role => ['superAdmin', 'owner'].includes(role))
            return { ...state, isAuth: true, user, isSuperAdmin, isOwner, isSuperAdminOrOwner }
        case "SET_PROFILE":
            return { ...state, ...payload }
        case "SET_LOGGED_OUT":
            return initialState
        default:
            return state
    }
}
// const reducer = (state, { type, payload }) => {

//     switch (type) {
//         case "SET_LOGGED_IN":
//             const { user } = payload
//             const isSuperAdmin = user.roles.includes("superAdmin")
//             const isOwner = user.roles.includes("owner")
//             const isSuperAdminOrOwner = user.roles.some(role => ['superAdmin', 'owner'].includes(role))
//             return { ...state, isAuth: true, user, isSuperAdmin, isOwner, isSuperAdminOrOwner }
//         case "SET_PROFILE":
//             return { ...state, ...payload }
//         case "SET_LOGGED_OUT":
//             return initialState
//         default:
//             return state
//     }
// }

export default function Auth({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [isAppLoading, setIsAppLoading] = useState(true)

    const getApiConfig = () => {
        const token = localStorage.getItem("jwt")
        const config = { headers: { Authorization: `Bearer ${token}` } }
        return config
    }

    const readUserProfile = useCallback(data => {

        const { token } = data
        const config = { headers: { Authorization: `Bearer ${token}` } }
        axios.get(`${window.api}/auth/user`, config)
            .then(res => {
                let { data, status } = res
                if (status === 200) {
                    let user = { ...data.user }
                    dispatch({ type: "SET_LOGGED_IN", payload: { user } })
                }
            })
            .catch(error => {
                // console.error('error', error)
                localStorage.removeItem("jwt")
            })
            .finally(() => {
                setIsAppLoading(false)
            })
    }, [])
    useEffect(() => {
        let token = localStorage.getItem("jwt")
        if (token) { readUserProfile({ token }) }
        else { setTimeout(() => setIsAppLoading(false), 500); }
    }, [readUserProfile])

    const handleLogout = () => {
        localStorage.removeItem("jwt")
        dispatch({ type: "SET_LOGGED_OUT" })
        window.toastify("Logout successful", "success")
    }
    // const handleLogoutWithAPI = () => {
    //     axios.post(`${window.api}/auth/logout`, {}, getApiConfig())
    //         .then(res => {
    //             let { data, status } = res
    //             if (status === 200) {
    //                 window.toastify(data.message, "success")
    //                 localStorage.removeItem("jwt")
    //                 dispatch({ type: "SET_LOGGED_OUT" })
    //             }
    //         })
    //         .catch(error => {
    //             // console.error('error', error)
    //             window.toastify("Something went wrong", "error")
    //         })
    // }

    return (
        <AuthContext.Provider value={{ ...state, dispatch, isAppLoading, handleLogout, readUserProfile, getApiConfig }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)