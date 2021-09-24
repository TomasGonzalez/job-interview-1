import { useNavigation } from '@react-navigation/core'
import moment from 'moment'
import React, { ReactElement } from 'react'
import { Image, Linking, View, Text, TouchableOpacity } from 'react-native'

import styles from './newsItem.style'

const NewsItem = ({ item, onPress }: { item: any, onPress: () => void }): ReactElement => {
  const publishDate = new Date(item.publishedAt)
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.mainBody}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            {item.title}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: item.urlToImage
            }}
            style={styles.imageStyle}
          />
        </View>
      </View>
      <View style={styles.metaContainer}>
        <Text style={styles.authorText}>
          Author: {item.author || 'Anonymous'}
        </Text>
        <Text>
          {moment(publishDate).format("MMM Do YY")}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default NewsItem