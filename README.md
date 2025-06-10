# AI Research Group Website

A modern, responsive website built with Next.js and Tailwind CSS for showcasing an AI research group's work, team, publications, and research areas.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive Layout**: Fully responsive design that works on all devices
- **TypeScript**: Built with TypeScript for better code quality and development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **SEO Friendly**: Optimized for search engines with proper meta tags
- **Accessible**: Follows web accessibility best practices

## 📋 Sections

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About**: Research group mission, philosophy, and key statistics
- **Research Areas**: Detailed overview of research domains with current projects
- **Publications**: Recent research publications with abstracts and tags
- **Team**: Team member profiles with contact information
- **News**: Latest updates and announcements
- **Contact**: Contact form and office information

## 🛠️ Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **ESLint**: Code linting and formatting

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** or **yarn** or **pnpm**

### Step-by-Step Installation

1. **Install Node.js** (if not already installed):
   - Download from [https://nodejs.org/](https://nodejs.org/)
   - Choose the LTS version
   - Follow the installation instructions for your operating system

2. **Clone or navigate to the project directory**:
   ```bash
   cd research-group-website
   ```

3. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## 📁 Project Structure

```
research-group-website/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # React components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Hero.tsx       # Hero section
│   │   ├── About.tsx      # About section
│   │   ├── Research.tsx   # Research areas
│   │   ├── Publications.tsx # Publications
│   │   ├── Team.tsx       # Team members
│   │   ├── News.tsx       # News section
│   │   ├── Contact.tsx    # Contact form
│   │   └── Footer.tsx     # Footer
│   ├── lib/               # Utility functions
│   └── types/             # TypeScript type definitions
├── .eslintrc.json         # ESLint configuration
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Customization

### Colors
The website uses a custom blue color palette defined in `tailwind.config.js`. You can modify the primary colors by updating the `colors.primary` section.

### Content
To customize the content:

1. **Update team members** in `src/components/Team.tsx`
2. **Modify research areas** in `src/components/Research.tsx`
3. **Add publications** in `src/components/Publications.tsx`
4. **Update contact information** in `src/components/Contact.tsx`
5. **Change site metadata** in `src/app/layout.tsx`

### Styling
- Global styles are in `src/app/globals.css`
- Component-specific styles use Tailwind CSS classes
- Custom components can be added to the `src/components/` directory

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms
- **Netlify**: Connect GitHub repository and deploy
- **AWS Amplify**: Deploy from Git repository
- **Traditional Hosting**: Run `npm run build` and upload the `out` folder

## 🐛 Troubleshooting

### Common Issues

1. **Node.js not found**:
   - Install Node.js from the official website
   - Restart your terminal after installation

2. **Dependencies not installing**:
   - Clear npm cache: `npm cache clean --force`
   - Delete `node_modules` and `package-lock.json`, then run `npm install`

3. **Port 3000 already in use**:
   - Kill the process using port 3000 or use a different port:
   ```bash
   npm run dev -- -p 3001
   ```

## 📞 Support

If you encounter any issues or need help with customization:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [Tailwind CSS documentation](https://tailwindcss.com/docs)
3. Search for solutions in the project's issues or create a new one

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and Tailwind CSS 