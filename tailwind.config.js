/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pokeGrass1: "#7ECD8B",
        pokeGrass2: "#89E2B3",
        pokeWater1: "#4592C3",
        pokeWater2: "#0f89a2",
        pokeGhost1: "#7B62A3",
        pokeGhost2: "#67479a",
        pokeFire1: "#E68061",
        pokeFire2: "#f4a372",
        pokePoison1: "#BA7EC8",
        pokePoison2: "#94699e",
        pokeFlying1: "#2dd4e3",
        pokeFlying2: "#60b3ba",
        pokeGround1: "#d9b77e",
        pokeGround2: "#9e8864",
        pokeRock1: "#80612f",
        pokeRock2: "#906520",
        pokeBug1: "#78a150",
        pokeBug2: "#61863c",
        pokeElectric1: "#e8b725",
        pokeElectric2: "#e69e26",
        pokeFairy1: "#f390f5",
        pokeFairy2: "#cd6ce2",
        pokeFighting1: "#fc3838",
        pokeFighting2: "#b94b4b",
        pokePsychic1: "#d12ca2",
        pokePsychic2: "#d62e7e",
        pokeSteel1: "#636362",
        pokeSteel2: "#7d7d78",
        pokeIce1: "#9fd2e3",
        pokeIce2: "#84bcfe",
        pokeDragon1: "#4818d9",
        pokeDragon2: "#6845d5",
        pokeNormal1: "#A3ACAE",
        pokeNormal2: "#9d9d9d",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
