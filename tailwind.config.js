/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'zoom-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.8)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'bounce-custom': {
          // For a subtle bounce on the CTA
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-5px)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'zoom-in': 'zoom-in 0.3s ease-out forwards',
        'bounce-custom': 'bounce-custom 1s ease-in-out infinite', // Adjust duration as needed
      },
    },
  },
  plugins: [],
};
