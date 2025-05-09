# BridgingTalent Website

A professional website for BridgingTalent, connecting US companies with Indian engineering talent. Built with React, React Router, and Tailwind CSS.

![BridgingTalent Screenshot](public/images/customers-success.jpg)

## Features

- Modern, responsive design that works on mobile, tablet, and desktop
- Single-page application with smooth navigation
- Comprehensive sections: Services, Pricing, About Us, Blog, and more
- Contact form for lead generation
- Built with React and styled with Tailwind CSS

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.x or later)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)
- Git (optional, for version control)

## Getting Started

Follow these steps to get the website running on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/bridging-talent-website.git
cd bridging-talent-website
```

If you received the project as a ZIP file, extract it and navigate to the folder in your terminal.

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using Yarn:
```bash
yarn install
```

### 3. Start the Development Server

Using npm:
```bash
npm run dev
```

Or using Yarn:
```bash
yarn dev
```

This will start the development server, typically at http://localhost:5173/ (Vite's default port). Open this URL in your browser to see the website.

### 4. Build for Production

When you're ready to deploy the website, create an optimized production build:

Using npm:
```bash
npm run build
```

Or using Yarn:
```bash
yarn build
```

This will generate a `dist` folder with all the production-ready files.

## Project Structure

```
bridging-talent/
│
├── public/
│   └── images/           # Website images
│
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.jsx    # Site navigation
│   │   ├── Footer.jsx    # Site footer
│   │   ├── Hero.jsx      # Hero section
│   │   ├── About.jsx     # About section
│   │   ├── Services.jsx  # Services section
│   │   ├── Contact.jsx   # Contact form
│   │   ├── Pricing.jsx   # Pricing section
│   │   ├── Testimonials.jsx # Testimonials section
│   │   └── Blog.jsx      # Blog section
│   │
│   ├── pages/            # Page components
│   │   ├── HomePage.jsx  # Main landing page
│   │   ├── AboutPage.jsx # About page
│   │   ├── ServicesPage.jsx # Services page
│   │   └── ...           # Other pages
│   │
│   ├── App.jsx           # Main app component with routing
│   ├── index.css         # Global styles
│   └── main.jsx          # Entry point
│
├── index.html            # HTML template
├── package.json          # Project dependencies and scripts
├── postcss.config.js     # PostCSS configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## Customizing the Website

### Images

Replace the placeholder images in the `public/images/` directory with your own images. Make sure to maintain the same filenames or update the references in the code.

### Content

Most of the website content is defined within the component files. Look for text within JSX elements to update content.

### Colors and Styling

The website uses Tailwind CSS for styling. You can customize the colors and other design elements in the `tailwind.config.js` file.

### Contact Form

The contact form in `Contact.jsx` is set up for demonstration. To make it functional, you'll need to implement form submission logic.

Most of these services offer straightforward deployment from a GitHub repository or by uploading the `dist` directory.

## Technologies Used

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Vite](https://vitejs.dev/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For any questions or issues, please contact support@bridgingtalent.com or open an issue in the GitHub repository.
