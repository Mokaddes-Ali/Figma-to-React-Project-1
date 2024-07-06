/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'light-mode': "url('https://bostami-bootstrap-nextjs.vercel.app/assets/img/bg/page-bg-1.jpg')",
        'dark-mode': "url('https://bostami-bootstrap-nextjs.vercel.app/assets/img/bg/page-bg-dark-1.jpg')",
    },
  },
},
  plugins: [],
  darkMode: "class"
}

