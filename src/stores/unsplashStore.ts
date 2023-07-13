import {computed, ref} from 'vue'
import {defineStore} from 'pinia'
import {getRandomImage} from '@/services/unsplash'
import {UnsplashImageModel} from '@/models/UnsplashImageModel'
import {decode} from 'blurhash'
import UPNG from '@pdf-lib/upng'
import {encode as encode64} from 'base64-arraybuffer'

export const useUnsplashStore = defineStore('unsplash', () => {
  const unsplash = ref({
    image: new UnsplashImageModel({})
  })

  const realImageUnsplash = computed(() => {
    return unsplash.value.image.urls?.regular
  })

  const blurImageUnsplash = computed(() => {
    if (unsplash.value.image.blur_hash) {
      const pixels = decode(unsplash.value.image.blur_hash, 150, 150)
      const png = UPNG.encode([pixels], 150, 150, 256)

      return 'data:image/png;base64,' + encode64(png)
    }

    return ''
  })

  const backgroundImageUnsplash = computed(() => {
    const imgData = realImageUnsplash.value ? realImageUnsplash.value : blurImageUnsplash.value
    return `--background-image: url('${imgData}');--background-color:${unsplash.value.image.color}`
  })

  async function load(search: string = '') {
    let loadImage = true

    if (sessionStorage && sessionStorage.getItem('unsplash')) {
      const storage = JSON.parse(sessionStorage.getItem('unsplash') as string)

      if (storage.search === search) {
        unsplash.value.image = new UnsplashImageModel(storage)
        loadImage = false
      }
    }

    if (loadImage) {
      const response: UnsplashImageModel = await getRandomImage(search)
      const image = new UnsplashImageModel({...response, search})
      unsplash.value.image = image
      sessionStorage.setItem('unsplash', JSON.stringify(image))
    }
  }

  return { unsplash, realImageUnsplash, blurImageUnsplash, backgroundImageUnsplash, load}
})
