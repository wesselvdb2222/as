import Link from "next/link";
import {
  ArrowRightIcon,
  BoxIcon,
  PlaneIcon,
  ScanIcon,
  StoreIcon,
  TruckIcon,
} from "./icons";
import WorldMapBackground from "./WorldMapBackground";

const WHATSAPP_HREF = `https://wa.me/31647415437?text=${encodeURIComponent(
  "Hi, I'm interested in Fulfillment.",
)}`;

function FlowIcon({
  icon: Icon,
  label,
}: {
  icon: typeof StoreIcon;
  label: string;
}) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-3 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-brand">
        <Icon className="h-5 w-5" />
      </div>
      <span className="max-w-24 text-xs font-medium text-foreground">
        {label}
      </span>
    </div>
  );
}

function Connector({ highlighted = false }: { highlighted?: boolean }) {
  return (
    <div
      className={`mb-6 h-px min-w-8 flex-1 border-t border-dashed sm:min-w-16 ${
        highlighted ? "border-brand/60" : "border-white/20"
      }`}
    />
  );
}

export default function FulfillmentFlow() {
  return (
    <section className="border-t border-zinc-100 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 px-6 py-16 sm:px-12 sm:py-20">
          <WorldMapBackground variant="card" />

          <div className="relative z-10">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Worldwide, seamless & fast.
              </h2>
              <p className="mt-4 text-muted">
                By handling picking, packing, and shipping ourselves, we make
                sure every order leaves on time and arrives without
                surprises.
              </p>
              <Link
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-fuchsia-400"
              >
                Learn more
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-24 overflow-x-auto">
              <div className="mx-auto flex max-w-3xl items-end justify-between">
                <FlowIcon icon={StoreIcon} label="Your online store" />
                <Connector />
                <FlowIcon icon={BoxIcon} label="Our fulfillment center" />

                <div className="relative min-w-8 flex-1 sm:min-w-16">
                  <div className="mb-6 h-px w-full border-t border-dashed border-brand/60" />
                  <div className="absolute bottom-full left-1/2 mb-3 flex -translate-x-1/2 flex-col items-center gap-2">
                    <span className="whitespace-nowrap text-xs font-medium text-muted">
                      Fast Shipping
                    </span>
                    <PlaneIcon className="h-5 w-5 rotate-90 text-foreground" />
                  </div>
                </div>

                <FlowIcon icon={ScanIcon} label="Last-mile hub" />
                <Connector />
                <FlowIcon icon={TruckIcon} label="Delivered to customer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
