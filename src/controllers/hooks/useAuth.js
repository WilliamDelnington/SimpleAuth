import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import AuthController from "../AuthController";

export function useAuth() {
    const {setUser, setToken} = useContext(AuthContext)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const signIn = async ({ 
        emailPhoneNumber, 
        password, 
        location = "" 
    }) => {
        setLoading(true)
        setError("")
        try {
            const { success, data, error: errMsg } = await AuthController.signIn({ 
                emailPhoneNumber, 
                password, 
                location
            });
            if (success) {
                setUser(data.user)
                setToken(data.tokens);
                sessionStorage.setItem('token', data.tokens.access);
                localStorage.setItem('refresh_token', data.tokens.refresh)
                setError("")
            } else {
                // console.error(errMsg)
                setError(errMsg)
            }
        } catch (err) {
            setError("Error sigining in: " + err.message)
        } finally {
            setLoading(false);
        }
    }

    const signUp = async ({ 
        email, 
        password, 
        firstName,
        lastName,
        phoneNumber,
        address,
        location = ""
    }) => {
        setLoading(true)
        setError("")
        try {
            const { success, data, error: errMsg } = await AuthController.signUp({ 
                email, 
                password, 
                firstName,
                lastName,
                phoneNumber,
                address,
                location
            });
            if (success) {
                console.log("Signed up successfully.")
                setUser(data.user);
                setToken(data.tokens);
                sessionStorage.setItem('token', data.tokens.access);
                localStorage.setItem('refresh_token', data.tokens.refresh)
                setError("")
            } else {
                console.error("Error signing up: ", errMsg)
                setError(errMsg)
            }
        } catch (err) {
            setError("Error signing up: " + err.message)
        } finally {
            setLoading(false)
        }
    };

    const forgotPassword = async ({ email }) => {
        setLoading(true)
        setError("")
        try {
            const { success, data, error: errMsg } = await AuthController.forgotPassword({ email });
            if (success) {
                setError("")
                return data.message
            } else {
                setError(errMsg)
            }
        } catch (err) {
            setError("Error requesting password reset: " + err.message)
        } finally {
            setLoading(false)
        }
    };

    const resetPassword = async ({ token, uid, newPassword }) => {
        setLoading(true)
        setError("")
        try {
            const { success, data, error: errMsg } = await AuthController.resetPassword({ token, uid, newPassword })
            if (success) {
                setError("")
                return data.message
            } else {
                // console.error(errMsg)
                setError(errMsg)
            }
        } catch (err) {
            setError("Error resetting password: " + err.message)
        } finally {
            setLoading(false)
        }
    }

    const updateProfile = async ({ 
        userId, 
        firstName, 
        lastName,
        phoneNumber,
        email, 
        address,
        location,
        password 
    }) => {
        setLoading(true)
        setError("")
        try {
            const { success, data, error: errMsg } = await AuthController.updateProfile({ 
                userId, 
                firstName,
                lastName,
                phoneNumber, 
                email, 
                address,
                location,
                password 
            });
            if (success) {
                setUser(data.user)
                setError("")
            } else {
                // console.error(errMsg)
                setError(errMsg)
            }
        } catch (err) {
            setError("Error updating profile: " + err.message)
        } finally {
            setLoading(false)
        }
    };

    const updatePassword = async ({ userId, currentPassword, newPassword }) => {
        setLoading(true)
        setError("")
        try {
        const { success, data, error: errMsg } = await AuthController.updatePassword({
            userId,
            currentPassword,
            newPassword,
        });
        console.log(success, data, errMsg)
        if (success) {
            setError(null);
            return data.message;
        } else {
            setError(errMsg);
        }
        } catch (err) {
            setError("Error updating password: " + err.message)
        } finally {
            setLoading(false);
        }
    }

    const signOut = () => {
        AuthController.signOut()
        setUser(null);
        setToken(null);
    };

    return { signIn, signUp, forgotPassword, updateProfile, signOut, updatePassword, error, loading, resetPassword }
}