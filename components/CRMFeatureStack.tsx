import { motion } from "framer-motion";
import { CheckCircle, Mail, Zap } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="text-green-500 w-5 h-5" />,
    title: "Nieuwe Lead Toegevoegd",
    description: "Jan Jansen is toegevoegd aan je pipeline.",
    delay: 0.1,
  },
  {
    icon: <Mail className="text-blue-500 w-5 h-5" />,
    title: "Email Verzonden",
    description: "Introductiemail is succesvol verzonden.",
    delay: 0.3,
  },
  {
    icon: <Zap className="text-yellow-400 w-5 h-5" />,
    title: "Automatisering Gestart",
    description: "Welkom-campagne is geactiveerd.",
    delay: 0.5,
  },
];

export default function CRMFeatureStack() {
  return (
    <section className="py-20 bg-[#0f1117] text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-[rgba(var(--primary-color),0.1)] border border-[rgba(var(--primary-color),0.2)] mb-4">
            <span className="text-sm font-medium text-[rgb(var(--primary-color))]">CRM Features</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Realtime Activiteit</h2>
          <p className="text-xl text-gray-300">Volg live wat er gebeurt binnen je digitale CRM-omgeving</p>
        </motion.div>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-[#1a1f2c] border border-[#252a38] rounded-xl shadow-xl p-5 flex items-start gap-4"
            >
              <div className="mt-1">{feature.icon}</div>
              <div>
                <h3 className="text-white font-semibold text-base">{feature.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
