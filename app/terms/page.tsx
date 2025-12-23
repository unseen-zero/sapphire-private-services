import SectionWrapper from '@/components/SectionWrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Sapphire Private Services LTD',
  description: 'Terms & Conditions for Sapphire Private Services LTD - Read our terms of service for automation solutions and website development.',
};

const termsContent = `
# Terms & Conditions – Sapphire Private Services LTD

**Last updated: December 23, 2025**

Welcome to Sapphire Private Services LTD. These Terms & Conditions govern your use of our website, services, and any agreements for automation solutions, website development, or related consulting. By inquiring, booking a consultation, or engaging our services, you agree to be bound by these terms.

## 1. Introduction

Sapphire Private Services LTD provides automation services (e.g., AI voice/WhatsApp bots, custom website development, IT infrastructure setups) primarily for small and medium-sized enterprises (SMEs). Our services are delivered by experienced professionals focused on efficiency, revenue growth, and time savings. These terms apply to all interactions, quotes, projects, and contracts with our company.

## 2. Services

We offer the following core services:

- AI-powered automation bots (voice, WhatsApp, Telegram)
- Custom website development (primarily NextJS-based)
- IT infrastructure and server setups
- Consulting on business automations and digital transformations

All services are customized to client needs and delivered remotely or on-site as agreed. Project timelines, deliverables, and features are outlined in individual quotes or project agreements.

## 3. Quotes, Bookings, and Payments

Quotes are provided via email or consultation and valid for 30 days. Services begin upon:

- Signed acceptance of quote/project agreement
- Payment of deposit (typically 50% upfront)

**Payment terms:**

- Deposits secure project slots and are non-refundable after work commences
- Remaining balance due upon project completion/delivery
- Payments processed securely via bank transfer or trusted payment providers
- All prices quoted in Euros (€) or local currency as specified
- Additional features or changes (scope creep) may incur extra fees

Invoices and confirmations sent via email. Late payments may delay delivery.

## 4. Cancellation and Refund Policy

**Cancellation by Client:**

- **Before project start (no work begun):** Full refund of deposit minus any consultation fees
- **After project start but before 50% completion:** 50% refund of deposit
- **After 50% completion or delivery:** No refund

**Cancellation by Sapphire Private Services LTD:**
Full refund if we cancel due to unforeseen circumstances (e.g., technical infeasibility). We will offer alternative solutions or timelines when possible.

## 5. Project Delivery and Liability

**Delivery:** We aim for rapid deployment (hours to weeks depending on scope) but timelines are estimates. Delays due to client feedback, third-party integrations, or force majeure are not our liability.

**Intellectual Property:** Upon full payment, clients own the delivered code/website/custom solution. We retain rights to reuse general frameworks/tools unless otherwise agreed.

**Liability:** Services are provided "as is" with professional care. Our liability is limited to the value of the service purchased. We are not responsible for indirect losses (e.g., lost revenue from downtime). We recommend clients maintain backups and test thoroughly in staging environments.

**Warranties:** 30-day bug-fix period post-delivery for issues caused by our work. Ongoing maintenance available via separate agreement.

## 6. Contact Information

For inquiries, support, or quotes:

**Sapphire Private Services LTD**  
Office 9047, 321-323 High Road  
Chadwell Heath, Romford, Essex, RM6 6AX  
United Kingdom  

**Email:** office@spsautomates.com  
**Phone:** +44 7456 461535  

We aim to respond to all inquiries within 24-48 hours.

## 7. Governing Law

These terms are governed by the laws of England and Wales. Any disputes will be resolved through the appropriate courts in England.

## 8. Changes to Terms

We may update these Terms & Conditions from time to time. The latest version will always be posted on this page with the updated date. Continued use of our services constitutes acceptance of changes.

---

**Thank you for choosing Sapphire Private Services LTD – let's automate your business and turn missed opportunities into cash flow!**

*Last updated: December 23, 2025*
`;

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SectionWrapper className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-slate max-w-none">
              <div
                dangerouslySetInnerHTML={{
                  __html: termsContent
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

                      // Convert lists
                      if (line.startsWith('- ')) {
                        return `<li class="mb-2 text-slate-700 ml-4">${line.substring(2)}</li>`;
                      }

                      // Handle bullet points with bold
                      if (line.includes('**') && line.includes('- ')) {
                        const listItem = line.substring(2);
                        const processed = listItem.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>');
                        return `<li class="mb-2 text-slate-700 ml-4">${processed}</li>`;
                      }

                      // Convert paragraphs
                      if (line.trim() === '') {
                        return '<br/>';
                      }

                      // Convert horizontal rules
                      if (line.startsWith('---')) {
                        return '<hr class="my-8 border-slate-200"/>';
                      }

                      // Handle emphasis with asterisks
                      if (line.includes('**')) {
                        line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>');
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
