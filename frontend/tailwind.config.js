/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      primary: '#F4F5F7',
      secondary: '#2C3B54',
      tertiary: '#0F5EFD',
      white: '#ffff',
      dark: '#081023d1',
      medium: '#6e808d',
      light: '#A5B1C6',
      danger: '#9f1239'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
