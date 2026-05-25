import { LegalLayout, LegalSection } from '../components/privacyPage&terms/LegalLayout'
import { TocSidebar } from '../components/privacyPage&terms/TocSidebar'
import { ContactCard } from '../components/privacyPage&terms/ContactCard'
import { Link } from 'react-router-dom'
import { Shield, ArrowRight } from 'lucide-react'

const sections = [
  {
    num: 1,
    title: 'Introduction',
    id: 'introduction',
    body: 'Appsoleum is a legacy preservation and time capsule messaging platform allowing users to store and deliver digital content to designated beneficiaries.',
  },
  {
    num: 2,
    title: 'Eligibility',
    id: 'eligibility',
    body: 'You must be 18+ and legally capable of entering into this agreement.',
  },
  {
    num: 3,
    title: 'Description of Services',
    id: 'services',
    body: 'Includes Appso Messages, Capsules, Beneficiaries, and scheduled delivery.',
  },
  {
    num: 4,
    title: 'Account Registration',
    id: 'account',
    body: 'Users must provide accurate info and maintain account security.',
  },
  {
    num: 5,
    title: 'User Content',
    id: 'content',
    body: 'Users retain ownership but grant Appsoleum rights to store and deliver content.',
  },
  {
    num: 6,
    title: 'Beneficiaries & Delivery',
    id: 'beneficiaries',
    body: 'Users are responsible for beneficiary accuracy; delivery not guaranteed.',
  },
  {
    num: 7,
    title: 'Data Storage',
    id: 'data-storage',
    body: 'Content stored securely in cloud systems; long-term storage possible.',
  },
  {
    num: 8,
    title: 'Payments',
    id: 'payments',
    body: 'Subscriptions handled via Apple and Google.',
  },
  {
    num: 9,
    title: 'Prohibited Use',
    id: 'prohibited',
    body: 'No unlawful use, hacking, or impersonation.',
  },
  {
    num: 10,
    title: 'Intellectual Property',
    id: 'ip',
    body: 'Owned by Appsoleum LLC.',
  },
  {
    num: 11,
    title: 'Termination',
    id: 'termination',
    body: 'Accounts may be suspended for violations.',
  },
  {
    num: 12,
    title: 'Disclaimer',
    id: 'disclaimer',
    body: 'Service provided "as is".',
  },
  {
    num: 13,
    title: 'Limitation of Liability',
    id: 'liability',
    body: 'No liability for indirect damages.',
  },
  {
    num: 14,
    title: 'Indemnification',
    id: 'indemnification',
    body: 'Users agree to protect Appsoleum from claims.',
  },
  {
    num: 15,
    title: 'Force Majeure',
    id: 'force-majeure',
    body: 'No liability for uncontrollable events.',
  },
  {
    num: 16,
    title: 'Changes',
    id: 'changes',
    body: 'Terms may be updated.',
  },
  {
    num: 17,
    title: 'Governing Law',
    id: 'governing-law',
    body: 'Governed by Georgia law.',
  },
]

export function TermsPage() {
  return (
    <LegalLayout
      badge="Terms & Conditions"
      title="Terms & Conditions"
      description="Please read these terms carefully before using Appsoleum. They govern your use of our legacy preservation platform."
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
              <Shield size={20} />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">
                Your agreement with Appsoleum
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                By accessing or using Appsoleum, you agree to be bound by these
                Terms. If you do not agree, please do not use the platform.
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
            <p className="text-slate-500 text-sm">
              Continue to our Privacy Policy →
            </p>
            <Link
              to="/privacy"
              className="inline-flex items-center gap-2 bg-appso-orange hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-appso-orange/20"
            >
              Read Privacy Policy
              <ArrowRight size={16} />
            </Link>
          </div>

          <ContactCard />
        </div>
      </div>
    </LegalLayout>
  )
}
