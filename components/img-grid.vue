<template>
  <section class="img-grid">
    <div><ImgSquare></ImgSquare></div>
    <div><ImgSquare></ImgSquare></div>
    <div><ImgSquare></ImgSquare></div>
    <div><ImgSquare></ImgSquare></div>
    <div>Salto</div>
  </section>
</template>

<script></script>

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
