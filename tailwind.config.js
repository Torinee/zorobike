const screens = {
  phone: "600px",
  laptop: "1024px",
  desktop: "1270px",
};

const colors = {
  primary: { DEFAULT: "#4EBE99", light: "#4BBD99" },
  secondary: "#97B5BF",
  background: "#F9FDFE",
  black: "#3A3C3D",
  white: {
    DEFAULT: "#FFFFFF",
    dark: "#F4FBFC",
  },
  transparent: "rgba(0,0,0,0)",
  orange: "#FBAD18",
  danger: "#E40F0A",
  "dark-blue": { 500: "#212526" }
};

const fontSize = {
  12: "12px",
  13: "13px",
  14: "14px",
  16: "16px",
  18: "18px",
  20: "20px",
  22: "22px",
  24: "24px",
  26: "26px",
  30: "30px",
  33: "33px",
  36: "36px",
  44: "44px",
  48: "48px",
  58: "58px",
  70: "70px",
  md: "14px",
  // lg: "16px",
};

const fontFamily = {
  // "overpass": ["Overpass", "sans-serif"]
  "overpass": ['bambino']
}

const renderSpacings = () => {
  const spacing = {
    full: "100%",
    fit: "fit-content",
    min: "min-content",
    max: "max-content",
    container: 1100
  };
  // 0px --> 100px | 0px 5px 10px 15px,...
  for (let i = 0; i < 10; i += 0.5) {
    spacing[i] = `${i * 10}px`;
  }
  // 100px --> 1000px | 100px 110px 120px,...
  for (let i = 10; i < 100; i++) {
    spacing[i] = `${i * 10}px`;
  }
  return spacing;
};

const spacing = { ...renderSpacings() };

const fontWeight = {
  "DEFAULT": 400,
  "extra-light": 100,
  "thin": 200,
  "light": 300,
  "normal": 400,
  "medium": 500,
  "semibold": 600,
  "bold": 700,
  "extra-bold": 800,
  "black": 900,
};

const borderRadius = {
  "tn": "2px", // tiny
  "sm": "4px", // small
  "md": "5px", // medium
  "lg": "7px",
  "xl": "10px",
  "xxl": "15px",
  "3xl": "28px",
  "inherit": "inherit",
};

const zIndex = {
  "-1": "-1",
  "0": "0",
  "10": "10",
  "20": "20",
  "30": "30",
  "40": "40", // for drawer
  "50": "50", // for Tooltip
  "100": "100", // for Dialog, FullScreenDialog...
};

const boxShadow = {
  md: "0px 4px 4px rgba(0, 0, 0, 0.15)",
  inset: "inset 0px 4px 4px rgba(0, 0, 0, 0.05)",
};

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    // screens,
    // fontSize,
    // spacing,
    fontWeight,
    zIndex,
    // maxWidth: {
    //   ...screens,
    //   ...spacing,
    // },
    // minWidth: {
    //   ...screens,
    //   ...spacing,
    // },
    extend: {
      fontSize,
      colors,
      borderRadius,
      boxShadow,
      fontFamily
    },
  },
  plugins: [],
}