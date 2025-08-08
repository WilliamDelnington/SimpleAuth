import authModel from "../models/authModel";

const AuthController = {
    async signIn({ 
        email, 
        password,
        location = ""
    }) {
        try {
            const response = await authModel.signIn({ 
                email, 
                password,
                location
            });
            return { 
                success: true, 
                data: response 
            }; // { token, user }
        } catch (error) {
            return {
                success: false,
                error: error.message || 'Sign-in failed',
            };
        }
    },

    async signUp({ 
        email, 
        password, 
        firstName,
        lastName,
        phoneNumber,
        address,
        location = ""
    }) {
        try {
            const response = await authModel.signUp({ 
                email, 
                password, 
                firstName,
                lastName, 
                phoneNumber,
                address,
                location
            });
            return { 
                success: true, 
                data: response 
            }; // { token, user }
        } catch (error) {
            return {
                success: false,
                error: error.message || 'Sign-up failed',
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

    async resetPassword({ token, newPassword }) {
        try {
            const response = await authModel.resetPassword({ token, newPassword })
            return {
                success: true,
                data: response
            }
        } catch (error) {
            return {
                success: false,
                error: error.response?.data?.error || "Reset password failed"
            }
        }
    },

    async updateProfile({ 
        userId, 
        firstName,
        lastName,
        phoneNumber,
        email, 
        address,
        location,
        password 
    }) {
        try {
            const response = await authModel.updateProfile({ 
                userId, 
                firstName,
                lastName,
                phoneNumber,
                email, 
                address,
                location,
                password
            });
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