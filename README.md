# Portfolio — Muhammad Rasyid Hidayat

Professional portfolio website showcasing expertise in Backend & Database Engineering, built with Next.js 14, TypeScript, TailwindCSS, and PostgreSQL.

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
4. Deploy!

### Environment Variables

Make sure to set these in your deployment platform:

- `DATABASE_URL` - PostgreSQL connection string
- `NEXT_PUBLIC_SITE_URL` - Your site URL (optional, for SEO)

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

## 📚 Next Steps

This portfolio is designed to be scalable. Future enhancements could include:

- Blog section
- Admin dashboard for managing projects
- Analytics integration
- Email notifications for contact form
- Multi-language support
- Dark mode toggle

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Muhammad Rasyid Hidayat**

- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

Built with ❤️ using Next.js 14

