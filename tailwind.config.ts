import { type Config } from "tailwindcss";
import headlessuiCss from "@headlessui/tailwindcss"

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  
  plugins: [
    headlessuiCss({ prefix: 'ui' })
  ]
} satisfies Config;
