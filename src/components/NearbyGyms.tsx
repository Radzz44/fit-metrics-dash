
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Clock } from 'lucide-react';
import { gymLocations } from '@/lib/mock-data';

const NearbyGyms: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Find Gyms Near You</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover top-rated fitness centers in your area with exclusive membership offers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gymLocations.map((gym) => (
            <Card key={gym.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-40 bg-gradient-to-r from-fitness-primary to-fitness-secondary relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-fitness-primary" />
                  </div>
                </div>
                <Badge className="absolute top-4 right-4 bg-white text-fitness-primary">
                  {gym.distance}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>{gym.name}</CardTitle>
                <CardDescription>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                    <span>{gym.address}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(gym.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium">{gym.rating}/5</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {gym.amenities.map((amenity, index) => (
                    <Badge key={index} variant="outline" className="bg-slate-100">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">More Info</Button>
                <Button className="bg-fitness-primary hover:bg-fitness-primary/90">Get Directions</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="gap-2">
            <MapPin className="h-4 w-4" />
            View All Locations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NearbyGyms;
