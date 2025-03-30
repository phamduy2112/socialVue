import { idText } from "typescript";
import { HomeIcon, UserIcon, CogIcon } from "@heroicons/vue/24/solid"; // Import biểu tượng từ Heroicons

export const navbarData=[
    {
        id:1,
        title:"Dashboard",
        icon: HomeIcon // Lưu cả component vào object
    },
    {
        id:2,
        title:"Friends",
        icon: UserIcon
    },
    {
        id:3,
        title:"Save Post",
        icon: CogIcon
    },
    {
        id:4,
        title:"Setting",
        icon: CogIcon
    }
]

export const addFriendNavbar=[
    {
        id:1,
        title:"Lời mời kết bạn",
        describe:"pending"
    },
    {
        id:2,
        title:"Gợi ý bạn bè",
        describe:"suggestion"

    },
    {
        id:3,
        title:"Bạn Bè",
        describe:"friend"

    },
]