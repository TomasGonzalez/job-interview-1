import React, { ReactElement, useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import AuthContext from '../../contexts/AuthContext'
import styles from './login.style'

/**
 * The only purpose of this component is to simulate a login, 
 * the only reason I decided to make it 
 * is beacause the specifications of the app require the API key to be saved in the async-storage,
 * so I decided to make the login as it is the only logical reason for saving the token in the async-storage even thought 
 * I found it kinda wierd because there wasn't a login required in the spects.
 */

const Login = (): ReactElement => {
  const authContext = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>
        Login to store the API key of the service in the AsyncStorage.
      </Text>
      <TouchableOpacity onPress={() => authContext?.changeAuthKey('2a2bd21377bd4cb1a3657052986ebc91')} style={styles.loginButton}>
        <Text style={styles.loginText}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login