<script setup>
const {$sayHello} = useNuxtApp()
//  $sayHello("Gerald")
definePageMeta({
layout: "custom",
});
</script>
<template>
  <div>
    <Profile />
  </div>
</template>

