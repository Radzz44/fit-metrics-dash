
import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import NearbyGyms from '@/components/NearbyGyms';
import DietPlan from '@/components/DietPlan';
import PhysiqueForm from '@/components/PhysiqueForm';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type PhysiqueType = 'ectomorph' | 'mesomorph' | 'endomorph' | null;

const Index = () => {
  const [physiqueType, setPhysiqueType] = useState<PhysiqueType>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Nearby Gyms */}
      <NearbyGyms />
      
      {/* Diet Plan Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Personalized Diet & Fitness Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get a custom diet plan tailored to your body type and fitness goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PhysiqueForm onPhysiqueChange={setPhysiqueType} />
          <DietPlan physiqueType={physiqueType} />
        </div>
      </section>
      
      {/* Subscription Plans */}
      <SubscriptionPlans />
      
      {/* Analytics Dashboard */}
      <AnalyticsDashboard />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FitMetrics</h3>
              <p className="text-slate-300">
                Transform your fitness journey with digital analytics and personalized plans.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Features</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white">Analytics Dashboard</a></li>
                <li><a href="#" className="hover:text-white">Diet Plans</a></li>
                <li><a href="#" className="hover:text-white">Gym Finder</a></li>
                <li><a href="#" className="hover:text-white">Workout Library</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} FitMetrics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
