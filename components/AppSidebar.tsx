import Link from "next/link";
import Image from "next/image";
import { Sidebar, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from "./ui/sidebar";
import { SidebarNav } from "./sidebar/SidebarNav";
import { SidebarFooterComponent } from "./sidebar/SidebarFooter";

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Image src="/logo.png" alt="logo" width={20} height={20} />
                <span>Admin Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarNav />
      <SidebarFooterComponent />
    </Sidebar>
  );
};

export default AppSidebar;
