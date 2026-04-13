import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";
import SEO from "@/components/SEO";

const ContactSuccess = () => (
  <Layout>
    <SEO
      title="Message Sent — Thank You"
      description="Thank you for contacting Clarity Group. We will be in touch shortly."
      canonical="/contact/success"
    />

    <section className="gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl mx-auto text-center">
          <motion.div variants={fadeUp} custom={0} className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full gradient-accent flex items-center justify-center">
              <CheckCircle size={40} className="text-accent-foreground" />
            </div>
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6" style={{ color: "hsl(0, 0%, 100%)" }}>
            Thank You for Making Contact
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg leading-relaxed mb-8" style={{ color: "hsla(0, 0%, 100%, 0.75)" }}>
            We have received your message and will be in contact shortly.
          </motion.p>
          <motion.div variants={fadeUp} custom={3}>
            <Button asChild size="lg" className="gradient-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity border-0">
              <Link to="/">Back to Home <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default ContactSuccess;
