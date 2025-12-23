import SectionWrapper from '@/components/SectionWrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Sapphire Private Services LTD',
  description: 'Privacy Policy for Sapphire Private Services LTD - Learn how we protect your personal information and data.',
};

const privacyPolicyContent = `
# Privacy Policy – Sapphire Private Services LTD

**Last updated: December 23, 2025**

Sapphire Private Services LTD is committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website, inquire about services, or engage with our automations.

## 1. Information We Collect

We may collect the following types of personal information:

- **Contact details:** name, email address, phone number, WhatsApp number.
- **Service information:** project requirements, business needs, timelines.
- **Payment details:** processed securely through our payment provider (we do not store full card details).
- **Technical data:** IP address, browser type, device information, and cookies (see Cookie Policy).
- **Communication data:** messages sent via contact form, WhatsApp, or email.

## 2. How We Use Your Information

We use your data to:

- Process and confirm service inquiries or projects.
- Provide automation setups, website developments, and related updates.
- Respond to inquiries and provide customer support.
- Send confirmations and reminders.
- Improve our services and website experience.
- Comply with legal obligations.

**We do not sell your personal data to third parties.**

## 3. Legal Basis for Processing

We process your data based on:

- **Performance of a contract** (your service agreement).
- **Consent** (e.g., marketing communications – you can withdraw consent at any time).
- **Legitimate interests** (improving our services, ensuring efficiency).
- **Legal obligations**.

## 4. Data Sharing

We share your information only with trusted partners necessary for providing our services:

- Payment processors (secure transactions).
- Integration providers (e.g., for tools like Rezdy or N8N in automations).
- Cloud hosting and analytics providers (website functionality).

All partners are GDPR-compliant and bound by strict data protection agreements.

## 5. Data Storage and Security

Your data is stored securely within the European Economic Area (EEA). We use industry-standard encryption and security measures to protect against unauthorized access, alteration, or disclosure.

## 6. Your Rights

Under GDPR, you have the right to:

- Access your personal data.
- Rectify inaccurate data.
- Erase your data (right to be forgotten).
- Restrict or object to processing.
- Data portability.
- Withdraw consent at any time.

To exercise these rights, contact us at info@spsautomates.com.

## 7. Data Retention

We retain service-related data for 5 years (legal/tax requirements) and delete other personal data when no longer needed.

## 8. Cookies

We use cookies to improve your experience. See our separate Cookie Policy for details.

## 9. Contact Us

If you have any questions about this Privacy Policy or our data practices, please contact:

**Sapphire Private Services LTD**  
Office 9047, 321-323 High Road  
Chadwell Heath, Romford, Essex, RM6 6AX  
United Kingdom  

**Email:** office@spsautomates.com  
**Phone:** +44 7456 461535  

We will respond within 30 days.

## Changes to this Policy

We may update this Privacy Policy from time to time. The latest version will always be posted on this page with the updated date.

---

**Thank you for trusting Sapphire Private Services LTD to automate your success and save your time!**

*Last updated: December 23, 2025*
`;

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SectionWrapper className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-slate max-w-none">
              <div
                dangerouslySetInnerHTML={{
                  __html: privacyPolicyContent
                    .split('\n')
                    .map(line => {
                      // Convert markdown headers
                      if (line.startsWith('# ')) {
                        return `<h1 class="text-3xl font-bold text-slate-900 mb-6 mt-8 first:mt-0">${line.substring(2)}</h1>`;
                      }
                      if (line.startsWith('## ')) {
                        return `<h2 class="text-2xl font-bold text-slate-800 mb-4 mt-8">${line.substring(3)}</h2>`;
                      }
                      if (line.startsWith('### ')) {
                        return `<h3 class="text-xl font-semibold text-slate-700 mb-3 mt-6">${line.substring(4)}</h3>`;
                      }

                      // Convert bold text
                      line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>');

                      // Convert italic text
                      line = line.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');

                      // Convert lists
                      if (line.startsWith('- ')) {
                        return `<li class="mb-2 text-slate-700">${line.substring(2)}</li>`;
                      }

                      // Convert paragraphs
                      if (line.trim() === '') {
                        return '<br/>';
                      }

                      // Convert horizontal rules
                      if (line.startsWith('---')) {
                        return '<hr class="my-8 border-slate-200"/>';
                      }

                      return `<p class="text-slate-700 mb-4 leading-relaxed">${line}</p>`;
                    })
                    .join('')
                }}
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
