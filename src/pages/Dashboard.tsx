import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  TrendingUp, 
  Users, 
  Heart, 
  MessageSquare, 
  Eye, 
  ArrowUpRight,
  ArrowDownRight 
} from 'lucide-react';
import DashboardSidebar from '@/components/DashboardSidebar';

const Dashboard = () => {
  // Mock data for charts
  const followerData = [
    { month: 'Jan', followers: 8500, engagement: 4.2 },
    { month: 'Feb', followers: 9200, engagement: 4.5 },
    { month: 'Mar', followers: 10100, engagement: 4.8 },
    { month: 'Apr', followers: 10800, engagement: 5.1 },
    { month: 'May', followers: 11500, engagement: 4.9 },
    { month: 'Jun', followers: 12500, engagement: 5.3 }
  ];

  const postPerformance = [
    { post: 'Post A', likes: 1200, shares: 89, comments: 156 },
    { post: 'Post B', likes: 980, shares: 67, comments: 134 },
    { post: 'Post C', likes: 1450, shares: 112, comments: 189 },
    { post: 'Post D', likes: 890, shares: 45, comments: 98 },
    { post: 'Post E', likes: 1680, shares: 134, comments: 267 }
  ];

  const platformData = [
    { name: 'Instagram', value: 45, color: '#E1306C' },
    { name: 'Twitter', value: 25, color: '#1DA1F2' },
    { name: 'LinkedIn', value: 20, color: '#0077B5' },
    { name: 'TikTok', value: 10, color: '#000000' }
  ];

  const metrics = [
    {
      title: 'Total Followers',
      value: '12,543',
      change: '+5.2%',
      trend: 'up',
      icon: Users,
      description: 'Across all platforms'
    },
    {
      title: 'Engagement Rate',
      value: '4.8%',
      change: '+1.2%',
      trend: 'up',
      icon: Heart,
      description: 'Average this month'
    },
    {
      title: 'Total Reach',
      value: '45.2K',
      change: '+8.7%',
      trend: 'up',
      icon: Eye,
      description: 'Monthly impressions'
    },
    {
      title: 'Comments',
      value: '892',
      change: '-2.3%',
      trend: 'down',
      icon: MessageSquare,
      description: 'This month'
    }
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Track your social media performance and growth</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="analytics-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <metric.icon className="h-8 w-8 text-primary" />
                  <div className={`flex items-center text-sm ${
                    metric.trend === 'up' ? 'text-success' : 'text-destructive'
                  }`}>
                    {metric.trend === 'up' ? (
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 mr-1" />
                    )}
                    {metric.change}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                  <p className="text-sm font-medium text-foreground">{metric.title}</p>
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Follower Growth Chart */}
          <Card className="analytics-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                Follower Growth
              </CardTitle>
              <CardDescription>Monthly follower count and engagement rate</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={followerData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--chart-grid))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis yAxisId="followers" stroke="hsl(var(--muted-foreground))" />
                  <YAxis yAxisId="engagement" orientation="right" stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    yAxisId="followers"
                    type="monotone" 
                    dataKey="followers" 
                    stroke="hsl(var(--chart-primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--chart-primary))' }}
                  />
                  <Line 
                    yAxisId="engagement"
                    type="monotone" 
                    dataKey="engagement" 
                    stroke="hsl(var(--chart-accent))" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: 'hsl(var(--chart-accent))' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Platform Distribution */}
          <Card className="analytics-card">
            <CardHeader>
              <CardTitle>Platform Distribution</CardTitle>
              <CardDescription>Follower distribution across platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={platformData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Post Performance */}
        <Card className="analytics-card">
          <CardHeader>
            <CardTitle>Top Performing Posts</CardTitle>
            <CardDescription>Engagement metrics for your recent posts</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={postPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--chart-grid))" />
                <XAxis dataKey="post" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="likes" fill="hsl(var(--chart-primary))" radius={[2, 2, 0, 0]} />
                <Bar dataKey="shares" fill="hsl(var(--chart-accent))" radius={[2, 2, 0, 0]} />
                <Bar dataKey="comments" fill="hsl(var(--chart-success))" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;