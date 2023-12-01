/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  mode: 'jit',
  theme: {
    extend: {
    }
  },
  // screens: {
  //   xs: "450px",
  //   // => @media (min-width: 450px) { ... }

  //   sm: "575px",
  //   // => @media (min-width: 576px) { ... }

  //   md: "768px",
  //   // => @media (min-width: 768px) { ... }

  //   lg: "992px",
  //   // => @media (min-width: 992px) { ... }

  //   xl: "1200px",
  //   // => @media (min-width: 1200px) { ... }

  //   "2xl": "1400px",
  //   // => @media (min-width: 1400px) { ... }
  // },
  plugins: [],
}
