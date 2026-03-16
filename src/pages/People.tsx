import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { fadeUp } from "@/lib/animations";

const team = [
  {
    name: "Don Millar",
    role: "Managing Director",
    initials: "DM",
    bio: [
      "Don founded Clarity Group to provide independent corporate finance advice to unlisted corporates and entrepreneurs. He has over 20 years of experience in investment banking and corporate finance.",
      "Prior to founding Clarity, Don held senior positions at leading investment banks including Rand Merchant Bank and BoE (now part of Nedbank Capital), where he was involved in numerous M&A, capital raising, and advisory transactions.",
      "Don holds a B.Com (Hons) and CA(SA) qualification, and brings deep sector expertise across industrials, services, healthcare, and technology.",
    ],
  },
  {
    name: "Valecia van Rensburg",
    role: "Director",
    initials: "VR",
    bio: [
      "Valecia joined Clarity Group bringing extensive experience in corporate finance and transaction advisory. She plays a key role in managing client engagements and transaction execution.",
      "Her background includes experience in financial analysis, deal structuring, and project management across a range of corporate finance transactions including M&A, BEE deals, and valuations.",
      "Valecia holds a B.Com (Hons) in Financial Management and has completed her articles at a leading audit firm before transitioning to corporate finance advisory.",
    ],
  },
];

const People = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 50% 60%, hsla(85, 62%, 40%, 0.3), transparent 50%)" }}
        />
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "hsl(85, 62%, 50%)" }}>
              Our Team
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6" style={{ color: "hsl(0, 0%, 100%)" }}>
              Meet the People Behind Clarity
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg leading-relaxed" style={{ color: "hsla(0, 0%, 100%, 0.75)" }}>
              Senior professionals with direct involvement in every engagement — that's the Clarity commitment.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, hsl(210, 20%, 96%), transparent)" }} />
      </section>

      {/* Team */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i}
                className="glass-card p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-4">
                    <Avatar className="w-24 h-24 text-2xl">
                      <AvatarFallback className="gradient-accent text-accent-foreground font-display font-bold text-xl">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-display font-bold text-foreground">{member.name}</h3>
                      <p className="text-sm text-accent font-medium">{member.role}</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors cursor-pointer">
                        <Linkedin size={16} />
                      </div>
                      <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors cursor-pointer">
                        <Mail size={16} />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    {member.bio.map((paragraph, j) => (
                      <p key={j} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default People;
