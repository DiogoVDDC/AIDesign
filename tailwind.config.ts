import { type Config } from "tailwindcss";


export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontSize: {
      'sm': ['14px', {
        lineHeight: '19.6px',
        letterSpacing: '0',
        fontWeight: '500',
      }],
      'base': ['16px', {
        lineHeight: '22.4px',
        letterSpacing: '-0.02em',
        fontWeight: '500',
      }],
      'lg': ['20px', {
        lineHeight: '28px',
        letterSpacing: '-0.02em',
        fontWeight: '500',
      }],
      'xl': ['24px', {
        lineHeight: '28.8px',
        letterSpacing: '-0.03em',
        fontWeight: '500',
      }],
      '2xl': ['36px', {
        lineHeight: '43.2px',
        letterSpacing: '-0.03em',
        fontWeight: '500',
      }],
      '3xl': ['46px', {
        lineHeight: '55.2px', //*1.2
        letterSpacing: '-0.04em',
        fontWeight: '500',
      }],
      '4xl': ['66px', {
        lineHeight: '79.2px',
        letterSpacing: '-0.04em',
        fontWeight: '500',
      }],
      '5xl': ['76px', {
        lineHeight: '91.2px',
        letterSpacing: '-0.04em',
        fontWeight: '500',
      }],
    },
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'display-serif': ['Playfair Display']
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#3490dc',                // defining the primary color as blue
          // 'primary-focus': '#1e60bb',          // a darker shade when focused
          // 'primary-content': '#ffffff',        // content color for primary (like text or icons)
          'secondary': '#ffed4a',
          // 'secondary-focus': '#fcd34d',
          // 'secondary-content': '#ffffff',
          'accent': '#37cdbe',
          // 'accent-focus': '#2aa79b',
          // 'accent-content': '#ffffff',
          "neutral": "#1a1a1a",
          // 'neutral-focus': '#2a2e37',
          // 'neutral-content': '#ffffff',
          "base-100": "#ffffff",

        },
      }
    ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]

    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
} satisfies Config;