# 🚀 Rohan Sharma's Dynamic Portfolio

A modern, animated, and responsive portfolio website built with React, Vite, and Framer Motion. This portfolio showcases projects, skills, and provides an easy way to get in touch.

## ✨ Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Built with Framer Motion for engaging transitions
- **Interactive Elements**: Hover effects, smooth scrolling, and form validation
- **Contact Section**: Integrated contact form and direct communication links
- **Project Showcase**: Display of featured projects with technologies and links
- **Social Links**: Easy access to GitHub, LinkedIn, email, and phone

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **CSS3** - Styling with gradient and animations

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager

## 🚀 Quick Start

### 1. Clone or Download the Repository

```bash
git clone https://github.com/rohann1422/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- `framer-motion` - For animations
- `react-icons` - For icons
- All other dependencies

### 3. Start Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173/`

Open your browser and navigate to the local address to see your portfolio in action.

## 📝 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Navigation bar with smooth scrolling
│   │   ├── Navbar.css
│   │   ├── Hero.jsx           # Hero section with animations
│   │   ├── Hero.css
│   │   ├── About.jsx          # About section with skills
│   │   ├── About.css
│   │   ├── Projects.jsx       # Featured projects showcase
│   │   ├── Projects.css
│   │   ├── Contact.jsx        # Contact form and social links
│   │   ├── Contact.css
│   │   ├── Footer.jsx         # Footer with social links
│   │   └── Footer.css
│   ├── App.jsx                # Main app component
│   ├── App.css
│   ├── index.css              # Global styles
│   └── main.jsx               # Entry point
├── public/                    # Static assets
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## 🎨 Customization Guide

### Update Personal Information

Edit `src/components/Contact.jsx` to update:
- **Email**: Change `rohansidd9@gmail.com` to your email
- **Phone**: Update `8447911899` to your phone number
- **GitHub**: Update the GitHub profile link
- **LinkedIn**: Update the LinkedIn profile URL

### Customize Projects

Edit the `projects` array in `src/components/Projects.jsx`:

```javascript
const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: 'https://project-link.com',
    github: 'https://github.com/yourprofile/project',
    image: '📱', // Use emoji or update for real images
  },
  // Add more projects...
]
```

### Update Skills

Edit the `skills` array in `src/components/About.jsx`:

```javascript
const skills = [
  'React.js',
  'JavaScript',
  'Node.js',
  'HTML & CSS',
  // Add your skills...
]
```

### Change Colors

Update the gradient colors in CSS files. Current primary colors:
- Main gradient: `#667eea` to `#764ba2`
- Accent: `#ffeb3b` to `#ff9800`

Search for these hex codes in the CSS files to customize.

## 🏗️ Build for Production

To create an optimized production build:

```bash
npm run build
```

This generates a `dist` folder with optimized files ready for deployment.

### Preview Production Build Locally

```bash
npm run preview
```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and select your repository
4. Click Deploy

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository and configure
5. Click "Deploy"

### Option 3: GitHub Pages

1. Update `vite.config.js`:
```javascript
export default {
  base: '/portfolio/',
  // ... other config
}
```

2. Run build and deploy:
```bash
npm run build
npm run deploy
```

## 📱 Responsive Breakpoints

The portfolio is optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

All components adapt seamlessly to different screen sizes.

## 🎯 Features Breakdown

### Navbar
- Fixed positioning with scroll detection
- Smooth scrolling to sections
- Mobile-responsive hamburger menu
- Gradient logo

### Hero Section
- Eye-catching gradient background
- Animated greeting and title
- Call-to-action buttons
- Floating animated shapes

### About Section
- Personal description
- Skill badges with hover effects
- Clean grid layout
- Section animations

### Projects Section
- Project cards with descriptions
- Technology tags
- Direct links to projects and GitHub repos
- Hover animations and effects

### Contact Section
- Contact form with validation
- Social media and contact links
- Email, phone, GitHub, LinkedIn integration
- Success message feedback

### Footer
- Social media links
- Quick navigation
- Scroll-to-top button
- Copyright information

## 🎨 Animation Libraries

### Framer Motion Features Used

- **containerVariants**: Staggered animations for groups
- **itemVariants**: Individual element animations
- **whileHover**: Hover state animations
- **whileTap**: Click feedback animations
- **whileInView**: Scroll-triggered animations

## 📞 Contact Information

- **Email**: rohansidd9@gmail.com
- **Phone**: 8447911899
- **GitHub**: [github.com/rohann1422](https://github.com/rohann1422)
- **LinkedIn**: [linkedin.com/in/rohan-sharma-384522202](https://www.linkedin.com/in/rohan-sharma-384522202/)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and use it as a template for your own portfolio!

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Framer Motion Docs](https://www.framer.com/motion)
- [React Icons](https://react-icons.github.io/react-icons)

---

**Created with ❤️ by Rohan Sharma**

Happy coding! 🚀
