/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        "slide-in-fwd-center": "slide-in-fwd-center 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both"
      },
      keyframes: {
        "slide-in-fwd-center": {
          "0%": { transform: "translateZ(-1400px)", opacity: "0" },
          to: { transform: "translateZ(0)", opacity: "1" }
        }
      }
    }
  },
  plugins: [],
};
