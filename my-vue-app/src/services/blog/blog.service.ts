class BlogService{
    private api:AxiosInstance;
    constructor(apiService:AxiosInstance){
        this.api=apiService
    }
    async getBlog(data):Promise<any>{
        try {
            return await this.api.get("/post/get-post",{data})
        } catch (error) {
            return error
        }
    }
    async createBlog(data):Promise<any>{
        try {
            return await this.api.post("/post/create-post",{data},{
                headers: {
                    "Content-Type": "multipart/form-data", // Đảm bảo gửi đúng loại dữ liệu

                }
            })
        } catch (error) {
            return error
        }
    }
    async updateBlog(data):Promise<any>{
        try {
            return await this.api.put("/post/update-post",{data},{
                headers: {
                    "Content-Type": "multipart/form-data", // Đảm bảo gửi đúng loại dữ liệu

                }
            })
        } catch (error) {
            return error
        }
    }
    async deleteBlog(data):Promise<any>{
        try {
            return await this.api.delete("/post/delete-post",{data})
        } catch (error) {
            return error
        }
    }

    // save - post
    async getSaveBlog(data):Promise<any>{
        try {
            return await this.api.get("/post/save-post",{data})
        } catch (error) {
            return error
        }
    }
    

}

import type { AxiosInstance } from "axios";
import axiosClient from "../axios.config";
export default new BlogService(axiosClient)