/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        'word-tight': '-0.2em',
        'word-loose': '0.1em',
        // Add other custom values here
      },
    },
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.word-tight': {
        'word-spacing': '-0.05em',
      },
      '.word-loose': {
        'word-spacing': '0.1em',
      },
      // Add other custom utilities here
    }, )}]
};
