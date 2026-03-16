import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";

const contactDetails = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "Illovo, Johannesburg\nSouth Africa",
  },
  {
    icon: Phone,
    label: "Telephone",
    value: "+27 83 450 5566",
    href: "tel:+27834505566",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@claritygroup.co.za",
    href: "mailto:info@claritygroup.co.za",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Monday – Friday\n08:00 – 17:00",
  },
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 30% 70%, hsla(85, 62%, 40%, 0.3), transparent 50%)" }}
        />
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "hsl(85, 62%, 50%)" }}>
              Get in Touch
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6" style={{ color: "hsl(0, 0%, 100%)" }}>
              Contact Us
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg leading-relaxed" style={{ color: "hsla(0, 0%, 100%, 0.75)" }}>
              We'd love to hear from you. Reach out to discuss how Clarity Group can assist with your corporate finance needs.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, hsl(210, 20%, 96%), transparent)" }} />
      </section>

      {/* Contact details */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {contactDetails.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="glass-card p-7 flex gap-5"
                >
                  <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-foreground font-medium whitespace-pre-line hover:text-accent transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map embed */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="glass-card overflow-hidden"
            >
              <iframe
                title="Clarity Group Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.5!2d28.0473!3d-26.1325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zIllovo%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
