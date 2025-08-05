import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import AuthController from "../AuthController";

export function useAuth() {
    const {setUser, setToken} = useContext(AuthContext)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const signIn = async ({ email, password }) => {
        setLoading(true)
        setError("")
        try {
            const { success, data, error: errMsg } = await AuthController.signIn({ email, password });
            if (success) {
                setUser(data.user)
                setToken(data.token);
                localStorage.setItem('token', data.token);
                setError("")
            } else {
                console.error(errMsg)
                setError(errMsg)
            }
        } catch (err) {
            setError("Error sigining in: " + err.message)
        } finally {
            setLoading(false);
        }
    }

    const signUp = async ({ email, password, name }) => {
        setLoading(true)
        setError("")
        try {
            const { success, data, error: errMsg } = await AuthController.signUp({ email, password, name });
            if (success) {
                setUser(data.user);
                setToken(data.token);
                localStorage.setItem('token', data.token);
                setError("")
            } else {
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

    const resetPassword = async ({ token, newPassword }) => {
        setLoading(true)
        setError("")
        try {
            const { success, data, error: errMsg } = await AuthController.resetPassword({ token, newPassword })
            if (success) {
                setError("")
                return data.message
            } else {
                console.error(errMsg)
                setError(errMsg)
            }
        } catch (err) {
            setError("Error resetting password: " + err.message)
        } finally {
            setLoading(false)
        }
    }

    const updateProfile = async ({ userId, name, email }) => {
        setLoading(true)
        setError("")
        try {
            const { success, data, error: errMsg } = AuthController.updateProfile({ userId, name, email });
            if (success) {
                setUser(data.user)
                setError("")
            } else {
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