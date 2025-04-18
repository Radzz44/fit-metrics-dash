
import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Eye, MousePointer, RefreshCw } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Initial data structure
const generateInitialData = () => {
  const now = new Date();
  const data = [];
  for (let i = 10; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60000);
    data.push({
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      clicks: 0, // Start with 0 clicks
      impressions: Math.floor(Math.random() * 100) + 50, // Keep random impressions
    });
  }
  return data;
};

const RealTimeMetrics: React.FC = () => {
  const [realtimeData, setRealtimeData] = useState(generateInitialData());
  const [totalClicks, setTotalClicks] = useState(0);
  const [totalImpressions, setTotalImpressions] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [currentMinute, setCurrentMinute] = useState(new Date().getMinutes());

  // Track clicks
  const handleClick = useCallback(() => {
    setRealtimeData(prevData => {
      const newData = [...prevData];
      const lastIndex = newData.length - 1;
      
      // Increment clicks for the last time period
      newData[lastIndex] = {
        ...newData[lastIndex],
        clicks: newData[lastIndex].clicks + 1
      };
      
      return newData;
    });
  }, []);

  // Add click event listener
  useEffect(() => {
    // Track clicks on the website or subscription plans
    const trackClicks = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if click is on a subscription plan button
      const isSubscriptionClick = target.closest('.subscription-plan-card') !== null || 
                                target.textContent?.includes('Select Plan') ||
                                target.textContent?.includes('Start Now');
      
      if (isSubscriptionClick) {
        handleClick();
      }
    };

    // Add event listener
    document.addEventListener('click', trackClicks);
    
    // Clean up
    return () => {
      document.removeEventListener('click', trackClicks);
    };
  }, [handleClick]);

  // Calculate totals based on current data
  useEffect(() => {
    const clicks = realtimeData.reduce((sum, item) => sum + item.clicks, 0);
    const impressions = realtimeData.reduce((sum, item) => sum + item.impressions, 0);
    
    setTotalClicks(clicks);
    setTotalImpressions(impressions);
  }, [realtimeData]);

  // Simulate real-time data updates - only advance time and impressions
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const newMinute = now.getMinutes();
      
      // Only update when minute changes
      if (newMinute !== currentMinute) {
        setIsRefreshing(true);
        setCurrentMinute(newMinute);
        
        setTimeout(() => {
          setRealtimeData(prevData => {
            const newData = [...prevData.slice(1)];
            newData.push({
              time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              clicks: 0, // Start with 0 clicks for new minute
              impressions: Math.floor(Math.random() * 100) + 50,
            });
            return newData;
          });
          setIsRefreshing(false);
        }, 500);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentMinute]);

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              Real-Time Analytics 
              <Badge variant="outline" className={`ml-2 ${isRefreshing ? 'animate-pulse bg-green-100' : ''}`}>
                <RefreshCw className={`h-3 w-3 mr-1 ${isRefreshing ? 'animate-spin' : ''}`} />
                Live
              </Badge>
            </CardTitle>
            <CardDescription>Last 10 minutes of activity</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card>
            <CardHeader className="py-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
                <MousePointer className="h-4 w-4 text-blue-500" />
              </div>
            </CardHeader>
            <CardContent className="py-0">
              <div className="text-2xl font-bold">{totalClicks.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground mt-1">Last 10 minutes</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="py-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Total Impressions</CardTitle>
                <Eye className="h-4 w-4 text-purple-500" />
              </div>
            </CardHeader>
            <CardContent className="py-0">
              <div className="text-2xl font-bold">{totalImpressions.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground mt-1">Last 10 minutes</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={realtimeData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis dataKey="time" tick={{ fontSize: 12 }} />
              <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="clicks" 
                stroke="#0ea5e9" 
                dot={{ r: 3 }} 
                activeDot={{ r: 5, strokeWidth: 0 }}
                strokeWidth={2}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="impressions" 
                stroke="#6366f1" 
                dot={{ r: 3 }} 
                activeDot={{ r: 5, strokeWidth: 0 }}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border rounded-lg shadow-lg">
        <p className="font-medium text-sm">{label}</p>
        <div className="flex items-center mt-2 text-sm">
          <span className="inline-block w-3 h-3 mr-1 bg-blue-500 rounded-full"></span>
          <span>Clicks: {payload[0].value}</span>
        </div>
        <div className="flex items-center mt-1 text-sm">
          <span className="inline-block w-3 h-3 mr-1 bg-purple-500 rounded-full"></span>
          <span>Impressions: {payload[1].value}</span>
        </div>
      </div>
    );
  }
  return null;
};

export default RealTimeMetrics;
