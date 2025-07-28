import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your project? Reach out to us and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <a href="mailto:hello@dotdev.com" className="text-primary hover:text-primary/80 transition-colors">
                    hello@dotdev.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Call Us</h4>
                  <a href="tel:+123456789" className="text-primary hover:text-primary/80 transition-colors">
                    +1 (234) 567-89
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    123 Tech Street, Digital City<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Quick Connect</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="border-border hover:bg-muted">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button variant="outline" size="sm" className="border-border hover:bg-muted">
                    <Send className="h-4 w-4 mr-2" />
                    Telegram
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Send Message</h3>
            
            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-card border-border focus:border-primary"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-card border-border focus:border-primary"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Your Message"
                  className="bg-card border-border focus:border-primary min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-gradient-primary text-white hover:opacity-90 transition-opacity">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;