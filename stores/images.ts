import {defineStore} from 'pinia'
import type { Image } from '~/interfaces/images'

export const useImagesStore = defineStore("images", ()=>{

    const images = ref<Image[]> ([])
    const visibleImages = ref<Image[]> ([])
    const page = ref<number> (0)

    function addImages(){
        page.value++
        visibleImages.value=(images.value.slice(0, page.value * 100))
    }

    async function getImages(){
        const results= await fetch("https://jsonplaceholder.typicode.com/photos")
        const json= await results.json()
        images.value = json
        addImages()
    } 

    return{ getImages, images, visibleImages,addImages }
})