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
                  src: "/plot_population_density.png",
                  alt: "Population Density Analysis"
                }
              ]}
            />
            
            <VisualizationSection
              title="Isochrone Analysis"
              description="The 15-minute isochrone map illustrates areas reachable within 15 minutes from referral hospitals offering emergency cardiac care. After clipping and merging overlapping isochrones, the resulting map shows consolidated coverage zones, enabling a clear evaluation of healthcare accessibility."
              images={[
                {
                  src: "/plot_isochrones.png",
                  alt: "15-Minute Isochrones"
                },
                {
                  src: "/plot_merged_isochrones.png",
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
                  src: "/plot_candidate_sites.png",
                  alt: "Candidate Site Selection Grid"
                },
                {
                  src: "/plot_candidate_sites2.png",
                  alt: "Road Network Analysis"
                }
              ]}
            />
            
            <VisualizationSection
              title="Optimization Results: Facility Location"
              description="The final step applies the MCLP with distance decay functions to determine the optimal locations for new referral hospitals specializing in emergency cardiac care. This visualization shows the selected candidate sites that maximize patient coverage."
              images={[
                {
                  src: "/plot_optimization_results.png",
                  alt: "Optimization Results"
                },
                {
                  src: "/plot_coverage_level.png",
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
                  src: "/plot_final_map.png",
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
