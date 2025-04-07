
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AreaChart, Area, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight, DollarSign, Users, MousePointer, Target } from 'lucide-react';
import { analyticsData } from '@/lib/mock-data';
import RealTimeMetrics from './RealTimeMetrics';

const AnalyticsDashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState('weekly');
  const data = timeRange === 'weekly' ? analyticsData.weeklyMetrics : analyticsData.monthlyMetrics;
  const summary = analyticsData.summary;
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Digital Marketing Analytics</h2>
          <p className="text-lg text-gray-600">
            Track your CPC (Cost Per Click) and CPR (Cost Per Result) metrics to optimize your fitness marketing campaigns
          </p>
        </div>
        
        {/* Real-time metrics section */}
        <div className="mb-12">
          <RealTimeMetrics />
        </div>
        
        <Tabs defaultValue="overview" className="space-y-8">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="cpc">CPC Analysis</TabsTrigger>
              <TabsTrigger value="cpr">CPR Analysis</TabsTrigger>
            </TabsList>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setTimeRange('weekly')} 
                className={`px-4 py-2 text-sm rounded-md transition-colors ${
                  timeRange === 'weekly' 
                    ? 'bg-slate-200 text-slate-900' 
                    : 'bg-white text-slate-500 hover:bg-slate-100'
                }`}
              >
                Weekly
              </button>
              <button 
                onClick={() => setTimeRange('monthly')} 
                className={`px-4 py-2 text-sm rounded-md transition-colors ${
                  timeRange === 'monthly' 
                    ? 'bg-slate-200 text-slate-900' 
                    : 'bg-white text-slate-500 hover:bg-slate-100'
                }`}
              >
                Monthly
              </button>
            </div>
          </div>
          
          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Average CPC</CardDescription>
                  <CardTitle className="text-2xl">${summary.averageCPC.toFixed(2)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-green-500">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span className="text-xs">5.2% from last period</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Average CPR</CardDescription>
                  <CardTitle className="text-2xl">${summary.averageCPR.toFixed(2)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-red-500">
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                    <span className="text-xs">2.1% from last period</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Total Clicks</CardDescription>
                  <CardTitle className="text-2xl">{summary.totalClicks.toLocaleString()}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-green-500">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span className="text-xs">12.8% from last period</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Conversion Rate</CardDescription>
                  <CardTitle className="text-2xl">{summary.conversionRate}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-green-500">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span className="text-xs">3.5% from last period</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>CPC and CPR Trends</CardTitle>
                <CardDescription>Compare cost metrics over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value}`, undefined]} />
                      <Legend />
                      <Line type="monotone" dataKey="cpc" stroke="#0ea5e9" strokeWidth={2} name="CPC" />
                      <Line type="monotone" dataKey="cpr" stroke="#6366f1" strokeWidth={2} name="CPR" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div>
                    <CardTitle className="text-base font-medium">Campaign ROI</CardTitle>
                    <CardDescription>Overall return on investment</CardDescription>
                  </div>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{summary.roi}</div>
                  <div className="mt-4 h-[180px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="cpr" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.2} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div>
                    <CardTitle className="text-base font-medium">Conversion Performance</CardTitle>
                    <CardDescription>CPC vs CPR ratio analysis</CardDescription>
                  </div>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{summary.totalConversions.toLocaleString()}</div>
                  <div className="mt-4 h-[180px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`$${value}`, undefined]} />
                        <Legend />
                        <Bar dataKey="cpc" fill="#0ea5e9" />
                        <Bar dataKey="cpr" fill="#6366f1" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="cpc" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Cost Per Click (CPC) Analysis</CardTitle>
                <CardDescription>Detailed breakdown of your CPC metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value}`, 'CPC']} />
                      <Area type="monotone" dataKey="cpc" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="cpr" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Cost Per Result (CPR) Analysis</CardTitle>
                <CardDescription>Detailed breakdown of your CPR metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value}`, 'CPR']} />
                      <Area type="monotone" dataKey="cpr" stroke="#6366f1" fill="#6366f1" fillOpacity={0.2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;
