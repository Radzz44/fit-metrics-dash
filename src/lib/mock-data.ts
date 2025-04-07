
// Mock gym locations data
export const gymLocations = [
  {
    id: 1,
    name: "FitZone Gym",
    distance: "0.8 miles",
    rating: 4.8,
    address: "123 Fitness Ave, Downtown",
    amenities: ["Pool", "Sauna", "24/7 Access"],
  },
  {
    id: 2,
    name: "PowerHouse Fitness",
    distance: "1.2 miles",
    rating: 4.6,
    address: "456 Muscle St, Uptown",
    amenities: ["Classes", "Personal Training", "Juice Bar"],
  },
  {
    id: 3,
    name: "Elite Athletics Club",
    distance: "2.1 miles",
    rating: 4.9,
    address: "789 Champion Rd, Westside",
    amenities: ["Olympic Pool", "Basketball Court", "Spa"],
  },
];

// Mock diet plans based on physique types
export const dietPlans = {
  ectomorph: {
    title: "Diet Plan for Ectomorph",
    description: "High calorie diet with focus on quality protein and carbohydrates to build mass.",
    dailyCalories: "2800-3200",
    macroRatio: "25% protein, 55% carbs, 20% fats",
    mealPlan: [
      { time: "7:00 AM", meal: "Protein oats with banana and peanut butter" },
      { time: "10:00 AM", meal: "Protein shake with nuts and fruits" },
      { time: "1:00 PM", meal: "Grilled chicken with brown rice and vegetables" },
      { time: "4:00 PM", meal: "Greek yogurt with berries and honey" },
      { time: "7:00 PM", meal: "Salmon with sweet potatoes and green beans" },
      { time: "9:00 PM", meal: "Cottage cheese with casein protein" },
    ],
    tips: [
      "Eat every 2-3 hours",
      "Focus on caloric surplus",
      "Consume protein with each meal",
      "Don't skip post-workout nutrition",
    ],
  },
  mesomorph: {
    title: "Diet Plan for Mesomorph",
    description: "Balanced diet with moderate protein and carbohydrates to maintain muscle and leanness.",
    dailyCalories: "2400-2800",
    macroRatio: "30% protein, 40% carbs, 30% fats",
    mealPlan: [
      { time: "7:00 AM", meal: "Eggs with whole grain toast and avocado" },
      { time: "10:00 AM", meal: "Greek yogurt with fruits and nuts" },
      { time: "1:00 PM", meal: "Tuna salad with mixed greens and olive oil" },
      { time: "4:00 PM", meal: "Protein bar or shake" },
      { time: "7:00 PM", meal: "Lean beef with quinoa and roasted vegetables" },
      { time: "9:00 PM", meal: "Small protein shake or casein protein" },
    ],
    tips: [
      "Balance macronutrients",
      "Adjust calories based on training days",
      "Hydrate adequately",
      "Cycle carbohydrate intake",
    ],
  },
  endomorph: {
    title: "Diet Plan for Endomorph",
    description: "Lower carb diet with emphasis on protein and healthy fats for fat loss and muscle definition.",
    dailyCalories: "2000-2400",
    macroRatio: "35% protein, 25% carbs, 40% fats",
    mealPlan: [
      { time: "7:00 AM", meal: "Protein smoothie with spinach and almond butter" },
      { time: "10:00 AM", meal: "Hard-boiled eggs with vegetable sticks" },
      { time: "1:00 PM", meal: "Chicken breast with large salad and olive oil dressing" },
      { time: "4:00 PM", meal: "Small handful of nuts with protein shake" },
      { time: "7:00 PM", meal: "White fish with steamed vegetables and avocado" },
      { time: "9:00 PM", meal: "Cottage cheese with cinnamon (if needed)" },
    ],
    tips: [
      "Focus on protein and fiber",
      "Limit starchy carbs",
      "Time carbs around workouts",
      "Emphasize healthy fats",
    ],
  },
};

// Mock subscription plans
export const subscriptionPlans = [
  {
    id: "basic",
    name: "Basic Plan",
    price: "$9.99",
    period: "monthly",
    features: [
      "Basic fitness tracking",
      "Diet recommendations",
      "Gym location finder",
      "Limited analytics",
    ],
    popular: false,
  },
  {
    id: "pro",
    name: "Pro Plan",
    price: "$19.99",
    period: "monthly",
    features: [
      "Advanced fitness tracking",
      "Customized diet plans",
      "Gym partnerships (20% off)",
      "Full analytics dashboard",
      "Workout video library",
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium Plan",
    price: "$39.99",
    period: "monthly",
    features: [
      "Everything in Pro Plan",
      "Personal online coaching",
      "Nutrition expert consultations",
      "Advanced metrics analysis",
      "Priority support",
    ],
    popular: false,
  },
];

// Mock analytics data
export const analyticsData = {
  weeklyMetrics: [
    { name: "Mon", cpc: 1.20, cpr: 8.50 },
    { name: "Tue", cpc: 1.15, cpr: 8.20 },
    { name: "Wed", cpc: 1.30, cpr: 9.10 },
    { name: "Thu", cpc: 1.25, cpr: 8.90 },
    { name: "Fri", cpc: 1.40, cpr: 9.50 },
    { name: "Sat", cpc: 1.10, cpr: 7.80 },
    { name: "Sun", cpc: 1.05, cpr: 7.60 },
  ],
  monthlyMetrics: [
    { name: "Jan", cpc: 1.15, cpr: 8.20 },
    { name: "Feb", cpc: 1.25, cpr: 8.40 },
    { name: "Mar", cpc: 1.30, cpr: 8.70 },
    { name: "Apr", cpc: 1.20, cpr: 8.30 },
    { name: "May", cpc: 1.35, cpr: 9.10 },
    { name: "Jun", cpc: 1.40, cpr: 9.30 },
    { name: "Jul", cpc: 1.45, cpr: 9.50 },
    { name: "Aug", cpc: 1.50, cpr: 9.80 },
    { name: "Sep", cpc: 1.35, cpr: 9.40 },
    { name: "Oct", cpc: 1.30, cpr: 8.90 },
    { name: "Nov", cpc: 1.25, cpr: 8.70 },
    { name: "Dec", cpc: 1.20, cpr: 8.50 },
  ],
  summary: {
    averageCPC: 1.28,
    averageCPR: 8.75,
    totalClicks: 24389,
    totalConversions: 2789,
    conversionRate: "11.4%",
    roi: "157%",
  }
};
