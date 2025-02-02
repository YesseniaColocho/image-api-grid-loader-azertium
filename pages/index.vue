<template>
  <TopBar></TopBar>
  <main>
    <ImgGrid :images="imagesStore.visibleImages"></ImgGrid>
    <infinite-loading @infinite="imagesStore.addImages()" />
  </main>
</template>

<script setup lang="ts">
import { useImagesStore } from "#imports";
const imagesStore = useImagesStore();

onMounted(async () => {
  await imagesStore.getImages();
});

useHead({
  title: "Prueba Técnica Azertium",
  meta: [{ name: "description", content: "Por Yessenia Colocho" }],
});
</script>

<style scoped lang="scss">
main {
  margin: 0 20px;
}
:deep(.v3-infinite-loading > div) {
  display: flex;
  justify-content: center;
  padding-top: 10px;
}
</style>
