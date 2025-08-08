import axiosInstance from "./api/aixosInstance";
import endpoints from "./api/endpoints";

const authModel = {
    async signIn({
        email, 
        password, 
        location = "" 
    }) {
        const response = await axiosInstance.post(endpoints.signIn, { 
            email, 
            password, 
            location 
        })
        return response.data; // { token, user }
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
        const response = await axiosInstance.post(endpoints.signUp, { 
            email, 
            password, 
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
            address,
            location
        });
        console.log(response)
        return response.data; // { token, user }
    },
    async forgotPassword({ email }) {
        const response = await axiosInstance.post(endpoints.forgotPassword, { email });
        return response.data; // { message }
    },
    async resetPassword({ token, newPassword }) {
        const response = await axiosInstance.post(endpoints.resetPassword, { token, newPassword })
        return response.data // { message }
    },
    async updateProfile({ 
        userId, 
        firstName,
        lastName,
        phoneNumber, 
        email,
        address,
        location, 
        password, }) {
        const response = await axiosInstance.put(endpoints.updateProfile(userId), { 
            firstName,
            lastName,
            phoneNumber,
            email, 
            address,
            location,
            password });
        return response.data; // { user }
    },
    async updatePassword({ userId, currentPassword, newPassword }) {
        const response = await axiosInstance.put(endpoints.updatePassword(userId), { currentPassword, newPassword });
        return response.data; // { message }
    },
}

export default authModel;