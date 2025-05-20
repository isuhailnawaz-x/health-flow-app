
import React from "react";
import { GoalProgressCard } from "@/components/goals/GoalProgressCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Mock goal data
const goals = [
  {
    id: 1,
    title: "Daily Steps",
    target: 10000,
    current: 6540,
    unit: "steps",
    category: "Activity"
  },
  {
    id: 2,
    title: "Water Intake",
    target: 8,
    current: 4,
    unit: "glasses",
    category: "Nutrition"
  },
  {
    id: 3,
    title: "Meditation",
    target: 20,
    current: 15,
    unit: "minutes",
    category: "Mindfulness"
  },
  {
    id: 4,
    title: "Running Distance",
    target: 25,
    current: 17,
    unit: "km",
    category: "Fitness"
  },
  {
    id: 5,
    title: "Sleep Duration",
    target: 56,
    current: 49,
    unit: "hours/week",
    category: "Rest"
  }
];

export default function GoalsPage() {
  const { toast } = useToast();
  
  const handleAddGoal = () => {
    // This would open a modal in a real app
    toast({
      title: "Add Goal",
      description: "This would open a form to add a new goal",
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Goals & Progress</h2>
          <p className="text-muted-foreground">Track and manage your wellness goals</p>
        </div>
        <Button 
          onClick={handleAddGoal}
          className="bg-health-primary hover:bg-health-primary/90"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Goal
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.map((goal) => (
          <GoalProgressCard key={goal.id} goal={goal} />
        ))}
        
        <Card className="health-card border-dashed border-2 flex items-center justify-center">
          <CardContent className="py-12 text-center cursor-pointer" onClick={handleAddGoal}>
            <div className="mx-auto h-12 w-12 rounded-full bg-health-primary/10 flex items-center justify-center mb-4">
              <Plus className="h-6 w-6 text-health-primary" />
            </div>
            <h3 className="text-lg font-medium mb-1">Add New Goal</h3>
            <p className="text-sm text-muted-foreground">Track a new wellness metric</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Your Achievement Badges</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-health-primary to-health-secondary flex items-center justify-center text-white mx-auto">
                🏆
              </div>
              <p className="text-sm mt-2">Early Bird</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-health-secondary to-purple-500 flex items-center justify-center text-white mx-auto">
                💧
              </div>
              <p className="text-sm mt-2">Hydration Hero</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-health-accent flex items-center justify-center text-white mx-auto">
                🏃‍♂️
              </div>
              <p className="text-sm mt-2">Step Master</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-health-accent to-green-500 flex items-center justify-center text-white mx-auto">
                😴
              </div>
              <p className="text-sm mt-2">Sleep Pro</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
