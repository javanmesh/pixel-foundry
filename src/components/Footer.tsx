const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">
            © {currentYear} Javan Meshack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
