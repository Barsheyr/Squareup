/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Barlow", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../../src/assets/images/HeroBanner.svg')",
        "services-pattern":
          "url('../../src/assets/images/ServiceContainer.png')",
        "whychoose-pattern": "url('../../src/assets/images/whychoosebg.png')",
        "whatclientsay-pattern":
          "url('../../src/assets/images/whatclientsay.png')",
      },
      colors: {
        green50: "#9EFF00",
        green60: "#B1FF33",
        green70: "#C5FF66",
        green80: "#D8FF99",
        green90: "#ECFFCC",
        green95: "#F5FFE5",
        green97: "F9FFF0",
        green99: "#FDFFFA",
        grey10: "#191919",
        grey15: "#262626",
        grey20: "#333333",
        grey30: "#4C4C4D",
        grey35: "#59595A",
        grey40: "#656567",
        grey60: "#98989A",
        grey90: "#E6E6E6",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#000000",
        },
      },
    ],
  },
};
