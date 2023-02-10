<template>

  <div class="grid grid-cols-4 gap-5">
    <div v-if="products.length == 0" class="w-full h-96 flex justify-center items-center">
      <fds-circular-progress indeterminate="true"></fds-circular-progress>
    </div>
    <div v-else v-for="p in products">
      <ProductCard :product="p" />
    </div>
  </div>
</template>

<script setup>
import '@finastra/circular-progress';

definePageMeta({
  layout: "products"
})

// fetch the products 
const { data: products } = await useFetch('https://fakestoreapi.com/products');

// implement SEO and title for this page | method 1
useHead({ title: "E-shop | Market", meta: [{ name: "description", content: "Market Nuxt3" }] });
</script>