# Birthday Celebration Website 🎉

A fun, animated, and meriah birthday celebration website built with Next.js featuring:

- ✨ **Full Animations** - Floating effects, bouncing cakes, and smooth transitions
- 🎂 **Animated Birthday Cake** - Interactive cake with candles and decorations
- 🎊 **Confetti Effects** - Continuous falling confetti animation
- 🦄 **Cute Characters** - Adorable emojis floating around the page (unicorns, balloons, gifts, stars)
- 💕 **Pink Theme** - Beautiful gradient backgrounds with pink color scheme
- 📱 **Responsive Design** - Looks great on mobile, tablet, and desktop
- 🚀 **Vercel Ready** - Optimized for deployment on Vercel

## Features

### Animations
- Floating birthday cake with candles
- Animated confetti bursts
- Rainbow text effects for "Happy Birthday"
- Pulsing glow effect around messages
- Floating cute characters (balloons, gifts, stars, unicorns)
- Smooth scroll behavior
- Scale and bounce animations

### Design
- **Color Scheme**: Pink (#ec4899) as the main color with gradients
- **Typography**: Modern fonts (Fredoka, Poppins)
- **Effects**: Glassmorphism cards, blur effects, shadows
- **Responsive**: Mobile-first design approach

### Smart Features
- Automatic countdown to May 22 birthday
- Celebration message
- Interactive buttons (Music, Open Gifts)
- Continuous confetti animation
- Beautiful gradient background with blob animations

## Installation

### Prerequisites
- Node.js 18+ and npm

### Setup

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd project22
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building & Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel

The project is already optimized for Vercel deployment:

1. **Option 1: Using Vercel CLI**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Option 2: Using Git**
   - Push your code to GitHub, GitLab, or Bitbucket
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your repository
   - Click "Deploy"

## Project Structure

```
project22/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main birthday page
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Confetti.tsx        # Confetti animation component
│   ├── BirthdayCake.tsx    # Animated birthday cake
│   └── CuteCharacters.tsx  # Floating cute character emojis
├── public/                 # Static assets
├── package.json            # Dependencies
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── postcss.config.js       # PostCSS configuration
```

## Customization

### Change the Birthday Date
Edit [app/page.tsx](app/page.tsx) and modify this line:
```typescript
const birthdayDate = new Date(currentYear, 4, 22) // Change 22 to your date
```

### Change Colors
Edit [tailwind.config.ts](tailwind.config.ts) to modify the color scheme

### Add More Animations
Add new keyframes in [app/globals.css](app/globals.css)

### Modify Message
Change the text content in [app/page.tsx](app/page.tsx)

## Technologies Used

- **Next.js 14** - React framework for production
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- ✅ Optimized for Core Web Vitals
- ✅ Fast page loads with Next.js
- ✅ Efficient animations with CSS
- ✅ Mobile-friendly responsive design

## License

This project is open source and available for personal and commercial use.

## Credits

Created with ❤️ for celebrating special moments!

---

**Happy Birthday! 🎉🎂🎊**
