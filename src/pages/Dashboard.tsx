
import React from "react";
import { Heart, Activity, Bed, Coffee } from "lucide-react";
import { HealthMetricCard } from "@/components/dashboard/HealthMetricCard";
import { WellnessScoreCard } from "@/components/dashboard/WellnessScoreCard";
import { DailyTipCard } from "@/components/dashboard/DailyTipCard";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Welcome Back!</h2>
        <p className="text-muted-foreground">Here's your health overview for today</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <HealthMetricCard 
          title="Steps" 
          value={6540} 
          maxValue={10000} 
          unit="steps" 
          icon={<Activity className="h-4 w-4" />} 
          color="bg-health-primary text-white"
        />
        <HealthMetricCard 
          title="Water" 
          value={4} 
          maxValue={8} 
          unit="glasses" 
          icon={<Coffee className="h-4 w-4" />} 
          color="bg-health-secondary text-white"
        />
        <HealthMetricCard 
          title="Sleep" 
          value={7} 
          maxValue={8} 
          unit="hours" 
          icon={<Bed className="h-4 w-4" />} 
          color="bg-purple-500 text-white"
        />
        <HealthMetricCard 
          title="Exercise" 
          value={25} 
          maxValue={60} 
          unit="minutes" 
          icon={<Heart className="h-4 w-4" />} 
          color="bg-health-accent text-white"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <WellnessScoreCard score={75} />
        </div>
        <div className="lg:col-span-1">
          <DailyTipCard />
        </div>
        <div className="lg:col-span-1">
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}
