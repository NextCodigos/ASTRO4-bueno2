import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output:'hybrid',
  // output:'server', //no es tan rapido pero siempre tenemos el ultimo contenido disponible
  // output:'static', //el mas rapido pero no renderiza informacion base de datos
  integrations: [tailwind()]
});