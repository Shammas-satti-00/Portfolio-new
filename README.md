# Shammas Portfolio

A modern, responsive portfolio website built with React and Vite.

## Features

- 🌙 **Dark/Light Mode**: Toggle between themes with smooth transitions
- 📱 **Responsive Design**: Works perfectly on all devices
- ⚡ **Fast Performance**: Built with Vite for optimal loading
- 🎨 **Modern UI**: Clean, professional design with animations
- 🔗 **Real Social Icons**: Authentic SVG social media logos

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Profile Image**
   - Save your profile image as `profile-image.jpg` in the `public/` folder
   - The image should be high quality (at least 500x500px)
   - The component will automatically crop it to a circle

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   ├── navbar.jsx      # Navigation with theme toggle
│   ├── hero.jsx        # Hero section with profile image
│   ├── about.jsx       # About section with stats
│   ├── skills.jsx      # Skills with progress bars
│   ├── projects.jsx    # Project showcase with filters
│   ├── contact.jsx     # Contact form and social links
│   └── footer.jsx      # Footer with navigation
├── App.jsx             # Main app with theme context
├── App.css             # Global styles and theme variables
└── index.css           # Base styles
```

## Customization

### Profile Image
- Place your image in `public/profile-image.jpg`
- The image will be automatically cropped to a circle
- Supports hover effects and animations

### Theme Colors
- Edit CSS custom properties in `App.css`
- Both light and dark themes are fully customizable

### Content
- Update text content in each component
- Modify project data in `projects.jsx`
- Adjust skills and stats in respective components

## Technologies Used

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool
- **CSS-in-JS** - Styled components with styled-jsx
- **CSS Custom Properties** - Dynamic theming
- **Intersection Observer** - Scroll animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!
