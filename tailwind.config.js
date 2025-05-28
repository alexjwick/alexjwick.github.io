module.exports = {
  content: ["./index.html", "./resume.html", "./main.js"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        "alex-green": "#00D67E",
        "alex-green-light-text": "#008B45",
        "dark-bg": "#0F0F0F",
        "dark-surface": "#1A1A1A",
      },
    },
  },
  plugins: [],
};
