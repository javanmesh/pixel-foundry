import { Card } from "@/components/ui/card";

const Overview = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Project Overview
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  This project focuses exclusively on referral hospitals that offer specialized healthcare services—specifically, emergency cardiac care. Using advanced optimization techniques such as the Maximal Covering Location Problem (MCLP), distance decay functions, and detailed spatial analysis, the study aims to strategically maximize service coverage and minimize response times for patients in need of critical cardiac care.
                </p>
                <p>
                  The following sections showcase various stages of the project through maps and plots that visualize population density, isochrone accessibility, candidate site selection, and the final optimization results tailored for referral hospitals.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <Card className="p-6 bg-card shadow-card hover:shadow-elevated transition-all duration-300">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Target Coverage</div>
                </Card>
                <Card className="p-6 bg-card shadow-card hover:shadow-elevated transition-all duration-300">
                  <div className="text-3xl font-bold text-secondary mb-2">&lt;15min</div>
                  <div className="text-sm text-muted-foreground">Response Time Goal</div>
                </Card>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full"></div>
              <Card className="relative overflow-hidden shadow-elevated">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80" 
                  alt="Healthcare facility optimization visualization" 
                  className="w-full h-auto object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
