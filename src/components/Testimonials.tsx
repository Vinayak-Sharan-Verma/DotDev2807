const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with DotDev was a game-changer for our business. Their team delivered an exceptional product that exceeded our expectations, and they were a pleasure to work with throughout the process.",
      author: "Sarah Johnson",
      role: "CEO, TechStart",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      quote: "The team at DotDev transformed our outdated platform into a cutting-edge financial tool. Their technical expertise and attention to detail are unmatched in the industry.",
      author: "Michael Chen",
      role: "CTO, FinEdge",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      quote: "DotDev created a beautiful website that perfectly captures our brand. The results speak for themselves - our conversion rate has increased by 40% since launch.",
      author: "Emily Rodriguez",
      role: "Marketing Director, GrowthHub",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      quote: "The e-commerce platform DotDev built for us has revolutionized our business. Their ongoing support and willingness to go the extra mile make them an invaluable partner.",
      author: "David Park",
      role: "Founder, RetailMax",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="mb-6">
                <div className="text-4xl text-primary/20 mb-2">"</div>
                <blockquote className="text-muted-foreground leading-relaxed">
                  {testimonial.quote}
                </blockquote>
              </div>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;