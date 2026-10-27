# Sanjay Goswami — Professional Insurance, Investment & Real Estate Website

A modern, responsive, conversion-focused, and accessible business website built for **Sanjay Goswami — Insurance & Investment Advisor**, located in Prayagraj (Allapur), Uttar Pradesh, India.

---

## 🌟 Key Features & Design Philosophy

1. **Clean, Uncluttered Layout**:
   - Generous white space with a premium brand color palette: Primary Navy (`#0B1F46`), Secondary Blue (`#1455A0`), and Accent Gold (`#E7B52C`).
   - Bold display headings with clear typographic hierarchy.
2. **Interactive Storytelling Life-Stage Slider (`StorySlider`)**:
   - Visual milestone journey guiding visitors across career kickoff, family protection, wealth creation, retirement, and property aspirations.
   - Distinct icons, key considerations, and tailored WhatsApp consultation triggers.
3. **Pictorial Representation & Line Icons**:
   - Lucide React icons representing every service domain and process step.
   - Structured comparison tables (Term Insurance vs Traditional Endowment) and mutual fund category breakdowns.
4. **Direct WhatsApp & Phone Integration**:
   - Interactive client-side enquiry form that formats user inputs into an instant prefilled WhatsApp message.
   - Dual-contact selector for Primary (`+91 76689 86660`) and Alternative (`+91 94536 22977`) phone numbers.
   - Floating Quick-Contact button with single-tap access on mobile and desktop.
5. **Authentic Profile Representation**:
   - Preserves and features the supplied high-resolution portrait (`sanjay_goswami_image.png`) in the hero and About sections with proper aspect ratio and focal positioning.
6. **Regulatory Compliance & Transparency**:
   - Strict adherence to factual accuracy: zero invented credentials, years of experience, fake reviews, or guaranteed returns.
   - Explicit statutory disclaimers for Mutual Funds market risks, insurance policy solicitations, and real estate legal verifications.
   - Draft labels indicating owner review prior to official deployment.
7. **13 Complete Routed Pages**:
   - Home (`/`)
   - About (`/about`)
   - All Services Hub (`/services`)
   - Health Insurance (`/services/health-insurance`)
   - Life Insurance (`/services/life-insurance`)
   - Mutual Funds & SIP (`/services/mutual-funds`)
   - Real Estate Assistance (`/services/real-estate`)
   - Rental & Office Property (`/services/rental-property`)
   - Resources & FAQs (`/resources`)
   - Contact & Enquiries (`/contact`)
   - Privacy Policy (`/privacy-policy`)
   - Terms of Use (`/terms`)
   - Disclaimers (`/disclaimer`)

---

## 🛠 Technology Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Bundler**: Vite 6
- **Styling**: Tailwind CSS 3
- **Routing**: React Router 6
- **Icons**: Lucide React
- **Fonts**: Outfit (headings) & Plus Jakarta Sans / Inter (body)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or 20+ installed
- npm 9+ or pnpm

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your web browser.

### 3. Build for Production
```bash
npm run build
```
The compiled, optimized static distribution assets will be output to the `dist/` directory.

### 4. Preview the Production Build Locally
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

The project produces a standard static website that can be hosted on any web host, including **Hostinger**, **Netlify**, **Vercel**, or **Apache/Nginx VPS**.

### Deploying to Hostinger (cPanel / hPanel)
1. Run the production build:
   ```bash
   npm run build
   ```
2. Log in to your Hostinger control panel.
3. Open the **File Manager** for your domain (e.g. `public_html`).
4. Upload all files and folders located inside the `dist/` folder directly into `public_html`.
5. For single-page app (SPA) routing, ensure an `.htaccess` file exists in `public_html` with the following rewrite rules so routes like `/services` or `/contact` resolve to `index.html`:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## 📋 Owner Verification Checklist (Before Official Launch)

Prior to public launch, Sanjay Goswami should review and confirm:
- [ ] Primary phone number (`7668986660`) is active on WhatsApp.
- [ ] Alternative phone number (`9453622977`) is active on WhatsApp.
- [ ] Exact office address in Allapur, Prayagraj if physical client visits are accommodated.
- [ ] Verification of draft copy in [`src/pages/PrivacyPolicy.tsx`](src/pages/PrivacyPolicy.tsx) and [`src/pages/Terms.tsx`](src/pages/Terms.tsx).
- [ ] Domain name configuration and SSL certificate installation.

---

## 📂 Project Directory Structure

```text
sanjay goswami website/
├── sanjay_goswami_image.png     # Original advisor profile portrait
├── public/
│   ├── favicon.svg              # SG brand monogram favicon
│   ├── robots.txt               # Search crawler indexing rules
│   ├── sitemap.xml              # XML sitemap with 13 canonical URLs
│   └── sanjay_goswami_image.png # Static copy for production bundle
├── src/
│   ├── components/
│   │   ├── EnquiryForm.tsx      # WhatsApp prefill enquiry generator
│   │   ├── EnquiryModal.tsx     # Reusable service enquiry popup
│   │   ├── FloatingContact.tsx  # Floating WhatsApp / Call widget
│   │   ├── Footer.tsx           # Comprehensive footer with legal links
│   │   ├── Header.tsx           # Sticky header with desktop & mobile nav
│   │   ├── MobileMenu.tsx       # Accessible mobile drawer
│   │   ├── RiskNotice.tsx       # Standardized regulatory risk banners
│   │   ├── SEOHead.tsx          # Dynamic page titles & OpenGraph tags
│   │   ├── ServiceCard.tsx      # Pictorial service card
│   │   └── StorySlider.tsx      # Interactive life-stage story carousel
│   ├── config/
│   │   └── business.ts          # Central source of truth for business data
│   ├── data/
│   │   └── servicesData.ts      # Detailed data for 5 verticals & FAQs
│   ├── pages/
│   │   ├── About.tsx            # About Sanjay Goswami with portrait
│   │   ├── Contact.tsx          # Contact details & enquiry form
│   │   ├── Disclaimer.tsx       # Statutory disclaimers
│   │   ├── HealthInsurance.tsx  # Health insurance deep dive
│   │   ├── Home.tsx             # Homepage with Hero, Slider, and Services
│   │   ├── LifeInsurance.tsx    # Term life insurance deep dive
│   │   ├── MutualFunds.tsx      # Mutual funds & SIP deep dive
│   │   ├── PrivacyPolicy.tsx    # Draft privacy policy
│   │   ├── RealEstate.tsx       # Real estate assistance in Prayagraj
│   │   ├── RentalProperty.tsx   # Rental & commercial space assistance
│   │   ├── Resources.tsx        # Educational FAQs & glossary
│   │   ├── Services.tsx         # 5-service overview hub
│   │   └── Terms.tsx            # Draft terms of use
│   ├── styles/
│   │   └── globals.css          # Tailwind CSS and typography tokens
│   ├── App.tsx                  # Router with 13 routes and ScrollToTop
│   └── main.tsx                 # React entrypoint
├── index.html                   # HTML template with Google Fonts & SEO
├── package.json                 # Project dependencies & scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind theme & brand color extensions
├── tsconfig.json                # TypeScript compiler configuration
└── tsconfig.node.json           # Vite node TypeScript configuration
```
