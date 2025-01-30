import {defineStore} from 'pinia'
import type { Image } from '~/interfaces/images'

export const useImagesStore = defineStore("images", ()=>{

    const images = ref<[] | Image[]> ([])

    async function getImages(){
        const results= await fetch("https://jsonplaceholder.typicode.com/photos")
        const json= await results.json()
        images.value = json
    } 

    return{ getImages, images }
})