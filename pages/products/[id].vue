<template>
  <!-- implement SEO and title for this page | method 1 -->
  <Head>
    <Title>E-shop | {{ product.title }}</Title>
    <Meta name="description" :content="product.description" />
  </Head>
  <ProductDetails :product="product" />
</template>

<script setup>
const { id } = useRoute().params;

definePageMeta({
  layout: "products"
})

//fecth the single product
const { data: product } = await useFetch(`https://fakestoreapi.com/products/${id}`);

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: "Product not found", fatal: true });
}
</script>