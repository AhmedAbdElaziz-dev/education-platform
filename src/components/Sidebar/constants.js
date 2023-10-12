import {
  HomeIcon,
  MagnifyingGlassIcon,
  PlayCircleIcon,
  BookmarkIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

export const sidebarItems = [
  {
    icon: HomeIcon,
    label: "home",
    to: "/",
  },
  {
    icon: MagnifyingGlassIcon,
    label: "search",
    to: "/search",
  },
  {
    icon: PlayCircleIcon,
    label: "courses",
    to: "/courses",
  },
  {
    icon: BookmarkIcon,
    label: "saved",
    to: "/saved",
  },
  {
    icon: UserIcon,
    label: "profile",
    to: "/profile",
  },
];
