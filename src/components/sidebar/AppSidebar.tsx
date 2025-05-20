
import React from "react";
import { Link } from "react-router-dom";
import { Heart, Activity, Calendar, PieChart, User, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: <Activity className="h-5 w-5" />
  },
  {
    title: "Wellness Tracking",
    path: "/tracking",
    icon: <Heart className="h-5 w-5" />
  },
  {
    title: "Goals",
    path: "/goals",
    icon: <PieChart className="h-5 w-5" />
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: <Calendar className="h-5 w-5" />
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <User className="h-5 w-5" />
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <Settings className="h-5 w-5" />
  }
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="px-6 py-5">
        <Link to="/" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-health-primary" />
          <span className="font-bold text-xl health-gradient-text">HealthHub</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link 
                      to={item.path} 
                      className="flex items-center gap-3"
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-health-primary flex items-center justify-center text-white font-bold">
            U
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Guest User</p>
            <p className="text-xs text-muted-foreground">Connect with Supabase</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
