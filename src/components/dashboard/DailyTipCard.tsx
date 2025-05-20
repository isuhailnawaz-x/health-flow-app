
import React from "react";
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

interface Tip {
  title: string;
  content: string;
}

const tips: Tip[] = [
  {
    title: "Hydration Reminder",
    content: "Aim to drink at least 8 glasses of water today. Staying hydrated improves energy levels and brain function."
  },
  {
    title: "Movement Break",
    content: "Take a 5-minute break every hour to stretch or walk. Brief movement breaks boost productivity and reduce muscle tension."
  },
  {
    title: "Mindful Breathing",
    content: "Practice deep breathing for 2 minutes. Breathe in for 4 counts, hold for 4, and exhale for 6 to reduce stress."
  },
  {
    title: "Nutrition Tip",
    content: "Include a source of protein with each meal to maintain stable energy levels throughout the day."
  },
  {
    title: "Sleep Hygiene",
    content: "Limit screen time 1 hour before bedtime to improve sleep quality and fall asleep faster."
  }
];

export function DailyTipCard() {
  // Get a random tip
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  
  return (
    <Card className="health-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-health-accent" />
          Daily Wellness Tip
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h4 className="font-semibold text-lg mb-2">{randomTip.title}</h4>
        <p className="text-muted-foreground">{randomTip.content}</p>
      </CardContent>
    </Card>
  );
}
