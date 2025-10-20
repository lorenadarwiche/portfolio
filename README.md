# 🌐 Lorena Darwiche – Portfolio Website

Welcome to my personal portfolio website! This project showcases my work, technical skills, and background as a software developer. It is built using modern web technologies and is designed to be fully responsive and accessible across devices.

## ✨ Features

- 🔒 **Password Protection** – Secure access with customizable password gate
- Hero section with name, photo, and interactive contact icons  
- About section with a brief introduction  
- Skills section showcasing technologies I work with  
- Projects section with live previews and source code links  
- Contact section with clickable email and social media buttons  
- Responsive layout using Tailwind CSS  
- Deployed with Vercel

## 🛠 Tech Stack

- **Frontend**: React.js, Tailwind CSS  
- **Hosting**: Vercel  
- **Assets**: Custom icons, SVGs, and personal imagery

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/lorenadarwiche/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up password protection**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` and set your desired password:
   ```
   REACT_APP_PORTFOLIO_PASSWORD=your_password_here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```
   The site will open at [http://localhost:3000](http://localhost:3000)

### Building for Production
```bash
npm run build
```

## 🌍 Live Site

Check out the deployed version here: [portfolio-lorenadarwiches-projects.vercel.app](portfolio-lorenadarwiches-projects.vercel.app)

## 🔐 Password Configuration

The portfolio is protected with a password gate. To configure:

**For Local Development:**
- Edit the `.env` file and set `REACT_APP_PORTFOLIO_PASSWORD`

**For Vercel Deployment:**
1. Go to your project on Vercel Dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add `REACT_APP_PORTFOLIO_PASSWORD` with your desired password
4. Select all environments (Production, Preview, Development)
5. Redeploy the site for changes to take effect

## 📬 Contact

Feel free to reach out via  
📧 Email: darwichelorena2@gmail.com  
🔗 [LinkedIn](https://linkedin.com/in/lorenadarwiche)  
🐙 [GitHub](https://github.com/lorenadarwiche)

---
