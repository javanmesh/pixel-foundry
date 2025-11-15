import { Card } from "@/components/ui/card";
import { Code2 } from "lucide-react";

const NotebookSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-4 text-primary">
              <Code2 className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">Interactive Analysis</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Jupyter Notebook Analysis
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the complete code and methodology used to generate these insights
            </p>
          </div>
          
          <Card className="overflow-hidden shadow-elevated bg-card animate-fade-in">
            <div className="bg-muted/50 p-8 text-center border-2 border-dashed border-border rounded-lg">
              <Code2 className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg font-medium text-foreground mb-2">
                Jupyter Notebook Embed
              </p>
              <p className="text-sm text-muted-foreground">
                Interactive notebook will be embedded here
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NotebookSection;
