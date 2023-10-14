// https://github.com/victorkvarghese/react-native-boilerplate
import axios from "axios";
import apiConfig from "../constant/api-config";

const apiClient = axios.create({
	baseURL: apiConfig.baseUrl,
	responseType: "json",
	
	timeout: 50000,
	headers: {
		language_code: 'en',
		version_number:"1.0.0",
		"Content-Type": "application/json",
		"accept": "application/json, text/plain, */*",
		// "Content-Type": " multipart/form-data",
	},
});

// apiClient.interceptors.response.use(
// 	function (res) {
// 	  // if(res?.data?.error_code === undefined  res?.data?.error_code === null  res?.data?.error_code.length === 0){
// 		   if (!res?.data?.success) {
// 		let errorObject = {
// 		  error: res?.data?.message  "",
// 		  headers: res.config.headers,
// 		  url: res.request.responseURL,
// 		  platform: Platform.OS,
// 		  payload: res?.config?.data  "",
// 		};
// 		let errorParams = {
// 		  error_message: JSON.stringify(errorObject),
// 		};
// 		interceptorsError(errorParams);
// 		let result = {
// 			message: res?.data?.message ||
// 			  "",
// 			success: false,
// 		};
// 		return result;
// 	  } else {
// 		return res.data.response;
// 	  }
// 	  // }else {
// 	  //  // return res.data.response;
// 	  // }
   
// 	},
// 	function (error) {
// 	  let errorObject = {
// 		error: error.message,
// 		platform: Platform.OS,
// 		headers: error.config.headers,
// 		statusCode: error.response.status,
// 		url: error.config.baseURL + error.config.url,
// 	  };
  
// 	  interceptorsError(errorObject);
  
// 	  return Promise.reject(error);
// 	}
//   );

export { apiClient, apiConfig };
