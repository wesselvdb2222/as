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
