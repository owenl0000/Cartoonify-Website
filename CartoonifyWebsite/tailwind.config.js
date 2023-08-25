/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'trend': ['Trend', 'sans-serif'],
        'pop-sbold': ['Poppins-SemiBold','sans-serif'],
        'pop-thin': ['Poppins-Thin', 'sans-serif']
      },
      colors: {
        'blue-900': '#1A237E',
        'turquoise-400': '#40E0D0',
        'backg-white' : 'F5F5F5',
        'bg-turquoise-dark' : '#30C0B0',
        'bg-deep-blue' : '#1A237E'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
