<template>
  <section class="image">
    <img :src="(props.image.url)"/>
    <!--img :src="newURL(props.image.id)"/-->
  </section>
</template>

<script setup>
import { newURL } from '#imports';
const props = defineProps({
  image: {
    type: Object,
  },
});
</script>

<style scoped lang="scss">
.image {
  display: flex;
  overflow: hidden;
  img {
    width: 100%;
  }
}
</style>
