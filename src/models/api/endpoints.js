const endpoints = {
  signIn: '/signin',
  signUp: '/signup',
  forgotPassword: '/forgot-password',
  updateProfile: (userId) => `/users/${userId}`,
  updatePassword: (userId) => `/users/${userId}/password`,
};

export default endpoints;