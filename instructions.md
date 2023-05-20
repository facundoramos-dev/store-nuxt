
## Pasos para crear un nuevo proyecto en Nuxt.js
[Steps to create a new project in Nuxt.js]

```bash
npx nuxi init <project>

cd <project>

npm i
```


## server corriendo con npm run dev
[server running with npm run dev]

## agregar tailwindcss
[add tailwindcss]

```bash
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init
```

## en el archivo nuxt.config.ts
[in the nuxt.config.ts file]:

```bash
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
```

## en el archivo tailwind.config.js
[in the tailwind.config.js file]

```bash
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## crear el archivo tailwindcss
[create the tailwindcss file]

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## agregar la ubicacion del archivo creado en nuxt.config.ts
[add the location of the file created in nuxt.config.ts]

```bash
export default defineNuxtConfig({
  css: ['~/tailwind/main.css'], //ruta del archivo '~/<ruta>'
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
```

Instructivo https://tailwindcss.com/docs/guides/nuxtjs#3

## Tambien se puede agregar simplemente el modulo desde la web de Nuxt.js

```bash
npm install --save-dev @nuxtjs/tailwindcss
```

## Agregar al Archivo nuxt.config.ts:
[Add to File nuxt.config.ts]

```bash
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
```
## Agregar el archivo de Estilos
[Add the Styles file]

```bash
<you project>
+---<you project>
    |
    \---assets
      |
      \---css
        |
        \---tailwind.css
```

## Good Luck ;)
