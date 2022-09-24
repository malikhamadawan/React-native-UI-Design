import {ENDPOINTS, HTTP_CLIENT} from '../exporter';

export const getIndustryList = params => {
  if (params == 'Company') {
    return HTTP_CLIENT.post('company' + ENDPOINTS.INDUSTRY_LIST);
  } else {
    return HTTP_CLIENT.post('user' + ENDPOINTS.INDUSTRY_LIST);
  }
};

export const selectingIndustry = (params, user) => {
  if (user == 'Company') {
    return HTTP_CLIENT.post('company' + ENDPOINTS.SELECT_INDUSTRY, params);
  } else {
    return HTTP_CLIENT.post('user' + ENDPOINTS.SELECT_INDUSTRY, params);
  }
};
