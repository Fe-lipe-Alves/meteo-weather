export class UnsplashImageModel {
  public id: string
  public search: string
  public slug: string
  public created_at: string
  public updated_at: string
  public promoted_at: any
  public width: number
  public height: number
  public color: string
  public blur_hash: string
  public description: any
  public alt_description: string
  public urls: Urls
  public links: Links
  public likes: number
  public liked_by_user: boolean
  public current_user_collections: any[]
  public sponsorship: any
  public topic_submissions: TopicSubmissions
  public user: User
  public exif: Exif
  public location: Location
  public views: number
  public downloads: number

  constructor(object: any) {
    this.id = object.id
    this.search = object.search
    this.slug = object.slug
    this.created_at = object.created_at
    this.updated_at = object.updated_at
    this.promoted_at = object.promoted_at
    this.width = object.width
    this.height = object.height
    this.color = object.color
    this.blur_hash = object.blur_hash
    this.description = object.description
    this.alt_description = object.alt_description
    this.urls = object.urls
    this.links = object.links
    this.likes = object.likes
    this.liked_by_user = object.liked_by_user
    this.current_user_collections = object.current_user_collections
    this.sponsorship = object.sponsorship
    this.topic_submissions = object.topic_submissions
    this.user = object.user
    this.exif = object.exif
    this.location = object.location
    this.views = object.views
    this.downloads = object.downloads
  }
}

class Urls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

class Links {
  self: string
  html: string
  download: string
  download_location: string
}

class TopicSubmissions {}

class User {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username: any
  portfolio_url: any
  bio: string
  location: string
  links: Links2
  profile_image: ProfileImage
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social
}

class Links2 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

class ProfileImage {
  small: string
  medium: string
  large: string
}

class Social {
  instagram_username: string
  portfolio_url: any
  twitter_username: any
  paypal_email: any
}

class Exif {
  make: string
  model: string
  name: string
  exposure_time: string
  aperture: string
  focal_length: string
  iso: number
}

class Location {
  name: any
  city: any
  country: any
  position: Position
}

class Position {
  latitude: any
  longitude: any
}
