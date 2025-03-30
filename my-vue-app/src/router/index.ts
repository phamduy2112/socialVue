import { createRouter, createWebHistory } from 'vue-router';

// Import các component chính
import Home from '../views/Home.vue';
import AddFriend from '../views/friend/AddFriend.vue';
import TemplateClient from '../layouts/TemplateClient.vue';
class AppRouter {
  private static instance:any=null;
  private contructor(){}

  public static getInstance():any{
    const routes:any[]=[
      {
        path: '/',
        component: TemplateClient,
        children: [
          {
            path: '',
            component: Home
          },
          {
            path: 'add-friend',
            component: AddFriend
          }
        ]
      }
    ]
    AppRouter.instance=createRouter({
      history: createWebHistory(),
      routes
    });
    return AppRouter.instance;
  }
}
export default AppRouter.getInstance();