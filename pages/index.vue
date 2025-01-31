<template>
  <TopBar></TopBar>
  <main>
    <ImgGrid :images="imagesStore.visibleImages"></ImgGrid>
    <infinite-loading @infinite="imagesStore.addImages()"/>
  </main>
</template>

<script setup lang="ts">
import { useImagesStore } from '#imports';
const imagesStore = useImagesStore()

onMounted(async()=>{
  await imagesStore.getImages()
})

</script>

<style scoped lang="scss">
main {
  margin: 0 20px;
}
</style>
