module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '4xl': '1750px',
      '2xl': '1600px',
      xxl: '1400px',
      xl: '1200px',
      lg: '1150px',
      lmd: '991px',
      md: '768px',
      sm: '600px'
    },
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/path-to-your-image.jpg')",
      }),
    },
  },
  plugins: [],
}