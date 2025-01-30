<template>
  <section class="img-grid">
    <div v-for="image in props.images"><ImgSquare :image="image" ></ImgSquare></div>
  </section>
</template>

<script setup>
const props = defineProps({
    images: {
        type: Array
    }
})
</script>

<style scoped lang="scss">
.img-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  width: 100%;
  div {
    background-color: lightpink;
  }
}
</style>
