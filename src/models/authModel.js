import axiosInstance from "./api/aixosInstance";
import endpoints from "./api/endpoints";

const authModel = {
    async signIn({email, password}) {
        const response = await axiosInstance.post(endpoints.signIn, {email, password})
        return response.data; // { token, user }
    },
    async signUp({ email, password, name }) {
        const response = await axiosInstance.post(endpoints.signUp, { email, password, name });
        return response.data; // { token, user }
    },
    async forgotPassword({ email }) {
        const response = await axiosInstance.post(endpoints.forgotPassword, { email });
        return response.data; // { message }
    },
    async updateProfile({ userId, name, email }) {
        const response = await axiosInstance.put(endpoints.updateProfile(userId), { name, email });
        return response.data; // { user }
    },
    async updatePassword({ userId, currentPassword, newPassword }) {
        const response = await api.put(endpoints.updatePassword(userId), { currentPassword, newPassword });
        return response.data; // { message }
    },
}

export default authModel;