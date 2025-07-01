import plugin from 'tailwindcss/plugin'


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
      lg: { max: "1024px" },
      md: { max: "970px" },
      esm: {max: "760px"},
      sm: { max: "480px" },
    },
    extend: {
      fontFamily: {
        primary: ["Arimo", "serif"],
        frank: ["Frankfurter Highlight", "sans-serif"],
        notosan: ["Noto Sans", "serif"],
        dejavu: ["DejaVu Serif", "sans-serif"],
        second: ["Noto Serif Display", "serif"],
        service: ["Bungee", "sans-serif"],
        league: ["League Spartan", "sans-serif"],
        sanchez: ["Sanchez", "serif"],
        libre: ["Libre Franklin", "sans-serif"],
        paytone: ["Paytone One", "sans-serif"],
        baloo: ["Baloo", "sans-serif"],
        sriracha: ["Sriracha", "cursive"]
      },

      colors: {
        primary: "#00552c",
        second: "#937632"
      }
    },
    textShadow: {
      line: "-2px -2px 0 #645533, 2px -2px 0 #645533, -2px 2px 0 #645533, 2px 2px 0 #645533",
      pool: "-6px -6px 0 #C8B997, 6px -6px 0 #C8B997, -6px 6px 0 #C8B997, 6px 6px 0 #C8B997",
      service: "rgb(200, 185, 151) 4.03157px 0.638538px 0px",
      header: "2px 2px 10px rgba(0, 0, 0, 0.5)",
      none: "0px 0px 0px rgba(0, 0, 0, 0)",
    },
  },

  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          })
        },
        { values: theme('textShadow') }
      )
    }),
    plugin(function({ matchUtilities }) {
      matchUtilities(
        {
          'text-line': (value) => ({
            '-webkit-text-stroke': value,
          })
        }
      )
    }),
    plugin(function({ matchUtilities }) {
      matchUtilities(
        {
          'b': (value) => ({
            '--b': value,
          })
        }
      )
    })
  ],
}

