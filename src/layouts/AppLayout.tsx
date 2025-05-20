
import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/AppSidebar";

export default function AppLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 p-6">
          <div className="flex items-center mb-6">
            <SidebarTrigger />
            <div className="ml-4">
              <h1 className="text-2xl font-bold health-gradient-text">HealthHub</h1>
              <p className="text-sm text-muted-foreground">Your daily wellness companion</p>
            </div>
          </div>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
