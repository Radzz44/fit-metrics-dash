
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Info, CheckCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { dietPlans } from '@/lib/mock-data';

type PhysiqueType = 'ectomorph' | 'mesomorph' | 'endomorph' | null;

interface DietPlanProps {
  physiqueType: PhysiqueType;
}

const DietPlan: React.FC<DietPlanProps> = ({ physiqueType }) => {
  if (!physiqueType) {
    return (
      <Card className="w-full text-center py-12 px-4">
        <CardHeader>
          <CardTitle className="text-xl">Complete Your Physique Profile</CardTitle>
          <CardDescription>
            Fill in your details above to get a personalized diet plan recommendation
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const plan = dietPlans[physiqueType];

  return (
    <Card className="w-full">
      <CardHeader className="border-b pb-4">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-2xl">{plan.title}</CardTitle>
            <CardDescription className="mt-1">{plan.description}</CardDescription>
          </div>
          <Badge className="bg-fitness-secondary hover:bg-fitness-secondary/90">
            {physiqueType.charAt(0).toUpperCase() + physiqueType.slice(1)} Type
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">Daily Nutrition Targets</h3>
              <Info className="h-4 w-4 text-gray-400" />
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500">Daily Calories</div>
                <div className="text-xl font-bold">{plan.dailyCalories} kcal</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500">Macro Ratio</div>
                <div className="text-xl font-bold">{plan.macroRatio}</div>
              </div>
              <div className="space-y-1 mt-6">
                <h4 className="font-medium text-gray-700 mb-2">Key Recommendations</h4>
                {plan.tips.map((tip, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-fitness-primary mr-2 mt-0.5 shrink-0" />
                    <span className="text-gray-600">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">Sample Meal Plan</h3>
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-4 w-4" />
                PDF
              </Button>
            </div>
            <div className="space-y-3">
              {plan.mealPlan.map((meal, index) => (
                <div key={index} className="border-b pb-3 last:border-0">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm font-medium">{meal.time}</span>
                  </div>
                  <div className="mt-1 text-gray-700">{meal.meal}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4 flex-wrap gap-4">
        <Button variant="outline">Customize Plan</Button>
        <Button className="bg-fitness-primary hover:bg-fitness-primary/90">
          Track Meals
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DietPlan;
