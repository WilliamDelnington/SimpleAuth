import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import authModel from "../../models/authModel";

export function useAuth() {
    const [setUser, setToken] = useContext(AuthContext)
    const signIn = async ({ email, password }) => {
        await authModel.signIn({ email, password });
        setToken(token);
        localStorage.setItem('token', token);
    }

    const signUp = async ({ email, password, name }) => {
        await authModel.signUp({ email, password, name });
        setUser(user);
        setToken(token);
        localStorage.setItem('token', token);
    };

    const forgotPassword = async ({ email }) => {
        await authModel.forgotPassword({ email });
        return response.message;
    };

    const updateProfile = async ({ userId, name, email }) => {
        await authModel.updateProfile({ userId, name, email });
        setUser(user);
    };

    const updatePassword = async ({ userId, currentPassword, newPassword }) => {
        await authModel.updatePassword({ userId, currentPassword, newPassword });
        return response.message;
    }

    const signOut = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
    };

    return { signIn, signUp, forgotPassword, updateProfile, signOut, updatePassword }
}