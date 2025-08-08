const endpoints = {
  signIn: '/signin',
  signUp: '/signup',
  forgotPassword: '/forgot-password',
  resetPassword: "/reset-password",
  refreshToken: "/token/refresh",
  updateProfile: (userId) => `/users/${userId}/update`,
  updatePassword: (userId) => `/update-password`,
};

export default endpoints;