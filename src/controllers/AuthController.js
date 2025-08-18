import authModel from "../models/authModel";

const AuthController = {
    async signIn({ 
        emailPhoneNumber, 
        password,
        location = ""
    }) {
        try {
            const response = await authModel.signIn({ 
                emailPhoneNumber, 
                password,
                location
            });
            console.log(response)
            return { 
                success: true, 
                data: response 
            }; // { token, user }
        } catch (error) {
            console.error(error)
            return {
                success: false,
                error: error.response?.data?.message || 'Sign-in failed. Try again later.',
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
                error: error.response?.data?.message || 'Sign-up failed. Try again later.',
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
                error: error.response?.data?.message || 'Request failed. Try again later.',
            };
        }
    },

    async resetPassword({ token, uid, newPassword }) {
        try {
            const response = await authModel.resetPassword({ token, uid, newPassword })
            return {
                success: true,
                data: response
            }
        } catch (error) {
            return {
                success: false,
                error: error.response?.data?.message || "Reset password failed. Try again later."
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
            // console.log(response)
            return { 
                success: true, 
                data: response 
            }; // { user }
        } catch (error) {
            // console.error(error)
            return {
                success: false,
                error: error.response?.data?.error || 'Update profile failed. Try again later.',
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
                error: error.response?.data?.message || 'Password update failed. Try again later.',
            };
        }
    },

    signOut() {
        sessionStorage.removeItem('token');
        return { 
            success: true, 
            data: null 
        };
    },
}

export default AuthController;