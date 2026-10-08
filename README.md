# DK Web Solutions redesign

Open `index.html` in a browser. Deploy the entire folder to Vercel as a static site, keeping the `pages/` directory.

## Pages
- `index.html`: homepage
- `pages/services.html`: services and starting pricing
- `pages/work.html`: clearly labeled illustrative concept
- `pages/contact.html`: inquiry form and Calendly meeting link

## Before launch
1. **Activate the inquiry form:** It uses FormSubmit (`https://formsubmit.co/dwasuking@gmail.com`). FormSubmit requires email activation/verification for first use. Send a test request, activate via the verification email, then submit another test and verify delivery. This is a third-party service; review its privacy terms before using it for real customer data. No custom backend is included.
2. **Configure analytics:** Create a Google Analytics 4 web data stream, then paste its `G-...` measurement ID into `GA_MEASUREMENT_ID` in `script.js`. The code currently does not send analytics until an ID is provided. Check privacy/consent requirements before enabling tracking.
3. **Verify contact information:** Current email `dwasuking@gmail.com`, phone `(703) 953-5515`, and Calendly `https://calendly.com/dwasuking/30min` were retained from the original files.
4. **Review prices:** Site says websites **start at $500**, with final pricing determined after consultation. It does not promise that every service is $500.
5. **Replace the work concept:** The work page intentionally labels the illustration as a concept, not a completed client project. Replace it with actual work when ready.
6. Test the mobile menu, form, all links, keyboard navigation, and layout on real devices.

No payment or client acceptance happens directly on this site. All prospective clients request a meeting first.
