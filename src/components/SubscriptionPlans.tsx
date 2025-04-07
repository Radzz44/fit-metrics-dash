
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import { subscriptionPlans } from '@/lib/mock-data';

const SubscriptionPlans: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Fitness Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the plan that fits your goals and get access to personalized fitness analytics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subscriptionPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`subscription-plan-card ${
                plan.popular ? 'border-fitness-primary shadow-lg relative' : ''
              } transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <div className="bg-fitness-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-500">/{plan.period}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-fitness-primary mr-2 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full subscription-plan-button ${
                    plan.popular 
                      ? 'bg-fitness-primary hover:bg-fitness-primary/90' 
                      : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular ? 'Start Now' : 'Select Plan'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">All plans come with a 14-day free trial. No credit card required.</p>
          <Button variant="link" className="text-fitness-primary">View full plan comparison</Button>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
