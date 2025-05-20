
import React, { useState } from "react";
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smile, Frown, Meh } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const moods = [
  { 
    value: "great", 
    label: "Great", 
    icon: <Smile className="h-8 w-8" />, 
    color: "text-green-500 hover:bg-green-50" 
  },
  { 
    value: "okay", 
    label: "Okay", 
    icon: <Meh className="h-8 w-8" />, 
    color: "text-blue-500 hover:bg-blue-50" 
  },
  { 
    value: "bad", 
    label: "Bad", 
    icon: <Frown className="h-8 w-8" />, 
    color: "text-orange-500 hover:bg-orange-50" 
  }
];

export function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const { toast } = useToast();

  const handleSave = () => {
    if (!selectedMood) {
      toast({
        title: "Please select a mood",
        description: "Select how you're feeling today",
        variant: "destructive"
      });
      return;
    }

    // This would connect to Supabase in a real app
    toast({
      title: "Mood tracked",
      description: `You're feeling ${selectedMood} today`,
    });
    
    // Reset form after saving
    setSelectedMood(null);
    setNotes("");
  };
  
  return (
    <Card className="health-card">
      <CardHeader>
        <CardTitle>How are you feeling today?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center gap-4 mb-6">
          {moods.map((mood) => (
            <button 
              key={mood.value}
              onClick={() => setSelectedMood(mood.value)}
              className={`flex flex-col items-center justify-center p-4 rounded-lg border transition-all ${
                selectedMood === mood.value 
                  ? `border-2 border-${mood.color.split(" ")[0]} bg-${mood.color.split(" ")[0].replace("text", "bg")}/10` 
                  : "border-gray-200"
              } ${mood.color}`}
            >
              {mood.icon}
              <span className="mt-2">{mood.label}</span>
            </button>
          ))}
        </div>
        
        <div className="mb-4">
          <label htmlFor="notes" className="block text-sm font-medium mb-2">Add notes (optional)</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            placeholder="How are you feeling? What's on your mind?"
            className="w-full p-3 border rounded-md"
          ></textarea>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSave} className="w-full bg-health-primary hover:bg-health-primary/90">
          Save Today's Mood
        </Button>
      </CardFooter>
    </Card>
  );
}
