import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { RabbitEars } from "@/components/ui/RabbitEars";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center px-4">
          <RabbitEars size="lg" className="mx-auto mb-8" />
          
          <h1 className="font-sora font-bold text-8xl sm:text-9xl text-gradient mb-4">
            404
          </h1>
          
          <h2 className="font-poppins font-semibold text-2xl text-white mb-4">
            Page Not Found
          </h2>
          
          <p className="font-inter text-white/60 mb-8 max-w-md mx-auto">
            Oops! Looks like this rabbit hopped too far. The page you're looking for doesn't exist.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary rounded-full font-poppins font-semibold text-white hop glow-purple hover:glow-pink transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full font-poppins font-semibold text-white hover:bg-white/10 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
