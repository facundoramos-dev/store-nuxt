export default defineEventHandler(async (event) => {
	const { code } = event.context.params;

	const { apiKey } = useRuntimeConfig();

	const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${apiKey}`;

	const { data } = await $fetch(uri);
	return {
		data
    // data: { "GBP": { "code": "GBP", "value": 0.825351 }},
	};
  
});
