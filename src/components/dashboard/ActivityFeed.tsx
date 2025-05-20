
import React from "react";
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Activity, Heart, Coffee, Check } from "lucide-react";

// Mock activity data
const activities = [
  {
    id: 1,
    type: "exercise",
    title: "Morning Run",
    time: "07:30 AM",
    icon: <Activity className="h-4 w-4" />,
    iconBg: "bg-health-secondary text-white"
  },
  {
    id: 2,
    type: "meditation",
    title: "Meditation Session",
    time: "08:15 AM",
    icon: <Heart className="h-4 w-4" />,
    iconBg: "bg-health-primary text-white"
  },
  {
    id: 3,
    type: "meal",
    title: "Healthy Breakfast",
    time: "09:00 AM",
    icon: <Coffee className="h-4 w-4" />,
    iconBg: "bg-health-accent text-white"
  },
  {
    id: 4,
    type: "goal",
    title: "Step Goal Reached",
    time: "11:45 AM",
    icon: <Check className="h-4 w-4" />,
    iconBg: "bg-green-500 text-white"
  }
];

export function ActivityFeed() {
  return (
    <Card className="health-card">
      <CardHeader>
        <CardTitle>Today's Activities</CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        <div className="space-y-6 relative before:absolute before:left-[17px] before:top-0 before:h-full before:w-[1px] before:bg-gray-100">
          {activities.map((activity) => (
            <div key={activity.id} className="relative flex gap-3 pl-2">
              <div className={`h-8 w-8 rounded-full flex items-center justify-center z-10 ${activity.iconBg}`}>
                {activity.icon}
              </div>
              <div className="flex-1 pt-1">
                <p className="font-medium">{activity.title}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
