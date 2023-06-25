import { createApi } from 'unsplash-js'

const unsplash = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_KEY
})

export async function getRandomImage(description: string = '') {
  const response = JSON.parse(
    '[{"id":"G86MS2ZsiJA","slug":"G86MS2ZsiJA","created_at":"2015-11-04T01:50:42Z","updated_at":"2023-06-24T07:00:24Z","promoted_at":"2015-11-04T01:50:42Z","width":4608,"height":3456,"color":"#264026","blur_hash":"L17nzL~oDmIVa1W+-rMy02XM--IU","description":"Dew on a dark green leaf","alt_description":"droplets on green leaf","urls":{"raw":"https://images.unsplash.com/photo-1446608943998-cbd52b140335?ixid=M3w0NDQ5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc2NDA5Mjl8&ixlib=rb-4.0.3","full":"https://images.unsplash.com/photo-1446608943998-cbd52b140335?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NDQ5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc2NDA5Mjl8&ixlib=rb-4.0.3&q=85","regular":"https://images.unsplash.com/photo-1446608943998-cbd52b140335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDQ5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc2NDA5Mjl8&ixlib=rb-4.0.3&q=80&w=1080","small":"https://images.unsplash.com/photo-1446608943998-cbd52b140335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDQ5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc2NDA5Mjl8&ixlib=rb-4.0.3&q=80&w=400","thumb":"https://images.unsplash.com/photo-1446608943998-cbd52b140335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDQ5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc2NDA5Mjl8&ixlib=rb-4.0.3&q=80&w=200","small_s3":"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1446608943998-cbd52b140335"},"links":{"self":"https://api.unsplash.com/photos/G86MS2ZsiJA","html":"https://unsplash.com/photos/G86MS2ZsiJA","download":"https://unsplash.com/photos/G86MS2ZsiJA/download?ixid=M3w0NDQ5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc2NDA5Mjl8","download_location":"https://api.unsplash.com/photos/G86MS2ZsiJA/download?ixid=M3w0NDQ5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc2NDA5Mjl8"},"likes":1317,"liked_by_user":false,"current_user_collections":[],"sponsorship":null,"topic_submissions":{},"user":{"id":"gKI1wL-7KkE","updated_at":"2023-06-13T02:35:11Z","username":"dan_carl5on","name":"dan carlson","first_name":"dan","last_name":"carlson","twitter_username":"dcMN918","portfolio_url":null,"bio":null,"location":"Lincoln, Nebraska","links":{"self":"https://api.unsplash.com/users/dan_carl5on","html":"https://unsplash.com/@dan_carl5on","photos":"https://api.unsplash.com/users/dan_carl5on/photos","likes":"https://api.unsplash.com/users/dan_carl5on/likes","portfolio":"https://api.unsplash.com/users/dan_carl5on/portfolio","following":"https://api.unsplash.com/users/dan_carl5on/following","followers":"https://api.unsplash.com/users/dan_carl5on/followers"},"profile_image":{"small":"https://images.unsplash.com/profile-1445571144389-c57510c7248c?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32","medium":"https://images.unsplash.com/profile-1445571144389-c57510c7248c?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64","large":"https://images.unsplash.com/profile-1445571144389-c57510c7248c?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"},"instagram_username":"dan_carl5on","total_collections":0,"total_likes":19,"total_photos":32,"accepted_tos":false,"for_hire":false,"social":{"instagram_username":"dan_carl5on","portfolio_url":null,"twitter_username":"dcMN918","paypal_email":null}},"exif":{"make":"Panasonic","model":"DMC-GH4","name":"Panasonic, DMC-GH4","exposure_time":"1/200","aperture":"4.5","focal_length":"60.0","iso":200},"location":{"name":"Boundary Waters Canoe Area Wilderness, Ely, United States","city":"Ely","country":"United States","position":{"latitude":47.941562,"longitude":-91.215398}},"views":185210729,"downloads":144826}]'
  )
  return response[0]

  // return await unsplash.photos.getRandom({
  //     query: description,
  //     count: 1,
  // }).then(r => {
  //     console.log(r)
  //     return r.response?.[0]
  // })
}
