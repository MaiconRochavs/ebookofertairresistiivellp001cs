# DigitalCraft Agency - Landing Page

A modern, responsive landing page for a web development agency built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient accents and smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Performance Optimized**: Built with Next.js for fast loading and SEO
- **Interactive Components**: Smooth animations and hover effects
- **Contact Form**: Functional contact form with validation
- **Portfolio Showcase**: Beautiful project gallery with filtering
- **Testimonials**: Client feedback and reviews section
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main landing page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── Services.tsx         # Services showcase
│   ├── About.tsx            # About section
│   ├── Portfolio.tsx        # Portfolio gallery
│   ├── Testimonials.tsx     # Client testimonials
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer component
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd landing-page-01
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... more shades
    900: '#1e3a8a',
  }
}
```

### Content
Update the content in each component file to match your agency's information:
- Company name and logo
- Services offered
- Portfolio projects
- Contact information
- Testimonials

### Styling
Modify the global styles in `src/app/globals.css` and component-specific styles as needed.

## 📱 Responsive Design

The landing page is fully responsive and includes:
- Mobile-first design approach
- Breakpoints for tablet and desktop
- Optimized navigation for mobile devices
- Responsive typography and spacing

## 🔧 Configuration Files

- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS configuration

## 📄 Sections

1. **Header** - Navigation with logo and menu
2. **Hero** - Compelling headline with CTA buttons
3. **Services** - Service offerings with icons and descriptions
4. **About** - Company information and statistics
5. **Portfolio** - Project showcase with filtering
6. **Testimonials** - Client feedback and reviews
7. **Contact** - Contact form and information
8. **Footer** - Links, social media, and newsletter signup

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 📈 Performance

- Lighthouse score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals optimized
- Image optimization with Next.js
- Code splitting and lazy loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions, please contact:
- Email: hello@digitalcraft.agency
- Phone: +1 (555) 123-4567

---

Built with ❤️ by DigitalCraft Agency 