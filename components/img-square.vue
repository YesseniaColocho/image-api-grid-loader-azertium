<template>
  <Transition>
    <section v-if="showImage" class="image" @click="hideImg">
      <!--img :src="props.imageProp.url"/-->
      <Transition><img v-if="tagImage" :src="tagImage" /></Transition>
    </section>
  </Transition>
</template>

<script setup>
import { newURL } from "#imports";
const props = defineProps(["imageProp"]);

let showImage = ref(true);
const tagImage = ref("");

function hideImg() {
  showImage.value = false;
}

//Precarga la imagen en JS y luego la muestra en template una vez cargada
onMounted(() => {
  const imgContainer = new Image();
  imgContainer.src = newURL(props.imageProp.id);
  imgContainer.onload = () => {
    tagImage.value = imgContainer.src;
  };
});
</script>

<style scoped lang="scss">
.image {
  display: flex;
  overflow: hidden;
  background: rgb(213, 213, 213);
  cursor: pointer;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  img {
    width: 100%;
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
