# Susan Paul Music Academy - Piano Teaching Platform 🎹

A comprehensive web application for Susan Paul's piano teaching academy, featuring student management, progress tracking, lesson scheduling, and a beautiful musical-themed interface.

## 🌟 Features

### For Susan (Teacher/Admin)
- **Student Management**: Add, edit, and manage student profiles
- **Progress Tracking**: Monitor student progress with detailed analytics
- **Lesson Planning**: Schedule and manage lessons with integrated calendar
- **Resource Library**: Upload and organize sheet music, recordings, and tutorials
- **Event Management**: Create and manage recitals, masterclasses, and workshops
- **Professional Portfolio**: Showcase qualifications and experience
- **Communication Center**: Message students and parents directly

### For Students
- **Personal Dashboard**: View upcoming lessons, assignments, and progress
- **Practice Logs**: Track daily practice with timer and piece management
- **Achievement System**: Earn badges and track milestones
- **Resource Access**: Download sheet music and learning materials
- **Event Registration**: Sign up for recitals and workshops

### For Parents
- **Progress Overview**: Monitor child's musical journey
- **Practice Statistics**: View practice time and consistency
- **Communication**: Direct messaging with teacher
- **Payment History**: Track fees and payments

## 🛠 Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **UI Components**: Shadcn/ui, Radix UI
- **Animations**: Framer Motion
- **Backend**: Convex (Real-time database)
- **Authentication**: Clerk (optional) or Convex Auth
- **Media Storage**: Cloudinary
- **Payments**: Razorpay (Indian market)

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn
- Git
- Convex account (free tier available)

### Setup Steps

1. **Clone the repository**
```bash
git clone git@github.com:rakesh8116/susan-paul.git
cd susan-paul
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Setup Convex**
```bash
# Install Convex CLI globally (if not already installed)
npm install -g convex

# Login to Convex
npx convex login

# Initialize Convex in your project
npx convex init

# Deploy the schema
npx convex deploy
```

4. **Configure environment variables**
```bash
# Copy the example env file
cp .env.example .env.local

# Edit .env.local and add your keys:
# - NEXT_PUBLIC_CONVEX_URL (from Convex dashboard)
# - Other optional services (Clerk, Cloudinary, Razorpay)
```

5. **Run the development server**
```bash
# In one terminal, run Convex
npx convex dev

# In another terminal, run Next.js
npm run dev
# or
yarn dev
```

6. **Open the application**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure

```
susan-paul/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication pages
│   ├── (dashboard)/       # Dashboard pages
│   ├── (public)/          # Public pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── animations/        # Animation components
│   ├── dashboard/         # Dashboard components
│   ├── layout/           # Layout components
│   ├── providers/        # Context providers
│   └── ui/               # UI components
├── convex/               # Convex backend
│   ├── schema.ts         # Database schema
│   ├── students.ts       # Student functions
│   ├── lessons.ts        # Lesson functions
│   └── ...              # Other functions
├── lib/                  # Utility functions
├── hooks/               # Custom React hooks
├── types/               # TypeScript types
└── public/              # Static assets
```

## 🎨 Customization

### Theme Colors
Edit the musical theme colors in `tailwind.config.js`:
- Primary: Purple gradient (`musical-purple`)
- Secondary: Gold gradient (`musical-gold`)

### Fonts
The app uses:
- Display: Playfair Display (headings)
- Body: Inter (content)

## 📱 Features Roadmap

- [ ] Mobile app (React Native)
- [ ] Video lesson integration
- [ ] AI-powered practice feedback
- [ ] Social features (student community)
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Online payment integration
- [ ] Google Calendar sync
- [ ] Zoom integration for online lessons
- [ ] WhatsApp notifications

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is private and proprietary to Susan Paul Music Academy.

## 📞 Contact

- **Susan Paul**: tsusanpaul@gmail.com
- **Phone**: +91 98455 42493
- **Location**: Bangalore, Karnataka, India

## 🙏 Acknowledgments

- Built with love for music education
- Special thanks to all students and parents
- Inspired by Susan Paul's vision of musical excellence

---

**Note**: This is a private repository. Please ensure you have proper access rights before attempting to clone or contribute.
