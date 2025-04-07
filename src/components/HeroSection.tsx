
import React from 'react';
import { ArrowRight, Activity, Dumbbell, Apple } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-fitness-primary to-fitness-secondary py-16 md:py-24 px-4">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Transform Your Fitness Journey with Digital Analytics
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover personalized workout plans, find nearby gyms, and track your progress with advanced metrics.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-fitness-primary hover:bg-opacity-90">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-fitness-primary">
                Learn More
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-6">
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 p-2 rounded-full">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <span className="ml-2 text-white">Track Progress</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 p-2 rounded-full">
                  <Dumbbell className="h-6 w-6 text-white" />
                </div>
                <span className="ml-2 text-white">Find Gyms</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 p-2 rounded-full">
                  <Apple className="h-6 w-6 text-white" />
                </div>
                <span className="ml-2 text-white">Custom Diet Plans</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-fitness-accent bg-opacity-30 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-fitness-primary bg-opacity-30 rounded-full filter blur-3xl"></div>
              <div className="relative bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Fitness Metrics</h3>
                <div className="space-y-4">
                  <div className="bg-white bg-opacity-15 rounded-lg p-4">
                    <div className="flex justify-between text-sm text-white mb-2">
                      <span>Weekly Progress</span>
                      <span>78%</span>
                    </div>
                    <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white bg-opacity-15 rounded-lg p-4">
                    <div className="flex justify-between text-sm text-white mb-2">
                      <span>Fitness Score</span>
                      <span>820</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex-1 h-8 bg-white bg-opacity-70 rounded-sm animate-pulse-light" style={{ 
                          animationDelay: `${i * 0.1}s`,
                          height: `${20 + Math.random() * 20}px` 
                        }}></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white bg-opacity-15 rounded-lg p-4">
                      <div className="text-sm text-white">CPC</div>
                      <div className="text-xl font-bold text-white">$1.28</div>
                    </div>
                    <div className="bg-white bg-opacity-15 rounded-lg p-4">
                      <div className="text-sm text-white">CPR</div>
                      <div className="text-xl font-bold text-white">$8.75</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-fitness-accent to-transparent opacity-10"></div>
    </div>
  );
};

export default HeroSection;
