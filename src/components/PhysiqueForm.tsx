
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

type PhysiqueType = 'ectomorph' | 'mesomorph' | 'endomorph' | null;

interface PhysiqueFormProps {
  onPhysiqueChange: (type: PhysiqueType) => void;
}

const PhysiqueForm: React.FC<PhysiqueFormProps> = ({ onPhysiqueChange }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [bodyType, setBodyType] = useState<PhysiqueType>(null);
  
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!weight || !height || !age || !gender || !activityLevel || !bodyType) {
      toast({
        title: "Missing Information",
        description: "Please fill out all fields to get your personalized plan.",
        variant: "destructive",
      });
      return;
    }
    
    onPhysiqueChange(bodyType);
    
    toast({
      title: "Profile Updated!",
      description: "Your personalized diet plan has been generated.",
    });
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Determine Your Physique Type</CardTitle>
        <CardDescription>
          Fill in your details to get a personalized diet and fitness plan
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input 
                id="weight" 
                type="number" 
                placeholder="e.g. 70" 
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="height">Height (cm)</Label>
              <Input 
                id="height" 
                type="number" 
                placeholder="e.g. 175" 
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input 
                id="age" 
                type="number" 
                placeholder="e.g. 30" 
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="non-binary">Non-binary</SelectItem>
                  <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="activity">Activity Level</Label>
            <Select value={activityLevel} onValueChange={setActivityLevel}>
              <SelectTrigger id="activity">
                <SelectValue placeholder="Select activity level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedentary">Sedentary (little to no exercise)</SelectItem>
                <SelectItem value="light">Light (1-3 days per week)</SelectItem>
                <SelectItem value="moderate">Moderate (3-5 days per week)</SelectItem>
                <SelectItem value="active">Active (6-7 days per week)</SelectItem>
                <SelectItem value="very-active">Very Active (physical job or twice daily training)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-3">
            <Label>Body Type</Label>
            <RadioGroup 
              className="grid grid-cols-1 md:grid-cols-3 gap-4" 
              value={bodyType || undefined}
              onValueChange={(value) => setBodyType(value as PhysiqueType)}
            >
              <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-slate-50">
                <RadioGroupItem value="ectomorph" id="ectomorph" />
                <Label htmlFor="ectomorph" className="cursor-pointer flex-1">
                  <div className="font-medium">Ectomorph</div>
                  <div className="text-sm text-gray-500">Naturally thin, lean with difficulty gaining weight</div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-slate-50">
                <RadioGroupItem value="mesomorph" id="mesomorph" />
                <Label htmlFor="mesomorph" className="cursor-pointer flex-1">
                  <div className="font-medium">Mesomorph</div>
                  <div className="text-sm text-gray-500">Athletic build, responds well to training</div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-slate-50">
                <RadioGroupItem value="endomorph" id="endomorph" />
                <Label htmlFor="endomorph" className="cursor-pointer flex-1">
                  <div className="font-medium">Endomorph</div>
                  <div className="text-sm text-gray-500">Naturally higher body fat, gains muscle easily</div>
                </Label>
              </div>
            </RadioGroup>
          </div>
          
          <Button type="submit" className="w-full bg-fitness-primary hover:bg-fitness-primary/90 mt-4">
            Generate Personalized Plan
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PhysiqueForm;
