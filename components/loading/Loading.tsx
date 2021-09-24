import React, { ReactElement } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

import styles from './Loading.style'
import { colors } from '../../theme'

const Loading = (): ReactElement => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.primary} />
    </View >
  )
}

export default Loading