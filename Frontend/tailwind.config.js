/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    animation: {
      'ping-slow': 'ping 1s linear ',
    }},
  },
  plugins: [],
}

