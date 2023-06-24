import {ref} from "vue";
import {defineStore} from "pinia";
import {getRandomImage} from "@/services/unsplash";
import {UnsplashImageModel} from "@/models/UnsplashImageModel";
import {decode} from "blurhash";
import UPNG from "@pdf-lib/upng";
import {encode as encode64} from "base64-arraybuffer";

export const useBackgroundImageStore = defineStore('backgroundImage', () => {
  const image = ref({unsplash: new UnsplashImageModel({})})

  async function load() {
    const response = await getRandomImage()
    image.value.unsplash = new UnsplashImageModel(response)
  }

  function getBlurImageUrl() {
    const img = image.value.unsplash
    const pixels = decode(img.blur_hash, 150, 150);
    const png = UPNG.encode([pixels], 150, 150, 256);
    return 'data:image/png;base64,' + encode64(png);
  }

  function realImage() {
    console.log(image.value.unsplash.urls.regular)
    return image.value.unsplash.urls.regular
  }

  function getColorImage() {
      return image.value.unsplash.color
  }

  return {image, load, getBlurImageUrl, realImage, getColorImage}
})