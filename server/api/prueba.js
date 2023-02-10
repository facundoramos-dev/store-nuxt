export default defineEventHandler(async (event) => {
	// //handle query params | "/api/prueba?name=facu"
	// const { name } = useQuery(event) ?? "visitor";

	// //handle post data | "/api/prueba",{method:"post",body:{age:23}}
	// const { age } = await useBody(event);

	const { apiKey } = useRuntimeConfig();

	const { data } = await $fetch(
		`https://api.currencyapi.com/v3/latest?apikey=${apiKey}`,
	);

	return {
		data: data,
		// message: `Hola ${name} | your age is: ${age}`,
		// event: event,
		// name: name,
	};
});
