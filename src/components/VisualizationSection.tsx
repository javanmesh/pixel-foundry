import { Card } from "@/components/ui/card";

interface VisualizationSectionProps {
  title: string;
  description: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
  className?: string;
}

const VisualizationSection = ({ title, description, images, className = "" }: VisualizationSectionProps) => {
  return (
    <section className={`py-12 ${className}`}>
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{title}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
        </div>
        
        <div className={`grid gap-6 ${images.length === 1 ? 'grid-cols-1' : 'lg:grid-cols-2'}`}>
          {images.map((image, index) => (
            <Card 
              key={index} 
              className="overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 bg-card"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-auto object-contain min-h-[400px]"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualizationSection;
