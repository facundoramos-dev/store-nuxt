// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// css: ['~/tailwind/main.css'], //ruta del archivo '~/<ruta>'
	modules: ["@nuxtjs/tailwindcss"],
	app: {
		head: {
			title: "E-shop",
			meta: [{ name: "description", content: "everything about Nuxt 3" }],
			link: [
				{
					rel: "stylesheet",
					href: "https://fonts.google.com/icon?family=Material+Icons",
				},
			],
		},
	},
	runtimeConfig:{
		apiKey: process.env.API_KEY,
		// para declarar variables de entorno publicas
		// public:{}
	}
	// postcss: {
	//   plugins: {
	//     tailwindcss: {},
	//     autoprefixer: {},
	//   },
	// },
});
