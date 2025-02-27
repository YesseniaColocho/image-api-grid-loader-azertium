<template>
  <Transition>
    <div v-if="showImage" class="image" @click="hideImg">
      <Transition>
        <!--img :src="props.imageProp.url"/-->
        <img v-if="tagImage" :src="tagImage" />
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps(["imageProp"]);

const showImage = ref(true);
const tagImage = ref("");

function hideImg() {
  showImage.value = false;
}

function setTagImage(src) {
  tagImage.value = src;
}

//Precarga la imagen en JS y luego la muestra en template una vez cargada
onMounted(() => {
  const imgContainer = new Image();
  imgContainer.src = newURL(props.imageProp.id);
  console.log(imgContainer.src);
  imgContainer.onload = () => {
    setTagImage(imgContainer.src);
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
