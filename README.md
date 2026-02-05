# Portfolio — Muhammad Rasyid Hidayat

Professional portfolio website showcasing expertise in Full-Stack Engineering with modern tech stack. Features 11 production-ready projects including enterprise systems, full-stack applications, and modern landing pages.

**🌐 Live Portfolio:** [Coming Soon - Deploy to Vercel]

**📋 All Deployed Projects:** See [DEPLOYED_URLS.md](./DEPLOYED_URLS.md) for complete list of live demos

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout with metadata
│   ├── globals.css           # Global styles
│   ├── about/                # About page
│   ├── skills/               # Skills page
│   ├── projects/             # Projects page
│   ├── experience/           # Experience page
│   ├── contact/              # Contact page
│   └── api/
│       └── contact/          # Contact form API route
├── components/
│   ├── Navbar.tsx            # Navigation component
│   ├── Footer.tsx            # Footer component
│   ├── HeroSection.tsx       # Hero section
│   ├── SectionTitle.tsx      # Reusable section title
│   ├── ProjectCard.tsx       # Project card component
│   ├── SkillCard.tsx         # Skill card component
│   └── Timeline.tsx          # Experience timeline
├── lib/
│   └── prisma.ts             # Prisma client instance
├── prisma/
│   └── schema.prisma         # Database schema
└── public/                   # Static assets
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
cd portfolio
npm install
```

### 2. Database Setup

#### Option A: Local PostgreSQL

1. Create a PostgreSQL database:
```sql
CREATE DATABASE portfolio;
```

2. Copy `.env.example` to `.env`:
```bash
cp env.example .env
```

3. Update `.env` with your database connection:
```
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio?schema=public"
```

#### Option B: Neon / Supabase (Recommended for Production)

1. Create a free account at [Neon](https://neon.tech) or [Supabase](https://supabase.com)
2. Create a new project and get your connection string
3. Update `.env` with the connection string

### 3. Run Prisma Migrations

```bash
# Generate Prisma Client
npm run prisma:generate

# Run migrations
npm run prisma:migrate
```

### 4. Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run prisma:generate` - Generate Prisma Client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:studio` - Open Prisma Studio (database GUI)

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables:
   - `DATABASE_URL` - Your PostgreSQL connection string
   - `NEXT_PUBLIC_POS_DEMO_URL` - URL untuk demo POS System (contoh: https://pos-system.vercel.app/login)
   - `NEXT_PUBLIC_SITE_URL` - Your portfolio URL (optional)
4. Deploy!

**Mengubah Link Setelah Deploy**: 
- Buka Settings → Environment Variables di Vercel dashboard
- Update nilai `NEXT_PUBLIC_POS_DEMO_URL` dengan URL baru
- Redeploy aplikasi (atau tunggu auto-redeploy jika ada perubahan)
- Link akan otomatis terupdate tanpa perlu mengubah kode!

### Environment Variables

Make sure to set these in your deployment platform:

- `DATABASE_URL` - PostgreSQL connection string
- `NEXT_PUBLIC_SITE_URL` - Your site URL (optional, for SEO)
- `NEXT_PUBLIC_POS_DEMO_URL` - URL untuk demo POS System (optional, default: http://localhost:3001/login)

**Catatan Penting**: Semua link demo project bisa diubah dengan mudah melalui environment variables tanpa perlu mengubah kode. Setelah deploy, cukup update environment variable di platform deployment Anda (Vercel, Netlify, dll) dan aplikasi akan otomatis menggunakan URL baru setelah rebuild.

## 📄 Pages

- **/** - Landing page with hero section
- **/about** - About page with education and expertise
- **/skills** - Technical skills showcase
- **/projects** - Portfolio projects
- **/experience** - Professional experience timeline
- **/contact** - Contact form and information

## 🎨 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth animations with Framer Motion
- ✅ SEO optimized with metadata
- ✅ Contact form with database integration
- ✅ Clean, modern UI with TailwindCSS
- ✅ TypeScript for type safety
- ✅ Production-ready code structure

## 🔧 Customization

### Update Personal Information

1. Edit `app/layout.tsx` for site metadata
2. Update content in each page component
3. Modify `components/Footer.tsx` for contact links
4. Update project data in `app/projects/page.tsx`
5. Update experience data in `app/experience/page.tsx`

### Styling

- Colors: Edit `tailwind.config.ts` for custom color scheme
- Fonts: Update `app/globals.css` for different fonts
- Components: All components are in `components/` directory

## 📧 Contact Form

The contact form at `/contact` saves messages to PostgreSQL via Prisma. Make sure:

1. Database is set up and migrations are run
2. `DATABASE_URL` is configured in `.env`
3. Prisma Client is generated (`npm run prisma:generate`)

## 🐛 Troubleshooting

### Database Connection Issues

- Verify `DATABASE_URL` in `.env` is correct
- Ensure PostgreSQL is running (if using local DB)
- Check network access for cloud databases

### Prisma Issues

- Run `npm run prisma:generate` after schema changes
- Run `npm run prisma:migrate` to apply migrations
- Use `npm run prisma:studio` to inspect database

## 🎯 Featured Projects (All Live!)

### 🥇 Enterprise-Level Systems
1. **Order Management System** - OCR & Bot Integration
   - Live: https://order-management-system-frontend-or.vercel.app/
   - Tech: Node.js, React, PostgreSQL, Google Vision OCR, Telegram/WhatsApp Bot
   - Highlights: 80% faster input, 35+ tests, 17+ docs

2. **Financial Reporting System** - 10x Performance Optimization
   - Live: https://financial-reporting-system.vercel.app/
   - Tech: Go, Next.js 14, PostgreSQL, Redis, PL/pgSQL
   - Highlights: 95% cache improvement (450ms → 5ms), 100K+ transactions

3. **POS System** - Modern Point of Sale
   - Live: https://pos-system-seven-pied.vercel.app/
   - Tech: Go, sqlc, Next.js 14, Docker, OpenAPI
   - Highlights: Type-safe queries, RBAC, containerized

### 🥈 Full-Stack Applications
4. **Kopi Shop Progo** - Dynamic CMS
   - Live: https://kopi-shop-progo.vercel.app/
   - Tech: Node.js, React, PostgreSQL, Google Maps
   
5. **Dashboard Raport Sekolah** - School Management
   - Live: https://web-dasboard-raport-v1.vercel.app/
   - Tech: Node.js, React, PostgreSQL, JWT, ExcelJS

### 🥉 Landing Pages (6 Projects)
- Professional Landing Page: https://professional-landing-page-neon.vercel.app/
- Nebula Innovations: https://nebula-innovations.vercel.app/
- Company Profile (3D): https://company-profile-landing.vercel.app/
- AI SaaS Landing: https://ai-productivity-saas-landing.vercel.app/
- Restaurant Page: https://rm-lukito-badran-new-template.vercel.app/
- Medical Practice: https://praktek-dr-indah-nurhayati-sp-a.vercel.app/

**Total: 11 Production-Ready Projects ✅**

See [DEPLOYED_URLS.md](./DEPLOYED_URLS.md) for complete details including demo credentials.

## 📚 Portfolio Strategy

This portfolio is part of a comprehensive career strategy:
- Week 1: Deploy all projects ✅ **COMPLETED!**
- Week 2: GitHub repos, LinkedIn, Upwork profiles
- Week 3-4: Start freelance applications
- Month 2-3: Land first remote job or freelance clients

See [ACTION_CHECKLIST.md](../porto2.0/ACTION_CHECKLIST.md) for complete 30-day plan.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Muhammad Rasyid Hidayat**

- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

Built with ❤️ using Next.js 14

