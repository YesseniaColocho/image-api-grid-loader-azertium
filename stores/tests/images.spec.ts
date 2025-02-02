import { vi, describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useImagesStore } from '../images'

describe('Images Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it("test Get Images", async ()=>{
    global.fetch = vi.fn(() =>
		Promise.resolve({
			json: () => Promise.resolve(mockResponse),
		}),
	);
    const imagesStore = useImagesStore()
    await imagesStore.getImages()
    expect(imagesStore.images).toStrictEqual(mockResponse)
  })

  it("test add images", ()=>{
    const imagesStore = useImagesStore()
    imagesStore.images = mockResponse
    expect(imagesStore.page).toBe(0)
    imagesStore.addImages()
    expect(imagesStore.page).toBe(1)
    expect(imagesStore.visibleImages).toStrictEqual(imagesStore.images)
  })
})





const mockResponse = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
        {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
        },
        {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
        },
        {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "https://via.placeholder.com/600/f66b97",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
        }
  ]