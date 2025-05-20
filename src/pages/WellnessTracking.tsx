import React from "react";
import { MoodTracker } from "@/components/tracking/MoodTracker";
import { SleepTracker } from "@/components/tracking/SleepTracker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Apple, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";

export default function WellnessTracking() {
  const { toast } = useToast();
  
  const handleSave = (type: string) => {
    toast({
      title: `${type} tracked`,
      description: "Your data has been saved successfully",
    });
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Wellness Tracking</h2>
        <p className="text-muted-foreground">Track your daily activities and habits</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MoodTracker />
        <SleepTracker />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="health-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Droplet className="h-5 w-5 text-health-secondary" />
              Water Intake
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center mb-4">
              <div className="text-center">
                <span className="text-4xl font-bold">4</span>
                <span className="text-lg">/8</span>
                <p className="text-sm text-muted-foreground">glasses</p>
              </div>
            </div>
            
            <div className="grid grid-cols-8 gap-2 mb-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((glass) => (
                <button
                  key={glass}
                  className={`aspect-square rounded-full ${
                    glass <= 4 ? "bg-health-secondary" : "bg-gray-200"
                  } flex items-center justify-center`}
                >
                  <Droplet className={`h-5 w-5 ${glass <= 4 ? "text-white" : "text-gray-400"}`} />
                </button>
              ))}
            </div>
            
            <Button 
              onClick={() => handleSave("Water intake")}
              className="w-full bg-health-secondary hover:bg-health-secondary/90"
            >
              Add Glass
            </Button>
          </CardContent>
        </Card>
        
        <Card className="health-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Apple className="h-5 w-5 text-green-500" />
              Nutrition
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Calories</span>
                <span className="font-medium">1,200 / 2,000</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div className="bg-gray-50 p-2 rounded">
                <div className="font-medium">Protein</div>
                <div>45g</div>
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <div className="font-medium">Carbs</div>
                <div>120g</div>
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <div className="font-medium">Fat</div>
                <div>35g</div>
              </div>
            </div>
            
            <Button 
              onClick={() => handleSave("Nutrition")}
              className="w-full bg-green-500 hover:bg-green-600"
            >
              Log Meal
            </Button>
          </CardContent>
        </Card>
        
        <Card className="health-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Dumbbell className="h-5 w-5 text-health-accent" />
              Exercise
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-4xl font-bold">25</div>
              <p className="text-sm text-muted-foreground">minutes today</p>
            </div>
            
            <div>
              <p className="text-sm mb-2">Intensity Level</p>
              <Slider defaultValue={[3]} max={5} min={1} step={1} />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Low</span>
                <span>High</span>
              </div>
            </div>
            
            <Button 
              onClick={() => handleSave("Exercise")}
              className="w-full bg-health-accent hover:bg-health-accent/90"
            >
              Log Exercise
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
