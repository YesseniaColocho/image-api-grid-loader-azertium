<template>
  <Transition>
    <section v-if="showImage" class="image" @click="hideImg">
      <!--img :src="props.imageProp.url"/-->
      <img :src="newURL(props.imageProp.id)" />
    </section>
  </Transition>
</template>

<script setup>
import { newURL } from "#imports";
const props = defineProps(["imageProp"]);

let showImage = ref(true);

function hideImg() {
  showImage.value = false;
}
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
