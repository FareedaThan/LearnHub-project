import { ReactNode } from 'react'
import { ContentDto } from './dto'

type FetchAuthorizationHeader = {
  Authorization: `Bearer ${string}`
}

export interface IAuthContext {
  id: string | null
  user: string | null
  token: string | null
  isLoggedIn: boolean
  isAlert: boolean
  login: (username: string, password: string) => Promise<unknown>
  logout: () => void

  // Optional, but if we're able to implement below function, it would be helpful :)
  getAuthHeader: () => FetchAuthorizationHeader
  isOwnPost: (c: ContentDto) => boolean
}

export interface ChildProps {
  children: ReactNode
}
