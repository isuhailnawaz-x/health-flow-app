
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle } from "lucide-react";

interface Goal {
  id: number;
  title: string;
  target: number;
  current: number;
  unit: string;
  category: string;
}

interface GoalProgressCardProps {
  goal: Goal;
}

export function GoalProgressCard({ goal }: GoalProgressCardProps) {
  const progress = Math.min(100, Math.round((goal.current / goal.target) * 100));
  
  // Determine color based on progress
  const getProgressColor = () => {
    if (progress >= 100) return "bg-green-500";
    if (progress >= 70) return "bg-health-primary";
    if (progress >= 40) return "bg-health-secondary";
    return "bg-health-accent";
  };
  
  return (
    <Card className="health-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex justify-between">
          <span>{goal.title}</span>
          <span className="text-sm bg-gray-100 px-2 py-1 rounded">{goal.category}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">
              {goal.current} of {goal.target} {goal.unit}
            </span>
            <span className="text-sm font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className={`h-2 ${getProgressColor()}`} />
        </div>
        
        <div className="space-y-2">
          {Array.from({ length: 5 }, (_, i) => {
            const milestone = (goal.target / 5) * (i + 1);
            const achieved = goal.current >= milestone;
            return (
              <div key={i} className="flex items-center gap-2">
                {achieved ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : (
                  <Circle className="h-5 w-5 text-gray-300" />
                )}
                <span className={`text-sm ${achieved ? 'text-gray-700' : 'text-gray-400'}`}>
                  {Math.round(milestone)} {goal.unit}
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
