const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">DotDev</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're a team of passionate developers, designers, and digital experts 
            committed to creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <span className="text-sm font-medium text-primary mb-2 block">Our Story</span>
              <h3 className="text-2xl font-bold mb-4">Creating Digital Excellence Since 2018</h3>
              <p className="text-muted-foreground mb-6">
                Founded by a group of tech enthusiasts with a shared vision, DotDev has grown 
                into a cutting-edge digital agency helping businesses transform their digital presence.
              </p>
              <p className="text-muted-foreground">
                We combine technical expertise with creative innovation to deliver solutions 
                that not only look beautiful but perform exceptionally well.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-6 bg-card rounded-lg border border-border">
              <h4 className="text-lg font-semibold mb-3 gradient-text">Our Mission</h4>
              <p className="text-muted-foreground">
                To empower businesses with technology that drives growth and enhances user experience.
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border">
              <h4 className="text-lg font-semibold mb-3 gradient-text">Our Vision</h4>
              <p className="text-muted-foreground">
                To be the go-to partner for innovative digital solutions that shape the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;