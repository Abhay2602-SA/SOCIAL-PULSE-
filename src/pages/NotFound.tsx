import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart3, Zap, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center max-w-md mx-auto">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center space-x-2 group mb-8">
          <div className="relative">
            <BarChart3 className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
            <Zap className="absolute -top-1 -right-1 h-5 w-5 text-accent" />
          </div>
          <span className="text-2xl font-bold gradient-text">SocialPulse</span>
        </Link>

        {/* 404 Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
            <p className="text-muted-foreground">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/dashboard">Go to Dashboard</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
