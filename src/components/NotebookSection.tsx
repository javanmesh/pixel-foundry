import { Card } from "@/components/ui/card";
import { Code2, Download, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface NotebookCell {
  cell_type: "code" | "markdown" | "raw";
  source: string | string[];
  outputs?: any[];
  execution_count?: number | null;
}

interface Notebook {
  cells: NotebookCell[];
  metadata: any;
}

const NotebookSection = () => {
  const [notebook, setNotebook] = useState<Notebook | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNotebook = async () => {
      try {
        const response = await fetch("/BungomaCardiacCare.ipynb");
        if (!response.ok) {
          throw new Error(`Failed to load notebook: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Notebook loaded:", data);
        if (data && data.cells && Array.isArray(data.cells)) {
          setNotebook(data);
        } else {
          throw new Error("Invalid notebook format");
        }
      } catch (err) {
        console.error("Error loading notebook:", err);
        setError(err instanceof Error ? err.message : "Failed to load notebook");
      } finally {
        setLoading(false);
      }
    };

    loadNotebook();
  }, []);

  const renderCell = (cell: NotebookCell, index: number) => {
    if (!cell || !cell.cell_type) return null;
    const source = Array.isArray(cell.source) ? cell.source.join("") : (cell.source || "");

    if (cell.cell_type === "markdown" || cell.cell_type === "raw") {
      // Check if content contains HTML
      const hasHTML = /<[a-z][\s\S]*>/i.test(source);
      
      if (hasHTML) {
        // Render HTML content (like Colab badges)
        return (
          <div key={index} className="mb-6 p-4 bg-muted/30 rounded-lg">
            <div 
              className="prose prose-sm dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: source }}
            />
          </div>
        );
      }
      
      // Simple markdown rendering
      const lines = source.split("\n");
      return (
        <div key={index} className="mb-6 p-4 bg-muted/30 rounded-lg">
          <div className="prose prose-sm dark:prose-invert max-w-none">
            {lines.map((line, i) => {
              // Handle headers
              if (line.startsWith("# ")) {
                return <h1 key={i} className="text-2xl font-bold mt-4 mb-2">{line.substring(2)}</h1>;
              }
              if (line.startsWith("## ")) {
                return <h2 key={i} className="text-xl font-bold mt-3 mb-2">{line.substring(3)}</h2>;
              }
              if (line.startsWith("### ")) {
                return <h3 key={i} className="text-lg font-semibold mt-2 mb-1">{line.substring(4)}</h3>;
              }
              // Handle links
              if (line.includes("![") || line.includes("](")) {
                const imgMatch = line.match(/!\[([^\]]*)\]\(([^)]+)\)/);
                if (imgMatch) {
                  return <img key={i} src={imgMatch[2]} alt={imgMatch[1]} className="my-4 rounded-lg max-w-full" />;
                }
                const linkMatch = line.match(/\[([^\]]+)\]\(([^)]+)\)/);
                if (linkMatch) {
                  return (
                    <a key={i} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {linkMatch[1]}
                    </a>
                  );
                }
              }
              // Regular text
              if (line.trim()) {
                return <p key={i} className="mb-2">{line}</p>;
              }
              return <br key={i} />;
            })}
          </div>
        </div>
      );
    }

    if (cell.cell_type === "code") {
      return (
        <div key={index} className="mb-6">
          <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
            <Code2 className="w-4 h-4" />
            <span>Code Cell {cell.execution_count !== null && cell.execution_count !== undefined ? `[${cell.execution_count}]` : ""}</span>
          </div>
          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden">
            <pre className="p-4 overflow-x-auto text-sm">
              <code className="text-[#d4d4d4] font-mono whitespace-pre">{source}</code>
            </pre>
          </div>
          {cell.outputs && cell.outputs.length > 0 && (
            <div className="mt-2 p-4 bg-muted/50 rounded-lg border border-border">
              <div className="text-xs text-muted-foreground mb-2">Output:</div>
              <div className="text-sm font-mono whitespace-pre-wrap break-words">
                {cell.outputs.map((output, i) => {
                  if (output.output_type === "stream" || output.output_type === "execute_result") {
                    const text = output.text ? (Array.isArray(output.text) ? output.text.join("") : output.text) : "";
                    return <div key={i} className="mb-1">{text}</div>;
                  }
                  if (output.output_type === "error") {
                    return (
                      <div key={i} className="text-red-500">
                        {output.ename}: {output.evalue}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          )}
        </div>
      );
    }

    return null;
  };

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
            <div className="p-6 border-b border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">BungomaCardiacCare.ipynb</h3>
                <p className="text-sm text-muted-foreground">Complete analysis notebook</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <a href="/BungomaCardiacCare.ipynb" download>
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <a href="https://colab.research.google.com/github/javanmesh/MyWebsite/blob/main/BungomaCardiacCare.ipynb" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open in Colab
                  </a>
                </Button>
              </div>
            </div>
            
            <ScrollArea className="h-[800px]">
              <div className="p-6">
                {loading && (
                  <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    <p className="mt-4 text-muted-foreground">Loading notebook...</p>
                  </div>
                )}
                
                {error && (
                  <div className="text-center py-12">
                    <p className="text-destructive mb-4">{error}</p>
                    <Button variant="outline" onClick={() => window.location.reload()}>
                      Retry
                    </Button>
                  </div>
                )}
                
                {notebook && !loading && (
                  <div className="space-y-4">
                    {notebook.cells.map((cell, index) => renderCell(cell, index))}
                  </div>
                )}
              </div>
            </ScrollArea>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NotebookSection;
