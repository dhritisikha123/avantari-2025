import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { openCookieSettings } from "../utils/cookieConsent"

const PageWrapper = styled.div`
  margin-top: 64px;

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    margin-top: 70px;
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 88px;
  }
`

const HeroSection = styled.section`
  background: #c3ff00;
  padding: 48px 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (min-width: 1024px) {
    padding: 88px 120px;
    gap: 20px;
  }
`

const Eyebrow = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.52px;
  color: #000000;

  @media only screen and (min-width: 1024px) {
    line-height: 20px;
  }
`

const HeroTitle = styled.h1`
  margin: 0;
  font-family: "Corben", serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  color: #000000;
  max-width: 350px;

  @media only screen and (min-width: 1024px) {
    font-size: 68px;
    line-height: 76px;
    max-width: 1000px;
  }
`

const HeroStandfirst = styled.p`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
  max-width: 350px;

  @media only screen and (min-width: 1024px) {
    font-size: 18px;
    line-height: 28px;
    max-width: 900px;
  }
`

const ContentWrapper = styled.div`
  background: #ffffff;
  padding: 40px 20px;

  @media only screen and (min-width: 1024px) {
    padding: 72px 120px;
  }
`

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 80px;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media only screen and (min-width: 1024px) {
    width: 560px;
  }
`

const SectionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const SectionHeading = styled.h2`
  margin: 0;
  font-family: "Corben", serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
`

const SectionBody = styled.p`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #000000;

  @media only screen and (min-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
  }
`

const ManageCookiesButton = styled.button`
  align-self: flex-start;
  margin-top: 4px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #000000;
  text-decoration: underline;
  text-decoration-color: #c3ff00;
  text-underline-offset: 3px;

  @media only screen and (min-width: 1024px) {
    font-size: 16px;
  }
`

const leftSections = [
  {
    heading: "Who we are",
    body: [
      "Avantari Technologies Private Limited runs avantari.org and is responsible for how personal information is used on this website. Contact us at comms@avantari.org.",
      "This notice covers the website and blog, contact form, newsletter, cookies and analytics. It does not cover data handled through Avantari products—including wearables, Holobot or apps—or client projects. Those need their own notices or agreements. The site is not directed at children.",
    ],
  },
  {
    heading: "What information Avantari collects",
    body: [
      "We collect information you choose to share. We also receive basic technical information when you use the site: IP address, device and browser type, pages viewed, referring page and an approximate location derived from your IP address. We also store your cookie choice.",
    ],
  },
  {
    heading: "Information submitted through the contact form",
    body: [
      "Name and email are required. You may also share your company, phone number and country code, where you need Avantari, budget, target date, how you found us and what is stuck. Please do not upload files or send a postal address.",
      "The message reaches our Google Workspace email and a Google Sheet. Access is currently limited to Avantari’s CEO. We use it to reply, assess whether we can help and keep a record of the conversation. We do not add you to the newsletter unless you sign up separately.",
    ],
  },
  {
    heading: "Newsletter subscriptions",
    body: [
      "The newsletter collects your email address only. Signing up is a separate, single opt-in choice. We use it to send Avantari content. You can unsubscribe from any email.",
      "A specialist email service may deliver the newsletter once selected. After you unsubscribe, we keep only the minimum suppression record needed to avoid emailing you again.",
    ],
  },
  {
    heading: "Why information is used",
    body: [
      "We use information to answer and assess enquiries; send the newsletter when you ask for it; run and secure the site; measure use after the required cookie choice; and keep records required by law.",
      "For visitors in the EEA or UK, these uses rely on steps requested before a contract, consent, legal obligations and Avantari’s legitimate interests in operating and protecting the business, as applicable. We do not sell personal information. Website data is not used to train AI.",
    ],
  },
  {
    heading: "Who can access or process it",
    body: [
      "Contact-form information is currently accessible to Avantari’s CEO. Google processes information through Analytics, Workspace email and Sheets. Microsoft provides Clarity. Our host, Hostinger, and its infrastructure partners process hosting logs. A newsletter provider will process email addresses once selected.",
      "A teammate or contractor may receive limited access only when needed for their work and under confidentiality. Providers process information under their own security and privacy terms.",
    ],
  },
  {
    heading: "Analytics and cookies",
    body: [
      "Necessary cookies help secure and load the site and remember your cookie choice. They are always on. Non-essential analytics use Google Analytics 4 (measurement ID G-KGV6PFK7DM) and Microsoft Clarity (project qetqbmpda8), including session replay. Avantari does not use advertising pixels or other analytics or error trackers at publication.",
      "Where consent is required—and by default in the banner—GA4 and Clarity stay off until you accept. You can refuse or change your choice in cookie settings or through your browser.",
    ],
    showManageCookies: true,
  },
]

