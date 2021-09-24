import React, { createContext, ReactChild, ReactElement, useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../components/loading/Loading';

const AuthContext = createContext<{
  authKey: string | null,
  changeAuthKey: (x: string) => void
} | null>(null)

export const AuthContextProvider = ({ children }: { children: ReactChild }): ReactElement => {
  const [authKey, setAuthKey] = useState<null | string>(null)
  const [isLoading, setIsLoading] = useState(true)

  const changeAuthKey = async (newAuthKey: string) => {
    await AsyncStorage.setItem('API_Key', newAuthKey)
    setAuthKey(newAuthKey)
    setIsLoading(false)
  }

  useEffect(() => {
    (async () => {
      const apiKey = await AsyncStorage.getItem('API_Key')
      setAuthKey(apiKey)
      setIsLoading(false)
      return;
    })()
  }, [])

  return (
    isLoading ?
      <Loading /> :
      <AuthContext.Provider value={{ authKey, changeAuthKey }}>
        {children}
      </AuthContext.Provider>
  )
}

export default AuthContext