import { Check } from "lucide-react";
import Link from "next/link";


interface Plan {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  buttonLink: string;
  popular?: boolean;
  buttonCta: string;
}

interface PricingProps {
  plans: Plan[];
}

export default function Pricing({ plans }: PricingProps) {
    return (
        <section className="py-16 relative">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative flex flex-col h-full overflow-hidden rounded-lg border backdrop-blur-md transition-all duration-500 ${
              plan.popular
                ? "border-primary-400/50 bg-[#010901]/80 shadow-[0_0_25px_rgba(168,85,247,0.3)]"
                : "border-primary-500/20 bg-[#010901]/70 hover:border-primary-400/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0">
                <div className="bg-primary-500 text-black text-xs font-bold px-3 py-1 transform rotate-0 translate-x-2 -translate-y-0">
            MOST POPULAR
                </div>
              </div>
            )}
            <div className="p-6 flex-grow"> {/* Changed this div to flex-grow */}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400"> {plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
              <span className="text-gray-300">{feature}</span>
            </li>
                ))}
              </ul>
            </div>

            <div className="p-6 pt-0"> {/* Added a separate div for the button */}
              <Link
                href={plan.buttonLink}
                className={`block w-full text-center py-3 px-4 rounded-md transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary-500 to-primary-400 hover:from-primary-400 hover:to-primary-500 text-black font-bold"
                    : "bg-[#010901] border border-primary-500 text-primary-400 hover:bg-primary-500/10"
                }`}
              >
                {plan.buttonCta}
              </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    )
}