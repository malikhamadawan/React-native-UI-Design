import {ENDPOINTS, HTTP_CLIENT, BASE_URL} from '../exporter';

export const companySignup = params => {
  return HTTP_CLIENT.post(ENDPOINTS.SIGNUP_COMPANY, params);
};

export const repSignup = params => {
  return HTTP_CLIENT.post(ENDPOINTS.SIGNUP_REP, params);
};

export const requestCompanyLogin = async params => {
  return HTTP_CLIENT.post(ENDPOINTS.LOGIN_COMPANY, params, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const requestRepLogin = params => {
  return HTTP_CLIENT.post(ENDPOINTS.LOGIN_REP, params);
};

export const companyLogout = () => {
  return HTTP_CLIENT.delete(ENDPOINTS.LOGOUT_COMPANY);
};

export const repLogout = () => {
  return HTTP_CLIENT.delete(ENDPOINTS.LOGOUT_REP);
};

export const accountVerification = (params, userType) => {
  if (userType === 'Company') {
    return HTTP_CLIENT.post('company' + ENDPOINTS.VERIFY_ACCOUNT, params);
  } else {
    return HTTP_CLIENT.post('user' + ENDPOINTS.VERIFY_ACCOUNT, params);
  }
};

export const resendingOTP = (params, userType) => {
  if (userType === 'Company') {
    return HTTP_CLIENT.post('company' + ENDPOINTS.FORGOT_PASSWORD, params);
  } else {
    return HTTP_CLIENT.post('user' + ENDPOINTS.FORGOT_PASSWORD, params);
  }
};

export const forgotPassword = (params, userType) => {
  if (userType === 'Company') {
    return HTTP_CLIENT.post('company' + ENDPOINTS.FORGOT_PASSWORD, params);
  } else {
    return HTTP_CLIENT.post('user' + ENDPOINTS.FORGOT_PASSWORD, params);
  }
};

export const verifyForgotPasswordOtp = (params, userType) => {
  if (userType === 'Company') {
    return HTTP_CLIENT.post(
      'company' + ENDPOINTS.VERIFY_FORGOT_PASS_OTP,
      params,
    );
  } else {
    return HTTP_CLIENT.post('user' + ENDPOINTS.VERIFY_FORGOT_PASS_OTP, params);
  }
};

export const resetPassword = (params, userType) => {
  if (userType === 'Company') {
    return HTTP_CLIENT.post('company' + ENDPOINTS.RESET_PASS, params);
  } else {
    return HTTP_CLIENT.post('user' + ENDPOINTS.RESET_PASS, params);
  }
};

export const socialLogins = params => {
  return HTTP_CLIENT.post(ENDPOINTS.SOCIAL_LOGIN, params);
};

