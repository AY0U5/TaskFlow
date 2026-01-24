/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}" // Angular templates and inline templates
  ],
  theme: {
    extend: {
      fontSize : {
        xxs: ['8px', '16px']
      }
    },
    screens: {
      xs: "320px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      xxl: "2560px",
    },
  },
  plugins: [],
}
