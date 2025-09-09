
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: 'Libertinus Sans',
    },
    extend: {
      colors: {
        sidebar: 'AliceBlue',
        active: '#AFEEEE',
        activeBorder: '#4169E1',
        main: 'MintCream',
        table: 'White',
        focus: '#0000CD',
        statsbg: "#F8F8FF",
      },
    },
  },
  plugins: [],
}

