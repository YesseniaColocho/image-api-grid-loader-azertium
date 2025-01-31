import {defineStore} from 'pinia'
import type { Image } from '~/interfaces/images'

export const useImagesStore = defineStore("images", ()=>{

    const images = ref<Image[]>([])
    const visibleImages = ref<Image[]> ([])
    const page = ref<number> (0)

    async function getImages(){
        const results= await fetch("https://jsonplaceholder.typicode.com/photos")
        const json= await results.json()
        images.value = json
        addImages()
    } 

    function addImages(){
        page.value++
        const limit = page.value * 100
        visibleImages.value = images.value.slice(0, limit)
    }

    return{ getImages, images, visibleImages,addImages }
})