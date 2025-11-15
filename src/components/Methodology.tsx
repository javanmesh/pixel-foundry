import { Card } from "@/components/ui/card";
import { MapPin, Activity, TrendingUp, Target } from "lucide-react";

const Methodology = () => {
  const steps = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Spatial Analysis",
      description: "Population density mapping and facility location analysis using GIS techniques"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Isochrone Mapping",
      description: "15-minute accessibility zones from existing referral hospitals for emergency cardiac care"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Distance Decay",
      description: "Modeling the relationship between distance and healthcare accessibility"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "MCLP Optimization",
      description: "Maximal Covering Location Problem algorithm to determine optimal facility placement"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Methodology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive four-phase approach to optimize healthcare facility placement
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-primary mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
