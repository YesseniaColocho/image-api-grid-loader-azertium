<template>
  <TopBar></TopBar>
  <main>
    <ImgGrid></ImgGrid>
    <div>
      {{ imagesStore.images[0] }}
    </div>
  </main>
</template>

<script setup lang="ts">
import { useImagesStore } from "@/stores/images";
const imagesStore = useImagesStore();

onMounted( async () => {
  await imagesStore.getImages();
  console.log(imagesStore.images)
});
</script>

<style scoped lang="scss">
main {
  margin: 0 20px;
}
</style>
