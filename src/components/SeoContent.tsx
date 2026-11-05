import Link from "next/link";
import { TOOLS_URL } from "@/lib/site";

/**
 * Explanatory copy for search engines and first-time visitors: what agency ad accounts are, why
 * Meta ad accounts get restricted, and what a Facebook structure contains. Facts here mirror the
 * rest of the site (24h delivery, 24/7 top-ups, 30 day warranty, accounts we create ourselves).
 */
export function SeoContent() {
  return (
    <section data-section="guide" className="bg-[#0b0716] px-5 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-3">
        <article>
          <h2 className="text-xl font-semibold tracking-tight text-white">What are agency ad accounts?</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/60">
            <p>
              An agency ad account is a Meta ads account that runs under an agency&apos;s Business Manager instead of your
              own. Agencies that manage a lot of advertising spend tend to get more room from Meta: higher spending limits
              and a setup that is built for running many campaigns at once.
            </p>
            <p>
              For advertisers that means a more stable base for Facebook advertising and Instagram ads. If one ad account
              gets restricted, your campaigns can keep running on another account, so a single restriction doesn&apos;t
              stop your business. Our agency ad accounts go live within 24 hours, you can top up 24/7, and you pay a 4% fee.
            </p>
          </div>
        </article>

        <article>
          <h2 className="text-xl font-semibold tracking-tight text-white">Why Meta ad accounts get restricted</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/60">
            <p>
              Meta restricts or disables ad accounts when its automated systems flag something as risky. Common triggers
              are a brand-new profile or Business Manager without history, sudden jumps in daily spend, payment methods
              that fail or change often, landing pages or ad creatives that get flagged, and logins from unusual devices
              or locations.
            </p>
            <p>
              An appeal can take days or weeks, and in the meantime your ad campaigns are offline. Working with
              established assets and keeping a backup ad account ready is the most reliable way to keep your paid media
              running while an issue is being solved.
            </p>
          </div>
        </article>

        <article>
          <h2 className="text-xl font-semibold tracking-tight text-white">What&apos;s in a Facebook structure?</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/60">
            <p>
              A Facebook structure is a complete advertising setup that works out of the box: aged Facebook profiles, a
              Business Manager, Facebook pages and ad accounts, all connected to each other. Instead of building and
              warming up every asset yourself, you start with a campaign structure that is ready to advertise.
            </p>
            <p>
              We only sell aged accounts that we have created ourselves, never hacked or stolen ones, which is what keeps
              them stable. Every account comes with a 30 day warranty. Need free tools along the way? Use our{" "}
              {/* /tools is another app (zone): a plain link, not next/link. */}
              <a href={TOOLS_URL} className="font-medium text-brand-light underline decoration-brand-light/30 underline-offset-2 hover:text-white">
                temp mail, SMS and 2FA tools
              </a>
              , or see our{" "}
              <Link href="/partners" className="font-medium text-brand-light underline decoration-brand-light/30 underline-offset-2 hover:text-white">
                exclusive partner deals
              </Link>
              .
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
