import type { AxiosInstance } from "axios";

class AuthService{
    private api:AxiosInstance;
    constructor(axiosClient:AxiosInstance){
        this.api = axiosClient;
    }
    async login(dataLogin){
        try {
            const loginResponse=await this.api.post('/auth/login',dataLogin);
            return loginResponse.data;
        } catch (error) {
            
        }
    }
    async register(dataRegister){
        try {
            const registerResponse=await this.api.post('/auth/register',dataRegister);
            return registerResponse.data;
        } catch (error) {
            
        }
    }
    async verifyOTP(data){
        try {
            const verifyResponse=await this.api.post('/auth/verify-otp',data);
            return verifyResponse.data;
        } catch (error) {
            
        }
    }
    async verifyEmail(data){
        try {
            const verifyEmailResponse=await this.api.post('/auth/verify-email',data);
            return verifyEmailResponse.data;
        } catch (error) {
            
        }
    }

}
import axiosClient from "../axios.config";
export default new AuthService(axiosClient);
