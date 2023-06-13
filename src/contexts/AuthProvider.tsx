import * as React from 'react'
import { host } from '../constant'
import { ChildProps, IAuthContext } from '../types/auth.context'

/* Typescript section, JS guys can ignore for now */
export type AuthProviderProps = ChildProps
type UserInfo = Pick<IAuthContext, 'id' | 'token'>

type LoginFunc = IAuthContext['login']
type LogoutFunc = IAuthContext['logout']
type GetAuthHeaderFunc = IAuthContext['getAuthHeader']
type IsOwnPostFunc = IAuthContext['isOwnPost']

/* End Typescript section */

const AuthContext = React.createContext<IAuthContext | null>(null)

const retrieveUserData = (token: string) =>
  fetch(`https://${host}/auth/me`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json())

export const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false)
  const [userInfo, setUserInfo] = React.useState<UserInfo>({
    id: null,
    token: null,
  })

  const login: LoginFunc = async (username, password) => {
    try {
      const accessToken = 'foobar'
      // TODO: write login logic here, once you got token, the rest is to retrieve user info from /auth/me API

      const { id } = await retrieveUserData(accessToken)

      // TODO: update login and ALL RELATED STATES after login succeed
    } catch (error) {
      // TODO: define how error is handling here
    }
  }

  const logout: LogoutFunc = async () => {
    // TODO: logout procedures
  }

  const getAuthHeader: GetAuthHeaderFunc = () => ({
    // TODO: (Optional) if you're interested in complete this function,
    // it'll help generate Authorization header which can be use in fetch() function
    Authorization: `Bearer `,
  })

  const isOwnPost: IsOwnPostFunc = (post) => {
    // TODO: (Optional) if you're interested in complete this function,
    // it'll enable you to use isOwnPost from useAuth() in order to decided if each post can be edited
    return false
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        getAuthHeader,
        isOwnPost,
        ...userInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
