
import React from "react";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface HealthMetricCardProps {
  title: string;
  value: number;
  maxValue: number;
  unit: string;
  icon: React.ReactNode;
  color: string;
}

export function HealthMetricCard({ title, value, maxValue, unit, icon, color }: HealthMetricCardProps) {
  const percentage = (value / maxValue) * 100;
  
  return (
    <Card className="health-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${color}`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold mb-2">
          {value}
          <span className="text-sm text-muted-foreground ml-1">{unit}</span>
        </div>
        <Progress value={percentage} className="h-2" />
        <p className="text-xs text-muted-foreground mt-2">
          {percentage.toFixed(0)}% of daily goal
        </p>
      </CardContent>
    </Card>
  );
}
