import { defineStore } from "pinia";

export const userStore=defineStore("auth",{
    state:()=>({
        user:null,
        token:null,
        isLogin:false
    }),
    actions:{
        setLogin(state:boolean){
            this.isLogin=state
        },
        logout(){
            this.user=null;
            this.token=null;
            this.isLogin=false;
        }

    }
})