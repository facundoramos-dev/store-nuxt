<template>
  <div>
    <h2 class="text-3xl mb-5">About</h2>
    <p class="my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus id vitae expedita harum ipsum ab
      molestias
      accusantium sint nemo qui!</p>
    <p class="my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus id vitae expedita harum ipsum ab
      molestias
      accusantium sint nemo qui!</p>
    <!-- <p>{{ data }}</p> -->
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/GBP");

</script>