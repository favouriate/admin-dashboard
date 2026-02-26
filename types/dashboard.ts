import type { LucideIcon } from "lucide-react";

export type Todo = {
  id: string;
  label: string;
  checked: boolean;
};

export type CardListItem = {
  id: number;
  title: string;
  badge: string;
  image: string;
  count: number;
};

export type NavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  badge?: number;
};
