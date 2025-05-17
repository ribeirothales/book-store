/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F9F5F0',
        'mediumcream': '#EEDCCE',
        'brand': {
          DEFAULT: '#A07C43', // Main accent color from template buttons/links
          light: '#D3BFA0',  // Lighter accent for borders/hovers
        },
        'dark-text': '#374151', // Dark gray for primary text (Tailwind gray-700)
        'light-text': '#6B7280', // Lighter gray for secondary text (Tailwind gray-500)
        'heading-text': '#1F2937', // Slightly darker gray for headings (Tailwind gray-800)
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Clean sans-serif for body text
        serif: ['"Playfair Display"', 'serif'], // Elegant serif for titles and headings
      },
    },
  },
  plugins: [],
}

