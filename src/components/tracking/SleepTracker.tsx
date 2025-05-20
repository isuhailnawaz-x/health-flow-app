
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Moon, Clock } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";

export function SleepTracker() {
  const [hoursSlept, setHoursSlept] = useState<number>(7);
  const [sleepQuality, setSleepQuality] = useState<number>(3);
  const { toast } = useToast();
  
  const qualityLabels = ["Poor", "Fair", "Good", "Very Good", "Excellent"];
  
  const handleSave = () => {
    // This would connect to Supabase in a real app
    toast({
      title: "Sleep tracked",
      description: `You slept for ${hoursSlept} hours with ${qualityLabels[sleepQuality-1]} quality`,
    });
  };
  
  return (
    <Card className="health-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Moon className="h-5 w-5 text-health-secondary" />
          Track Your Sleep
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium">Hours Slept</label>
            <span className="bg-health-secondary/10 text-health-secondary px-2 py-1 rounded text-sm font-medium">
              {hoursSlept} hours
            </span>
          </div>
          <Slider 
            defaultValue={[7]} 
            max={12} 
            min={0} 
            step={0.5}
            onValueChange={(value) => setHoursSlept(value[0])}
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>0h</span>
            <span>12h</span>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium">Sleep Quality</label>
            <span className="bg-health-secondary/10 text-health-secondary px-2 py-1 rounded text-sm font-medium">
              {qualityLabels[sleepQuality-1]}
            </span>
          </div>
          <Slider 
            defaultValue={[3]} 
            max={5} 
            min={1} 
            step={1}
            onValueChange={(value) => setSleepQuality(value[0])}
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>Poor</span>
            <span>Excellent</span>
          </div>
        </div>
        
        <div className="bg-muted/50 p-3 rounded-md">
          <div className="flex items-center gap-2 text-sm mb-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">Sleep Insights</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Adults need 7-9 hours of quality sleep. Consistent sleep patterns help improve overall health and energy levels.
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSave} className="w-full bg-health-secondary hover:bg-health-secondary/90">
          Save Sleep Data
        </Button>
      </CardFooter>
    </Card>
  );
}
