import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Methodology from "@/components/Methodology";
import VisualizationSection from "@/components/VisualizationSection";
import NotebookSection from "@/components/NotebookSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Overview />
      <Methodology />
      
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Visualizations & Results
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive spatial analysis and optimization results
              </p>
            </div>
            
            <VisualizationSection
              title="Population Density & Existing Referral Hospitals"
              description="This visualization displays a heatmap of the population density across Bungoma County alongside existing referral hospitals that provide emergency cardiac care. It highlights areas with high demand for specialized cardiac services."
              images={[
                {
                  src: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
                  alt: "Population Density Analysis"
                },
                {
                  src: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80",
                  alt: "Hospital Locations Map"
                }
              ]}
            />
            
            <VisualizationSection
              title="Isochrone Analysis"
              description="The 15-minute isochrone map illustrates areas reachable within 15 minutes from referral hospitals offering emergency cardiac care. After clipping and merging overlapping isochrones, the resulting map shows consolidated coverage zones, enabling a clear evaluation of healthcare accessibility."
              images={[
                {
                  src: "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1200&q=80",
                  alt: "15-Minute Isochrones"
                },
                {
                  src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
                  alt: "Merged Coverage Zones"
                }
              ]}
              className="bg-muted/30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12"
            />
            
            <VisualizationSection
              title="Candidate Site Selection"
              description="Potential candidate sites were identified using a grid-based approach and proximity to major roads. These sites were evaluated for their capacity to maximize coverage for referral hospitals offering emergency cardiac care."
              images={[
                {
                  src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80",
                  alt: "Candidate Site Selection Grid"
                },
                {
                  src: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1200&q=80",
                  alt: "Road Network Analysis"
                }
              ]}
            />
            
            <VisualizationSection
              title="Optimization Results: Facility Location"
              description="The final step applies the MCLP with distance decay functions to determine the optimal locations for new referral hospitals specializing in emergency cardiac care. This visualization shows the selected candidate sites that maximize patient coverage."
              images={[
                {
                  src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
                  alt: "Optimization Results"
                },
                {
                  src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
                  alt: "Coverage Level Analysis"
                }
              ]}
              className="bg-muted/30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12"
            />
            
            <VisualizationSection
              title="Final Map: Optimized Referral Hospital Locations"
              description="The final map overlays the optimized candidate sites with existing referral hospitals and population density, offering a comprehensive view of strategic facility placement for emergency cardiac care."
              images={[
                {
                  src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
                  alt: "Final Optimized Map"
                }
              ]}
            />
          </div>
        </div>
      </section>
      
      <NotebookSection />
      <Footer />
    </div>
  );
};

export default Index;
