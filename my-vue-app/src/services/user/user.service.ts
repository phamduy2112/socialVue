import type { AxiosInstance } from "axios";

class UserService{
    private api:AxiosInstance;
    constructor(apiService:AxiosInstance){
        this.api=apiService
    }
    async getUser(){
        try {
            return await this.api.get("/user/get-user-by-id")
        } catch (error) {
            return error
        }
    }
    async updateUser(data){
        try {
            return await this.api.put("/user/update-user",{data})
        } catch (error) {
            
        }
    }
    async updateImage(data){
        try {
            return await this.api.post("/user/upload-img",{data},
            { headers: {
                "Content-Type": "multipart/form-data", // Đảm bảo gửi đúng loại dữ liệu
              },
            }
            )
        } catch (error) {
            
        }
    }
}

import axiosClient from "../axios.config";
export default new UserService(axiosClient);