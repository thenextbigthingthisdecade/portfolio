const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        serif: ["var(--font-fraunces)", ...fontFamily.serif],
        mono: ["Jetbrains Mono", ...fontFamily.mono],
        display: ["Oritica", ...fontFamily.serif],
      },
      boxShadow: {
        skeuo: "0 0 0 1px rgb(0, 0, 0, .05), 0 1px 0 0 rgb(0, 0, 0, .1)",
        "inset-skeuo":
          "inset 0 0 0 1px rgb(0, 0, 0, .1), inset 0 -2px 0 1px rgb(0, 0, 0, .1)",
      },
      textUnderlineOffset: {
        6: "6px",
      },
      fontSize: {
        '4.5xl': '2.5rem'
      },
      keyframes: {
        enter: {
          from: {
            opacity: "var(--tw-enter-opacity, 1)",
            transform:
              "translate(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0))",
          },
        },
        exit: {
          to: {
            opacity: "var(--tw-exit-opacity, 1)",
            transform:
              "translate(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0))",
          },
        },
      },
      animation: {
        in: "enter 150ms ease-in-out",
        out: "exit 150ms ease-in-out",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("data-delayed-open", '&[data-state="delayed-open"]');
      addVariant("data-closed", '&[data-state="closed"]');
    }),
  ],
};
