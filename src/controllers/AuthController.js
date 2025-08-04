import authModel from "../models/authModel";

const AuthController = {
    async signIn({ email, password }) {
        try {
            const response = await authModel.signIn({ email, password });
            return { 
                success: true, 
                data: response 
            }; // { token, user }
        } catch (error) {
            return {
                success: false,
                error: error.response?.data?.error || 'Sign-in failed',
            };
        }
    },

    async signUp({ email, password, name }) {
        try {
            const response = await authModel.signUp({ email, password, name });
            return { 
                success: true, 
                data: response 
            }; // { token, user }
        } catch (error) {
            return {
                success: false,
                error: error.response?.data?.error || 'Sign-up failed',
            };
        }
    },

    async forgotPassword({ email }) {
        try {
            const response = await authModel.forgotPassword({ email });
            return { 
                success: true, 
                data: response
            }; // { message }
        } catch (error) {
            return {
                success: false,
                error: error.response?.data?.message || 'Request failed',
            };
        }
    },

    async updateProfile({ userId, name, email }) {
        try {
            const response = await authModel.updateProfile({ userId, name, email });
            return { 
                success: true, 
                data: response 
            }; // { user }
        } catch (error) {
            return {
                success: false,
                error: error.response?.data?.message || 'Update failed',
            };
        }
    },

    async updatePassword({ userId, currentPassword, newPassword }) {
        try {
            const response = await authModel.updatePassword({
                userId,
                currentPassword,
                newPassword,
            });
            return { 
                success: true, 
                data: response 
            }; // { message }
        } catch (error) {
            return {
                success: false,
                error: error.response?.data?.error || 'Password update failed',
            };
        }
    },

    signOut() {
        localStorage.removeItem('token');
        return { 
            success: true, 
            data: null 
        };
    },
}

export default AuthController;