<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHouse, faBell, faEnvelope, faBookmark, faUser, faCompass } from "@fortawesome/free-solid-svg-icons";

export interface NavigationItem {
  title: string;
  path: string;
  icon: any;
  update?: { status: boolean; count: number };
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    title: "Home",
    update: { status: true, count: 1 },
    icon: faHouse,
    path: "/",
  },
  {
    title: "Notifications",
    update: { status: true, count: 12 },
    icon: faBell,
    path: "/notifications",
  },
  {
    title: "Messages",
    icon: faEnvelope,
    path: "/messages",
  },
  {
    title: "Bookmarks",
    icon: faBookmark,
    path: "/bookmarks",
  },
  {
    title: "Profile",
    icon: faUser,
    path: "/users/1",
  },
  {
    title: "Explore",
    icon: faCompass,
    path: "/explore",
  },
];

</script>
