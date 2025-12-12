# Lomeon Greenscapes PTY LTD - Website

A modern, premium website for Lomeon Greenscapes, a professional landscaping company based in Durban, KZN, South Africa.

## 🚀 Features

- **Premium Design**: Modern, professional UI with smooth animations and scroll effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Contact Form**: Integrated contact form with email notifications via Resend
- **Founder Page**: Dedicated page showcasing the company founder, Lusanda Ndlovu
- **Services Showcase**: Comprehensive display of landscaping services
- **Before & After Gallery**: Visual portfolio of completed projects
- **Testimonials**: Client testimonials and reviews
- **SEO Optimized**: Proper metadata and Open Graph tags

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Email**: Resend API
- **Analytics**: Vercel Analytics
- **TypeScript**: Full type safety

## 📋 Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Resend API key (for email functionality)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ndelu-Blose/Lomeon-greenscapes.git
   cd Lomeon-greenscapes
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Then edit `.env.local` and add your Resend API key:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Setup (Resend)

The contact form requires a Resend API key to send emails. Here's how to set it up:

1. **Sign up for Resend**
   - Go to [resend.com](https://resend.com)
   - Create an account

2. **Get your API key**
   - Navigate to API Keys in your Resend dashboard
   - Create a new API key
   - Copy the key

3. **Add to environment variables**
   - Add `RESEND_API_KEY=your_key_here` to your `.env.local` file

4. **Verify your domain (Optional but recommended)**
   - In Resend dashboard, add and verify your domain
   - Update the `from` email in `app/api/send-quote/route.ts` to use your verified domain

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── api/               # API routes
│   │   └── send-quote/    # Contact form email handler
│   ├── contact/           # Contact page
│   ├── founder/          # Founder page
│   ├── services/         # Services page
│   ├── testimonials/     # Testimonials page
│   ├── layout.tsx        # Root layout
│   └── page.tsx         # Homepage
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── hero.tsx         # Hero section
│   ├── services.tsx     # Services section
│   ├── testimonials.tsx # Testimonials section
│   └── ...              # Other components
├── public/              # Static assets
│   ├── images/         # Project images
│   └── logo files      # Company logos
├── styles/             # Global styles
└── lib/                # Utility functions
```

## 🎨 Customization

### Colors
The color scheme is defined in `app/globals.css` using CSS custom properties. Modify the `:root` variables to change the theme colors.

### Content
- **Services**: Edit `components/services.tsx`
- **Testimonials**: Edit `components/testimonials.tsx`
- **Founder Info**: Edit `app/founder/page.tsx`
- **Contact Info**: Update phone numbers and emails in:
  - `components/footer.tsx`
  - `components/contact-preview.tsx`
  - `app/contact/page.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add your environment variables:
   - `RESEND_API_KEY`
4. Deploy!

### Deploy to Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

Make sure to set the `RESEND_API_KEY` environment variable in your hosting platform.

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key for email functionality | Yes |

## 🔗 Important Links

- **Business Email**: lomeongreenscapesptyltd@gmail.com
- **Founder Email**: lusandaromeo4@gmail.com
- **Phone/WhatsApp**: +27 66 129 2451
- **Instagram**: [@lomeon_greenscapes_pty_ltd](https://instagram.com/lomeon_greenscapes_pty_ltd)

## 📄 License

This project is private and proprietary to Lomeon Greenscapes PTY LTD.

## 👥 Credits

- **Founder**: Lusanda Ndlovu
- **Company**: Lomeon Greenscapes PTY LTD
- **Location**: Durban, KZN, South Africa

## 🐛 Troubleshooting

### Email not sending?
- Verify your `RESEND_API_KEY` is set correctly
- Check Resend dashboard for API usage limits
- Verify the email addresses in `app/api/send-quote/route.ts`

### Build errors?
- Make sure all dependencies are installed: `npm install`
- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

### Images not loading?
- Ensure images are in the `public/` directory
- Check image paths in components match file names exactly

---

Built with ❤️ for Lomeon Greenscapes PTY LTD

