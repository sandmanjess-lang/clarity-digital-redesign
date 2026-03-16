import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";

interface Transaction {
  text: string;
  link?: { label: string; url: string };
}

const transactions: Transaction[] = [
  { text: "Advised on the disposal of a controlling interest in a national facilities management company" },
  { text: "Advised on the acquisition of a majority interest in a national cleaning services company" },
  { text: "Advised on the disposal of a minority interest in a national security company" },
  { text: "Advised on the BEE transaction for a national logistics company" },
  { text: "Advised on the acquisition of a majority interest in an IT services company" },
  { text: "Advised on the capital raising for a property development company" },
  { text: "Advised on the disposal of a controlling interest in a national healthcare company" },
  { text: "Advised on the management buy-out of a national services company" },
  { text: "Advised on the acquisition of a majority interest in a financial services company" },
  { text: "Advised on the disposal of a minority interest in a national food services company" },
  { text: "Advised on the valuation of a national retail company for dispute resolution purposes" },
  { text: "Completed investment in ", link: { label: "Seakor", url: "https://seakor.co.za/" } },
];

const Transactions = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 80% 40%, hsla(85, 62%, 40%, 0.3), transparent 50%)" }}
        />
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "hsl(85, 62%, 50%)" }}>
              Track Record
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6" style={{ color: "hsl(0, 0%, 100%)" }}>
              Selected Transactions
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg leading-relaxed" style={{ color: "hsla(0, 0%, 100%, 0.75)" }}>
              A selection of notable transactions demonstrating our breadth of experience across sectors and deal types.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, hsl(210, 20%, 96%), transparent)" }} />
      </section>

      {/* Transactions grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-5">
            {transactions.map((tx, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                custom={i}
                className="glass-card p-6 flex gap-4 items-start group hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full gradient-accent" />
                </div>
                <p className="text-foreground leading-relaxed flex-1">
                  {tx.text}
                  {tx.link && (
                    <a href={tx.link.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">
                      {tx.link.label}
                    </a>
                  )}
                  {tx.link && " — a division of OnZinc Africa"}
                </p>
                <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Transactions;
