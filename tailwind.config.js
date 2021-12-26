module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    animationDelay: {
      100: "100ms",
      200: "200ms",
      300: "300ms",
      400: "400ms",
      500: "500ms",
      600: "600ms",
      700: "700ms",
      800: "800ms",
    },
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-out-down': {
          'from': {
            opacity: '1',
            transform: 'translateY(0px)'
          },
          'to': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-out-up': {
          'from': {
            opacity: '1',
            transform: 'translateY(0px)'
          },
          'to': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out-down': 'fade-out-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 1s cubic-bezier(0.645, 0.045, 0.355, 1)',
        'fade-out-up': 'fade-out-up 0.5s ease-out'
      }
    },
  },
  variants: {
    animationDelay: ["responsive", "hover"],
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}