import { Lightbulb, Globe, Link, ShoppingBag, Palette, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "MVP Development",
      description: "Transform your ideas into functional minimum viable products quickly and efficiently."
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Custom web applications with stunning UIs and powerful backend capabilities."
    },
    {
      icon: Link,
      title: "Blockchain Solutions",
      description: "Leverage blockchain technology for secure, transparent digital solutions."
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce",
      description: "Build powerful online stores with seamless checkout and inventory management."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered designs that enhance usability and create delightful experiences."
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android devices."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business 
            thrive in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;