import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { 
  TrendingUp, 
  Users, 
  Heart, 
  MessageSquare, 
  Eye, 
  Share2,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';
import heroImage from '@/assets/hero-analytics.jpg';

const Landing = () => {
  const { user, loading } = useAuth();
  const features = [
    {
      icon: TrendingUp,
      title: 'Followers Growth',
      description: 'Track your follower growth across all platforms with detailed analytics and trend predictions.',
      color: 'text-chart-primary'
    },
    {
      icon: Heart,
      title: 'Engagement Rate',
      description: 'Monitor likes, comments, and shares to understand what content resonates with your audience.',
      color: 'text-chart-accent'
    },
    {
      icon: Eye,
      title: 'Top Posts Analysis',
      description: 'Identify your best-performing content and learn what drives engagement.',
      color: 'text-chart-success'
    },
    {
      icon: MessageSquare,
      title: 'Sentiment Analysis',
      description: 'Understand audience sentiment and track brand perception over time.',
      color: 'text-chart-warning'
    }
  ];

  const stats = [
    { value: '10K+', label: 'Active Users' },
    { value: '50M+', label: 'Posts Analyzed' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' }
  ];

  const INSTAGRAM_AUTH_URL = `https://api.instagram.com/oauth/authorize?client_id=1097717499158343&redirect_uri=https://localhost:8080/auth/instagram/callback&scope=user_profile,user_media&response_type=code`;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Track, Analyze & 
                <span className="gradient-text block">Grow Your Social</span>
                Media Presence
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your social media strategy with powerful analytics, 
                real-time insights, and data-driven recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {!loading && (
                  <>
                    {user ? (
                      <Button size="lg" className="text-base px-8 py-6" asChild>
                        <Link to="/dashboard">
                          Go to Dashboard
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    ) : (
                      <>
                        {/* Instagram Connect Button */}
                        <a href={INSTAGRAM_AUTH_URL}>
                          <Button size="lg" variant="outline" className="text-base px-8 py-6 text-pink-600 border-pink-300 hover:bg-pink-50">
                            Connect Instagram
                          </Button>
                        </a>
                        <Button size="lg" className="text-base px-8 py-6" asChild>
                          <Link to="/signup">
                            Start Analyzing Now
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                      </>
                    )}
                    <Button variant="outline" size="lg" className="text-base px-8 py-6" asChild>
                      <Link to="/dashboard">View Demo</Link>
                    </Button>
                  </>
                )}
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-lg rounded-xl"></div>
              <img 
                src={heroImage} 
                alt="Social Media Analytics Dashboard" 
                className="relative rounded-xl shadow-card-hover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Analytics Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get comprehensive insights into your social media performance 
              with our advanced analytics suite.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="analytics-card analytics-card-hover group cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <feature.icon className={`h-12 w-12 mx-auto ${feature.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-hero rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Social Media Strategy?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of creators and brands who trust SocialPulse 
              to grow their social media presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!loading && (
                <>
                  {user ? (
                    <Button size="lg" variant="secondary" className="text-base px-8 py-6" asChild>
                      <Link to="/dashboard">Go to Dashboard</Link>
                    </Button>
                  ) : (
                    <Button size="lg" variant="secondary" className="text-base px-8 py-6" asChild>
                      <Link to="/signup">Get Started Free</Link>
                    </Button>
                  )}
                  <Link to="/dashboard">
                    <Button size="lg" variant="outline" className="text-base px-8 py-6 border-white/30 text-blue-600 hover:bg-blue-100">
                      View Dashboard Demo
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;