
import React from "react";
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Heart } from "lucide-react";

interface WellnessScoreCardProps {
  score: number;
}

export function WellnessScoreCard({ score }: WellnessScoreCardProps) {
  // Determine color based on score
  const getScoreColor = () => {
    if (score >= 80) return "text-health-primary";
    if (score >= 60) return "text-health-secondary";
    return "text-health-accent";
  };

  // Determine message based on score
  const getMessage = () => {
    if (score >= 80) return "Excellent! Keep it up!";
    if (score >= 60) return "Good progress. Room for improvement.";
    return "Let's work on improving your wellness.";
  };
  
  return (
    <Card className="health-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-health-primary/20 to-health-secondary/20 rounded-bl-[40px]"></div>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-health-primary" />
          Wellness Score
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="flex flex-col items-center">
          <div className="relative">
            <svg className="w-32 h-32">
              <circle
                className="text-gray-200"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
                r="56"
                cx="64"
                cy="64"
              />
              <circle
                className="text-health-primary"
                strokeWidth="10"
                strokeDasharray={352}
                strokeDashoffset={352 - (352 * score) / 100}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="56"
                cx="64"
                cy="64"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className={`text-4xl font-bold ${getScoreColor()}`}>{score}</span>
            </div>
          </div>
          <p className="mt-4 text-center text-sm">{getMessage()}</p>
        </div>
      </CardContent>
    </Card>
  );
}
