const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold font-heading mb-2">Nambi Solutions</h3>
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Nambi Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