const rightSections = [
  {
    heading: "How long information is kept",
    body: [
      "If an enquiry does not become a project, we keep it for 24 months after the last message, then delete it from the Google Sheet and lead-mailbox labels. Client records are kept for as long as the project and applicable law require.",
      "Newsletter data stays until you unsubscribe; after that, only the suppression record remains. GA4 and Clarity follow the retention controls set in those services and are not used to build a permanent marketing profile. Hostinger backups follow its normal rotation.",
    ],
  },
  {
    heading: "How Avantari protects information",
    body: [
      "The site uses HTTPS. Access to form submissions and the Google Sheet is limited and currently restricted to Avantari’s CEO. Google, Microsoft and Hostinger apply security measures to their own services.",
      "Avantari uses reasonable technical and organisational measures appropriate to the information and the risk. No online system is completely secure.",
    ],
  },
  {
    heading: "International data handling",
    body: [
      "Avantari handles website information in India. Google, Microsoft, Hostinger and other providers may process it in the United States or other countries.",
      "For EEA and UK transfers, we rely on providers’ published contractual safeguards, including Standard Contractual Clauses and, where applicable, participation in the Data Privacy Framework. Avantari does not claim separate custom transfer contracts where a provider’s published terms apply.",
    ],
  },
  {
    heading: "Your choices and privacy rights",
    body: [
      "You can refuse non-essential analytics, unsubscribe from the newsletter and withdraw consent at any time.",
      "Under India’s Digital Personal Data Protection law, rights may include access to information about processing, correction, completion, updating or erasure, withdrawal of consent, grievance redressal and nomination. In the EEA and UK, rights may include access, correction, erasure, restriction, objection, portability, withdrawal of consent and a complaint to the ICO or your local data protection authority. Additional local rights may apply in the US, MENA and elsewhere.",
    ],
  },
  {
    heading: "How to request access, correction or deletion",
    body: [
      "Email comms@avantari.org and describe your request. We may ask for enough information to verify your identity before acting. We aim to respond within 30 days, subject to applicable law.",
      "If a concern is not resolved, you may complain to the Data Protection Board of India, the UK Information Commissioner’s Office or your local EEA data protection authority, as applicable.",
    ],
  },
  {
    heading: "Privacy contact and last updated",
    body: [
      "Privacy and grievance contact\nBhairav Shankar, CEO\ncomms@avantari.org",
      "Last updated: 11 September 2026",
      "We may update this notice as the website, our providers or the law changes. The date above will change when we do.",
    ],
  },
]

const renderBody = text =>
  text.split("\n").map((line, i, arr) => (
    <React.Fragment key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </React.Fragment>
  ))

const renderColumn = sections =>
  sections.map(section => (
    <SectionBlock key={section.heading}>
      <SectionHeading>{section.heading}</SectionHeading>
      {section.body.map((para, i) => (
        <SectionBody key={i}>{renderBody(para)}</SectionBody>
      ))}
      {section.showManageCookies && (
        <ManageCookiesButton type="button" onClick={openCookieSettings}>
          Manage cookie preferences
        </ManageCookiesButton>
      )}
    </SectionBlock>
  ))

const PrivacyPolicy = () => {
  return (
    <Layout>
      <PageWrapper>
        <HeroSection>
          <Eyebrow>PRIVACY POLICY</Eyebrow>
          <HeroTitle>Privacy, in plain language.</HeroTitle>
          <HeroStandfirst>
            How Avantari handles information on this website, contact form,
            newsletter and analytics. Product and client data are covered
            separately. Last updated 11 September 2026.
          </HeroStandfirst>
        </HeroSection>

        <ContentWrapper>
          <Columns>
            <Column>{renderColumn(leftSections)}</Column>
            <Column>{renderColumn(rightSections)}</Column>
          </Columns>
        </ContentWrapper>
      </PageWrapper>
    </Layout>
  )
}

export default PrivacyPolicy

const canonicalUrl = "https://www.avantari.org/privacy-policy"

export const Head = () => (
  <>
    <Seo
      title="Privacy Policy | Avantari"
      description="How Avantari collects, uses and protects information from this website, its contact form, newsletter and analytics — including cookie choices for Google Analytics 4 and Microsoft Clarity."
      url={canonicalUrl}
    />
    <meta name="robots" content="index, follow" />
    <meta
      name="keywords"
      content="Avantari privacy policy, cookie policy, GDPR, DPDP Act, data protection"
    />
  </>
)
