import { apiClient, apiConfig } from "./client";

const sendOtp = (data: object) => {
	console.log(apiConfig.baseUrl + apiConfig.sendOtp, 'send otp');
	
	return apiClient.post(apiConfig.sendOtp, data);
};

export {sendOtp}