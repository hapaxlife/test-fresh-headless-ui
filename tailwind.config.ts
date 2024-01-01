import { type Config } from "tailwindcss";
// import * as headlessuiCss from "@headlessui/tailwindcss"

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  /*
  plugins: [
    headlessuiCss
  ]*/
} satisfies Config;
