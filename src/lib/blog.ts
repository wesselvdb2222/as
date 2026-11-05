/**
 * Blog posts. Each post is plain data rendered by app/blog/[slug]/page.tsx. Keep the facts in line
 * with the rest of the site (24h delivery, 24/7 top-ups, 4% fee, 30 day warranty); never add
 * statistics or claims we can't back up.
 */

export type BlogSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  /** Meta description and the excerpt on /blog. */
  description: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  readingMinutes: number;
  sections: BlogSection[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-are-agency-ad-accounts",
    title: "What are agency ad accounts and when do you need one?",
    description:
      "Agency ad accounts explained: how they differ from a regular Meta ad account, what advertisers gain from them and when switching makes sense.",
    date: "2026-11-06",
    readingMinutes: 4,
    sections: [
      {
        paragraphs: [
          "If you advertise on Facebook and Instagram, every campaign runs from a Meta ad account. Most advertisers start with an ad account in their own Business Manager. As spend grows, many move to agency ad accounts. This article explains what that means and when it makes sense.",
        ],
      },
      {
        heading: "Agency ad accounts in short",
        paragraphs: [
          "An agency ad account is a Meta ad account that is owned by an agency's Business Manager instead of your own. You get access to run your campaigns in it, while the agency manages the account itself, the billing and the relationship with Meta.",
          "Agencies that manage a lot of advertising spend usually get more room from Meta: higher spending limits and a setup that is built to run many campaigns at the same time.",
        ],
      },
      {
        heading: "What advertisers gain",
        list: [
          "A more stable base: if one ad account gets restricted, your campaigns can continue on another account.",
          "Room to scale: no need to build up spending limits on a brand-new account first.",
          "Less admin: the agency handles the account setup and top-ups, so you can focus on creatives and campaigns.",
          "Support from people who work with Meta advertising every day.",
        ],
      },
      {
        heading: "When should you consider one?",
        paragraphs: [
          "Agency ad accounts are worth looking at when your own account keeps hitting spending limits, when a restriction would stop your sales completely, or when you run several brands or markets and want them separated.",
          "If you spend a small amount per month and your account has never had problems, your own ad account is usually fine.",
        ],
      },
      {
        heading: "How it works at AllSourced",
        paragraphs: [
          "You message us on WhatsApp, tell us what you run and which markets you target, and we set up your agency ad accounts. They go live within 24 hours, you can top up 24/7, and you pay a 4% fee on top of your ad spend.",
        ],
      },
    ],
  },
  {
    slug: "why-meta-ad-accounts-get-restricted",
    title: "Why Meta ad accounts get restricted (and how to keep ads running)",
    description:
      "The most common reasons Meta restricts or disables ad accounts, what an appeal involves, and how to keep your campaigns running while it is being solved.",
    date: "2026-11-06",
    readingMinutes: 5,
    sections: [
      {
        paragraphs: [
          "A restricted ad account means your ads stop, often without warning. Meta relies largely on automated systems to decide which accounts look risky, so even advertisers who follow the rules run into restrictions. Knowing the common triggers helps you avoid most of them.",
        ],
      },
      {
        heading: "Common triggers",
        list: [
          "A brand-new profile or Business Manager without any history.",
          "Sudden jumps in daily spend, especially on a new account.",
          "Payment methods that fail, or that change often.",
          "Ad creatives or landing pages that get flagged by Meta's review.",
          "Logins from unusual devices or locations, or several people sharing one login.",
          "No two-factor authentication on the profiles that manage the account.",
        ],
      },
      {
        heading: "What happens during an appeal",
        paragraphs: [
          "When an ad account is restricted you can request a review in Meta's Account Quality section. A review can be finished quickly, but it can also take days or weeks. While it is open, the campaigns on that account stay offline.",
          "Answer honestly, make sure your business details and payment information are correct, and fix anything that may have caused the flag, such as a landing page that doesn't match the ad.",
        ],
      },
      {
        heading: "How to reduce the risk",
        list: [
          "Increase budgets step by step instead of in big jumps.",
          "Use one reliable payment method per account.",
          "Turn on two-factor authentication for everyone with access.",
          "Give each person their own login instead of sharing profiles.",
          "Keep your ads and landing pages within Meta's advertising standards.",
        ],
      },
      {
        heading: "Keep a backup ready",
        paragraphs: [
          "Even with every precaution, a restriction can still happen. The most reliable way to keep your paid media running is to work with established assets and have a backup ad account ready, so a single restriction doesn't stop your business while the issue is being solved.",
          "That is what our agency ad accounts are built for: if one account gets restricted, your campaigns can continue on another one.",
        ],
      },
    ],
  },
  {
    slug: "two-factor-authentication-facebook-business-manager",
    title: "How to set up two-factor authentication for Facebook Business Manager",
    description:
      "Why two-factor authentication matters for Facebook ads, how to turn it on for your profile and Business Manager, and how to generate 2FA codes from a key.",
    date: "2026-11-06",
    readingMinutes: 4,
    sections: [
      {
        paragraphs: [
          "Two-factor authentication (2FA) adds a second step to logging in: besides your password you enter a six-digit code that changes every 30 seconds. For anyone running Facebook ads it is one of the simplest ways to protect your profiles, pages and ad accounts.",
        ],
      },
      {
        heading: "Why it matters for advertisers",
        paragraphs: [
          "A profile with access to a Business Manager can spend money and change campaigns. If someone else gets into it, the damage is immediate. Meta also expects people who manage business assets to use 2FA, and a Business Manager can require it for everyone who has access.",
        ],
      },
      {
        heading: "Turn on 2FA for your Facebook profile",
        list: [
          "Open Accounts Center and go to Password and security.",
          "Choose Two-factor authentication and select your profile.",
          "Pick an authentication app as the method and scan the QR code, or copy the setup key.",
          "Enter the six-digit code to confirm, and store your recovery codes somewhere safe.",
        ],
      },
      {
        heading: "Require 2FA in your Business Manager",
        paragraphs: [
          "In Business Settings, go to Security Center and set two-factor authentication to required for everyone, or for admins only. People without 2FA then have to turn it on before they can work in the Business Manager.",
        ],
      },
      {
        heading: "Generating codes from a 2FA key",
        paragraphs: [
          "The setup key behind the QR code is all an authenticator needs to produce codes. If you received an account together with its 2FA key, you can generate the current code with our free 2FA code generator. It runs in your browser, so the key is never sent to us.",
          "Treat a 2FA key like a password: anyone who has it can generate your codes.",
        ],
      },
    ],
  },
  {
    slug: "what-is-facebook-business-manager",
    title: "What is Facebook Business Manager (business portfolio)?",
    description:
      "Facebook Business Manager explained: what a business portfolio is, which assets it holds, how roles and access work and why advertisers need one.",
    date: "2026-11-06",
    readingMinutes: 4,
    sections: [
      {
        paragraphs: [
          "Facebook Business Manager is the place where a business manages its Meta assets: pages, ad accounts, Instagram accounts, pixels and the people who work on them. In Meta's own tools it is now usually called a business portfolio, but most advertisers still call it Business Manager, or BM for short.",
        ],
      },
      {
        heading: "What a Business Manager holds",
        list: [
          "Facebook pages and Instagram accounts.",
          "Ad accounts, including their payment methods.",
          "Datasets and pixels for tracking conversions.",
          "Product catalogs for shopping and dynamic ads.",
          "People and partners, each with their own access.",
        ],
      },
      {
        heading: "Why advertisers use one",
        paragraphs: [
          "Without a Business Manager, assets are tied to personal profiles. That gets messy as soon as more than one person works on your ads, or when someone leaves. A Business Manager keeps ownership with the business, and lets you give each person or agency exactly the access they need.",
        ],
      },
      {
        heading: "Roles and access",
        paragraphs: [
          "People in a Business Manager have either full control or partial access. You can give someone access to one ad account without showing them the rest. Agencies are usually added as a partner, so they work in your assets from their own Business Manager.",
          "Keep the number of admins small, and make sure every admin has two-factor authentication turned on.",
        ],
      },
      {
        heading: "Aged Business Managers",
        paragraphs: [
          "A Business Manager with history tends to be more stable than one created yesterday, because Meta's systems look at how long assets have existed and how they have been used. That is why we offer aged Business Managers as a separate service, next to complete Facebook structures.",
        ],
      },
    ],
  },
  {
    slug: "facebook-ad-account-spending-limits",
    title: "Facebook ad account spending limits explained",
    description:
      "The difference between the daily spending limit Meta sets and the account spending limit you set yourself, why new accounts are limited and how limits grow.",
    date: "2026-11-06",
    readingMinutes: 4,
    sections: [
      {
        paragraphs: [
          "If your ads suddenly stop delivering while your budget is higher, a spending limit is often the reason. Meta ad accounts have two different kinds of limits, and they work very differently.",
        ],
      },
      {
        heading: "The daily spending limit (set by Meta)",
        paragraphs: [
          "Meta gives ad accounts a daily spending limit: the maximum the account can spend across all campaigns in a day. New accounts usually start with a low limit. As the account spends reliably and payments go through, Meta raises it over time.",
          "You can see this limit in the billing and payment settings of the ad account. You can't simply raise it yourself.",
        ],
      },
      {
        heading: "The account spending limit (set by you)",
        paragraphs: [
          "Separately, you can set an account spending limit yourself: a total cap on what the account may spend until you change or reset it. It is a useful safety net, but it is also a common reason campaigns stop. When the cap is reached, all ads pause.",
        ],
      },
      {
        heading: "Why new accounts are limited",
        paragraphs: [
          "Meta protects itself against unpaid ad spend and fraud. A new account has no payment history yet, so the limit stays low until the account has proven itself. Large jumps in spend on a fresh account can also lead to extra checks or a restriction.",
        ],
      },
      {
        heading: "How to scale past the limits",
        list: [
          "Increase spend gradually so the account builds a payment history.",
          "Keep one reliable payment method on the account.",
          "Check the account spending limit before a big launch.",
          "Spread spend over more than one ad account when you need more room.",
        ],
      },
      {
        paragraphs: [
          "Agency ad accounts are another option: they run under an agency's Business Manager, which usually gets more room from Meta than a brand-new account of your own.",
        ],
      },
    ],
  },
  {
    slug: "what-is-a-facebook-structure",
    title: "What is a Facebook structure for advertising?",
    description:
      "A Facebook structure is a ready-to-run advertising setup of profiles, a Business Manager, pages and ad accounts. Here is what's in one and who it is for.",
    date: "2026-11-06",
    readingMinutes: 3,
    sections: [
      {
        paragraphs: [
          "Building a working advertising setup on Meta from scratch takes time: you need profiles with history, a Business Manager, pages and ad accounts, all connected and secured. A Facebook structure is that complete setup, ready to advertise from day one.",
        ],
      },
      {
        heading: "What's in a structure",
        list: [
          "Aged Facebook profiles to manage the assets.",
          "A Business Manager that owns the assets.",
          "One or more Facebook pages to advertise from.",
          "Ad accounts connected to the Business Manager.",
        ],
      },
      {
        heading: "Why the assets need history",
        paragraphs: [
          "Meta's automated systems are more cautious with brand-new assets. A profile or Business Manager created today and used to launch ads straight away is more likely to be checked or restricted than one with a normal history. Starting with aged, connected assets skips the warm-up period.",
        ],
      },
      {
        heading: "Who it is for",
        paragraphs: [
          "Structures are useful for advertisers who want to start or expand quickly, run separate setups for different brands or markets, or need a backup setup ready in case their main one has a problem.",
        ],
      },
      {
        heading: "How we build them",
        paragraphs: [
          "We only work with accounts we have created ourselves, never hacked or stolen ones. That is what keeps them stable, and every account comes with a 30 day warranty.",
        ],
      },
    ],
  },
  {
    slug: "how-to-scale-facebook-ads",
    title: "How to scale Facebook ads without breaking performance",
    description:
      "Practical ways to scale Meta ad campaigns: vertical and horizontal scaling, budget increases, creative testing and keeping your ad accounts stable while you grow.",
    date: "2026-11-06",
    readingMinutes: 5,
    sections: [
      {
        paragraphs: [
          "A campaign that works at a small budget doesn't always keep working when you double it. Scaling Facebook ads is about adding spend in a way that the delivery system, and your ad accounts, can handle.",
        ],
      },
      {
        heading: "Vertical scaling",
        paragraphs: [
          "Vertical scaling means raising the budget of what already works. Do it in steps instead of one big jump: large budget changes can send an ad set back into the learning phase, and performance often drops while it re-learns.",
        ],
      },
      {
        heading: "Horizontal scaling",
        paragraphs: [
          "Horizontal scaling means expanding sideways: new audiences, new countries, new placements or new creatives, each with its own budget. It reduces the risk of relying on one ad set and helps you find the next winner.",
        ],
      },
      {
        heading: "Creatives drive most of the results",
        paragraphs: [
          "As spend grows, the same people see your ads more often and results fade. Keep testing new hooks, formats and angles every week, so you always have fresh creatives ready when the current ones tire.",
        ],
      },
      {
        heading: "Make sure your tracking is right",
        paragraphs: [
          "Scaling decisions are only as good as your data. Check that purchases and leads are tracked correctly with the Meta pixel and, ideally, the Conversions API, so the algorithm optimises on real results.",
        ],
      },
      {
        heading: "Protect your ad accounts",
        list: [
          "Raise spend gradually, especially on newer accounts.",
          "Watch your daily spending limit before a big push.",
          "Keep a backup ad account ready, so a restriction doesn't stop your growth.",
        ],
      },
    ],
  },
  {
    slug: "meta-pixel-and-conversions-api",
    title: "Meta pixel and Conversions API: what's the difference?",
    description:
      "How the Meta pixel and the Conversions API track conversions, why browser tracking misses events and why most advertisers use both together.",
    date: "2026-11-06",
    readingMinutes: 4,
    sections: [
      {
        paragraphs: [
          "Meta's ad delivery learns from your conversions. The better it knows who buys or signs up, the better it can find more of those people. There are two main ways to send that data: the Meta pixel and the Conversions API.",
        ],
      },
      {
        heading: "The Meta pixel",
        paragraphs: [
          "The pixel is a piece of code on your website that runs in the visitor's browser. It reports page views, add-to-carts, purchases and other events back to Meta. It is easy to install, often with a single click in platforms like Shopify.",
          "Because it runs in the browser, it misses events: ad blockers, browser privacy features and visitors who decline cookies can all stop it from firing.",
        ],
      },
      {
        heading: "The Conversions API",
        paragraphs: [
          "The Conversions API (CAPI) sends the same events from your server instead of the browser. It doesn't depend on the visitor's browser, so it can capture conversions the pixel misses.",
        ],
      },
      {
        heading: "Why use both",
        paragraphs: [
          "Meta recommends running the pixel and the Conversions API together. Each event gets an event ID, so Meta can recognise and remove duplicates when both send the same purchase. Together they give the most complete picture.",
        ],
      },
      {
        heading: "Getting it set up",
        paragraphs: [
          "Many shop platforms offer a built-in Conversions API integration, and there are dedicated tracking tools that handle the server side for you. Whichever you choose, test your events in Meta's Events Manager before you scale spend.",
          "Remember that tracking visitors means processing personal data: make sure your cookie consent and privacy policy cover it.",
        ],
      },
    ],
  },
  {
    slug: "how-to-appeal-restricted-facebook-ad-account",
    title: "How to appeal a restricted Facebook ad account",
    description:
      "Step by step: what to check when your Meta ad account is restricted, how to request a review in Account Quality, and what to do while you wait.",
    date: "2026-11-06",
    readingMinutes: 4,
    sections: [
      {
        paragraphs: [
          "A restriction can hit an ad account, a Business Manager or the profile behind it. Before you appeal, find out exactly what was restricted and why, because the route to fix it depends on that.",
        ],
      },
      {
        heading: "1. Check Account Quality",
        paragraphs: [
          "Open Account Quality in Meta Business Suite. It shows which of your assets have a restriction, the reason Meta gives and whether you can request a review.",
        ],
      },
      {
        heading: "2. Fix the likely cause first",
        list: [
          "Make sure your business details and payment method are correct and up to date.",
          "Remove or edit ads and landing pages that may break Meta's advertising standards.",
          "Turn on two-factor authentication for the profiles with access.",
        ],
      },
      {
        heading: "3. Request a review",
        paragraphs: [
          "Click the option to request a review and follow the steps. Keep your explanation short and factual. Sometimes Meta asks you to confirm your identity or business; have documents ready.",
        ],
      },
      {
        heading: "4. While you wait",
        paragraphs: [
          "A review can be finished quickly, but it can also take days or weeks. Don't open new accounts with the same details and the same problem: that rarely helps. If your campaigns can't wait, a backup ad account that is already in good standing lets you keep running while the review is open.",
        ],
      },
      {
        heading: "If the review is rejected",
        paragraphs: [
          "Meta's decision after a review is often final for that asset. Learn from the reason given, and make sure your next setup doesn't repeat it.",
        ],
      },
    ],
  },
  {
    slug: "why-facebook-ads-get-rejected",
    title: "Why Facebook ads get rejected: common reasons",
    description:
      "The most common reasons Meta rejects ads, from restricted content and personal attributes to landing page issues, and how to fix a rejected ad.",
    date: "2026-11-06",
    readingMinutes: 4,
    sections: [
      {
        paragraphs: [
          "Every Meta ad goes through a review before it runs, and again when you edit it. Most of that review is automated. A rejected ad isn't the end of the world, but many rejections on one account can hurt its standing, so it pays to get them right.",
        ],
      },
      {
        heading: "Common reasons for rejection",
        list: [
          "Restricted products or services, such as certain health, financial or adult content, without the right authorisation.",
          "Copy that addresses personal attributes, like \"Are you struggling with debt?\" or \"Other people your age…\".",
          "Exaggerated or misleading claims, including unrealistic before-and-after results.",
          "A landing page that doesn't work, doesn't match the ad, or is mostly empty.",
          "Using Meta's brand or logos in a way the brand guidelines don't allow.",
        ],
      },
      {
        heading: "How to fix a rejected ad",
        paragraphs: [
          "Check the reason Meta gives in Ads Manager or Account Quality. Edit the ad to remove the problem and submit it again, or request a review if you believe the decision is wrong.",
        ],
      },
      {
        heading: "Prevent rejections",
        list: [
          "Read Meta's advertising standards for your industry before launching.",
          "Write about your product, not about the viewer's personal situation.",
          "Make sure the landing page delivers what the ad promises.",
          "Avoid launching many risky variations at once on a single account.",
        ],
      },
    ],
  },
  {
    slug: "what-is-temp-mail",
    title: "What is temp mail and when should you use it?",
    description:
      "Temporary email explained: how a disposable inbox works, when it is useful, its limits, and why you shouldn't use it for accounts you want to keep.",
    date: "2026-11-06",
    readingMinutes: 3,
    sections: [
      {
        paragraphs: [
          "Temp mail, also called a disposable or temporary email address, is an inbox you can use right away, without signing up, and that disappears after a while. It is a simple way to keep your real address out of places where you don't want it.",
        ],
      },
      {
        heading: "Good uses",
        list: [
          "Signing up for a newsletter, download or trial without getting spam afterwards.",
          "Testing sign-up and email flows of your own website or shop.",
          "Receiving a one-time confirmation link.",
        ],
      },
      {
        heading: "Limits to keep in mind",
        paragraphs: [
          "A temporary inbox is not private in the way your own email is, and it is deleted after a short time. Don't use it for accounts you want to keep, for anything with payment details, or for password resets you may need later: once the inbox is gone, so is your way back in.",
          "Some websites block known temporary email domains, so a sign-up may not work everywhere.",
        ],
      },
      {
        heading: "Our free temp mail",
        paragraphs: [
          "Our temp mail tool at allsourced-agency.com/tools works without an account. You can pick your own address or get a random one, and emails are deleted automatically after 24 hours.",
        ],
      },
    ],
  },
  {
    slug: "receive-sms-online-verification",
    title: "Receiving SMS verification codes online: how it works",
    description:
      "How temporary phone numbers for SMS verification work, when they are useful, what to watch out for, and why you shouldn't use them for accounts you want to keep.",
    date: "2026-11-06",
    readingMinutes: 3,
    sections: [
      {
        paragraphs: [
          "Many websites and apps ask for a phone number to send a verification code. A temporary phone number lets you receive that code online, without giving out your own number.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "You choose the service and the country, and you get a number for a short time. When the service sends its verification SMS, the code shows up on your screen. After that the number is released again.",
        ],
      },
      {
        heading: "When it is useful",
        list: [
          "Keeping your personal number private when trying out a service.",
          "Testing SMS verification flows in your own app or website.",
          "Verifying a service in a country where you don't have a local number.",
        ],
      },
      {
        heading: "What to watch out for",
        paragraphs: [
          "A temporary number is not yours to keep. If a service asks for a code again later, for example to log in or reset your password, you may not be able to receive it. For accounts you rely on, use a number you control.",
          "Always follow the terms of the service you are signing up for.",
        ],
      },
      {
        heading: "Our temp SMS tool",
        paragraphs: [
          "With our temp SMS tool at allsourced-agency.com/tools you pay per number from your wallet. If no code arrives, the amount is refunded to your wallet.",
        ],
      },
    ],
  },
  {
    slug: "facebook-ads-checklist-ecommerce",
    title: "Facebook ads launch checklist for e-commerce stores",
    description:
      "A practical checklist before you launch Facebook and Instagram ads for your online store: assets, tracking, creatives, landing pages and a backup plan.",
    date: "2026-11-06",
    readingMinutes: 4,
    sections: [
      {
        paragraphs: [
          "Most problems with new Facebook ad campaigns come from things that could have been checked before launch. Go through this list before you spend your first euro.",
        ],
      },
      {
        heading: "Assets",
        list: [
          "A Business Manager that owns your page, Instagram account and ad accounts.",
          "Two-factor authentication on every profile with access.",
          "A working payment method on each ad account.",
          "Your daily and account spending limits checked.",
        ],
      },
      {
        heading: "Tracking",
        list: [
          "Meta pixel installed and firing on product, cart and checkout pages.",
          "Conversions API connected, with deduplication working.",
          "Test purchase visible in Events Manager.",
        ],
      },
      {
        heading: "Store and landing pages",
        list: [
          "Fast loading on mobile.",
          "Clear prices, shipping costs and delivery times.",
          "Contact details, returns policy, terms and privacy policy easy to find.",
          "Product pages that match what your ads promise.",
        ],
      },
      {
        heading: "Creatives",
        list: [
          "Several creatives per ad set, in vertical and square formats.",
          "Copy that follows Meta's advertising standards.",
          "New creatives ready for when the first ones tire.",
        ],
      },
      {
        heading: "Backup plan",
        paragraphs: [
          "Plan for a restriction before it happens. Having a second ad account or agency ad account ready means your sales don't stop while a review is open.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function formatPostDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
