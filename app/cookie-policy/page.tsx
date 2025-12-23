import SectionWrapper from '@/components/SectionWrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy - Sapphire Private Services LTD',
  description: 'Cookie Policy for Sapphire Private Services LTD - Learn about how we use cookies to improve your browsing experience.',
};

const cookiePolicyContent = `
# Cookie Policy – Sapphire Private Services LTD

**Last updated: December 23, 2025**

Sapphire Private Services LTD uses cookies and similar technologies to improve your experience on our website, analyse traffic, and provide essential functionality.

## What are cookies?

Cookies are small text files placed on your device when you visit a website. They allow the site to remember your preferences and actions over time.

## Types of cookies we use

### Essential cookies
These are strictly necessary for the website to function (e.g., navigation, contact form submission, security). The site cannot operate properly without them.

### Analytics cookies
We use Google Analytics to understand how visitors interact with our website. These cookies collect anonymous information such as number of visitors, pages visited, and traffic sources. This helps us improve site performance and user experience.

### Functional cookies
These remember your preferences (e.g., language selection) to provide a more personalised experience on return visits.

### Marketing cookies
Currently not used. We do not track you across other websites for advertising purposes.

## Cookie duration

- **Session cookies:** deleted when you close your browser.
- **Persistent cookies:** remain on your device for a defined period (usually up to 1 year) or until you delete them.

## Managing cookies

You can control cookies through your browser settings. Most browsers allow you to:

- View active cookies
- Block third-party cookies
- Delete cookies
- Block all cookies

**Note:** disabling essential cookies may prevent parts of the website from working correctly.

## Third-party services

We use Google Analytics. Their cookie usage is described in Google's Privacy Policy: https://policies.google.com/privacy

## Changes to this policy

We may update this Cookie Policy from time to time. The latest version will always be available on this page.

## Contact us

If you have questions about our use of cookies, please contact:

**Sapphire Private Services LTD**  
Office 9047, 321-323 High Road  
Chadwell Heath, Romford, Essex, RM6 6AX  
United Kingdom  

**Email:** office@spsautomates.com  
**Phone:** +44 7456 461535  

---

**Thank you for visiting Sapphire Private Services LTD – let's automate your way to more time and less hassle!**

*Last updated: December 23, 2025*
`;

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SectionWrapper className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-slate max-w-none">
              <div
                dangerouslySetInnerHTML={{
                  __html: cookiePolicyContent
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
                      if (line.startsWith('#### ')) {
                        return `<h4 class="text-lg font-medium text-slate-700 mb-2 mt-4">${line.substring(5)}</h4>`;
                      }

                      // Convert bold text
                      line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>');

                      // Convert links
                      line = line.replace(/https:\/\/[^\s]+/g, (url) => `<a href="${url}" class="text-sapphire-600 hover:text-sapphire-700 underline" target="_blank" rel="noopener noreferrer">${url}</a>`);

                      // Convert lists
                      if (line.startsWith('- ')) {
                        return `<li class="mb-2 text-slate-700 ml-4">${line.substring(2)}</li>`;
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
