const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <span className="text-sm font-medium text-white">Healthcare Optimization Research</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Maximizing Healthcare Coverage for Referral Hospitals
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
            An Optimization Study of Emergency Cardiac Care in Bungoma County, Kenya
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4 border border-white/20">
              <div className="text-3xl font-bold text-white">MCLP</div>
              <div className="text-sm text-white/80">Optimization Model</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4 border border-white/20">
              <div className="text-3xl font-bold text-white">GIS</div>
              <div className="text-sm text-white/80">Spatial Analysis</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4 border border-white/20">
              <div className="text-3xl font-bold text-white">15min</div>
              <div className="text-sm text-white/80">Response Time</div>
            </div>
          </div>
          
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            By <span className="font-semibold text-white">Javan Meshack</span>
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
