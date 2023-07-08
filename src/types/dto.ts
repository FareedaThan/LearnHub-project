export interface ContentDto {
  id: number
  videoTitle: string
  videoUrl: string
  comment: string
  rating: number
  thumbnailUrl: string
  creatorName: string
  creatorUrl: string
  postedBy: UserDto
  createdAt: Date
  updatedAt: Date
}

export interface UserDto {
  id: string
  username: string
  name: string
  registeredAt: Date
}

export interface CredentialDto {
  accessToken: string
}

export interface ErrorDto {
  statusCode: number
  message: string
  error: string
}
