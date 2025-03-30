import type { AxiosInstance } from "axios";

class CommentService{
 private apiResponse:AxiosInstance;
 constructor(apiAxiosInstance: AxiosInstance){
    this.apiResponse=apiAxiosInstance
 }   
    async getComment(data):Promise<any>{
        try {
            return await this.apiResponse.get("/comment/get-comment",{data})
        } catch (error) {
            return error
        }
    }
}

import axiosClient from "../axios.config";
export default new CommentService(axiosClient)