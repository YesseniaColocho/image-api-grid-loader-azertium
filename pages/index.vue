<template>
  <TopBar></TopBar>
  <main>
    <ImgGrid :images="imagesStore.visibleImages"></ImgGrid>
  </main>
</template>

<script setup lang="ts">
import { useImagesStore } from "@/stores/images";
const imagesStore = useImagesStore();

onMounted(async () => {
  await imagesStore.getImages();
});
</script>

<style scoped lang="scss">
main {
  margin: 0 20px;
}
</style>
