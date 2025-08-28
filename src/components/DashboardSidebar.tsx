import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  TrendingUp, 
  FileText, 
  Settings, 
  Users, 
  Heart,
  Eye,
  MessageSquare 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const DashboardSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    {
      title: 'Overview',
      path: '/dashboard',
      icon: BarChart3,
      description: 'Main analytics dashboard'
    },
    {
      title: 'Analytics',
      path: '/dashboard/analytics', 
      icon: TrendingUp,
      description: 'Detailed performance metrics'
    },
    {
      title: 'Reports',
      path: '/dashboard/reports',
      icon: FileText,
      description: 'Generate custom reports'
    },
    {
      title: 'Settings',
      path: '/dashboard/settings',
      icon: Settings,
      description: 'Account preferences'
    }
  ];

  const quickStats = [
    { icon: Users, label: 'Followers', value: '12.5K', change: '+5.2%' },
    { icon: Heart, label: 'Engagement', value: '4.8%', change: '+1.2%' },
    { icon: Eye, label: 'Reach', value: '45.2K', change: '+8.7%' },
    { icon: MessageSquare, label: 'Comments', value: '892', change: '+12.3%' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 h-full bg-card border-r border-border flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground">Dashboard</h2>
        <p className="text-sm text-muted-foreground">Analytics Overview</p>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all hover:bg-muted/50 group",
                isActive(item.path) && "nav-link-active"
              )}
            >
              <item.icon className={cn(
                "h-5 w-5 transition-colors",
                isActive(item.path) ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
              )} />
              <div className="flex-1 min-w-0">
                <div className={cn(
                  "text-sm font-medium truncate transition-colors",
                  isActive(item.path) ? "text-primary" : "text-foreground group-hover:text-foreground"
                )}>
                  {item.title}
                </div>
                <div className="text-xs text-muted-foreground truncate">
                  {item.description}
                </div>
              </div>
            </Link>
          ))}
        </nav>

        {/* Quick Stats */}
        <div className="mt-8">
          <h3 className="text-sm font-medium text-foreground mb-4">Quick Stats</h3>
          <div className="space-y-3">
            {quickStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-2">
                  <stat.icon className="h-4 w-4 text-primary" />
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-foreground">{stat.value}</div>
                  <div className="text-xs text-success">{stat.change}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground text-center">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;