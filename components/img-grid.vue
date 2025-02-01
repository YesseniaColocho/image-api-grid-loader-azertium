<template>
  <section class="img-grid">
    <template v-for="image of props.images">
      <ImgSquare :imageProp="image"></ImgSquare>
    </template>
  </section>
</template>

<script setup>
const props = defineProps(["images"]);
</script>

<style scoped lang="scss">
.img-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .img-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
