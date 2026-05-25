import {
  LegalLayout,
  LegalSection,
} from "../components/privacyPage&terms/LegalLayout";
import { ContactCard } from "../components/privacyPage&terms/ContactCard";
import { Link } from "react-router-dom";
import { Lock, ArrowLeft } from "lucide-react";
import { TocSidebar } from "../components/privacyPage&terms/TocSidebar";

const sections = [
  {
    num: 18,
    title: "Introduction",
    id: "introduction",
    body: "We protect your personal data.",
  },
  {
    num: 19,
    title: "Information We Collect",
    id: "info-collected",
    body: "Includes personal, content, beneficiary, and usage data.",
  },
  {
    num: 20,
    title: "How We Use Data",
    id: "use-data",
    body: "Operate platform, deliver messages, improve service.",
  },
  {
    num: 21,
    title: "Storage & Security",
    id: "storage",
    body: "Data stored securely via cloud infrastructure.",
  },
  {
    num: 22,
    title: "Data Retention",
    id: "retention",
    body: "Content may be stored long-term.",
  },
  {
    num: 23,
    title: "Data Sharing",
    id: "sharing",
    body: "We do not sell data; limited sharing only.",
  },
  {
    num: 24,
    title: "Third-Party Services",
    id: "third-party",
    body: "Includes Firebase, Apple, Google.",
  },
  {
    num: 25,
    title: "User Rights",
    id: "rights",
    body: "You can access, update, or delete data.",
  },
  {
    num: 26,
    title: "Data Deletion",
    id: "deletion",
    body: "Deletion requests allowed.",
  },
  {
    num: 27,
    title: "Children",
    id: "children",
    body: "Not intended for under 18.",
  },
  {
    num: 28,
    title: "International Users",
    id: "international",
    body: "Data processed in U.S.",
  },
  {
    num: 29,
    title: "Policy Updates",
    id: "updates",
    body: "Policy may change.",
  },
];

export function PrivacyPage() {
  return (
    <LegalLayout
      badge="Privacy Policy"
      title="Privacy Policy"
      description="How we collect, use, and protect your personal information at Appsoleum."
      effectiveDate="April 7, 2026"
      lastUpdated="April 7, 2026"
    >
      <div className="flex gap-10 max-w-6xl mx-auto">
        <TocSidebar
          title="On This Page"
          items={sections.map((s) => ({
            num: s.num,
            title: s.title,
            id: s.id,
          }))}
        />

        <div className="flex-1 min-w-0">
          {/* Intro callout */}
          <div className="bg-gradient-to-br from-appso-orange/10 to-transparent border border-appso-orange/20 rounded-2xl p-6 mb-12 flex gap-4">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-appso-orange/20 flex items-center justify-center text-appso-orange">
              <Lock size={20} />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">
                Your privacy matters
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We treat your memories, voice, and messages with the highest
                standard of security. This policy explains how your information
                is handled.
              </p>
            </div>
          </div>

          {sections.map((section) => (
            <LegalSection
              key={section.id}
              id={section.id}
              num={section.num}
              title={section.title}
            >
              <p>{section.body}</p>
            </LegalSection>
          ))}

          {/* Footer nav */}
          <div className="mt-16 pt-10 border-t border-slate-800 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <Link
              to="/terms"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-appso-orange transition-colors font-medium text-sm"
            >
              <ArrowLeft size={16} />
              Back to Terms & Conditions
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-appso-orange hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-appso-orange/20"
            >
              Return to Home
            </Link>
          </div>

          <ContactCard />
        </div>
      </div>
    </LegalLayout>
  );
}
