import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
} from "lucide-react";
import type { NavItem } from "@/types/dashboard";

export const sidebarNavConfig: NavItem[] = [
  { title: "Home", url: "/", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox, badge: 24 },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
];

export const SIDEBAR_USER_EMAIL_DEFAULT = "uwana.favy@gmail.com";
